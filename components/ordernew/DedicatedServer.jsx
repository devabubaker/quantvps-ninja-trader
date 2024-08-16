import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  useCallback
} from 'react'

import DedicatedCard from './DedicatedCard'
import { getOffers } from '@/datawagon'
import OrderDedicatedModal from './OrderDedicatedModal'

import { MyContext } from '@/pages/_app'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Skeleton from '../global/Skeleton'
const DedicatedServer = ({ setPaymentOpen, setPaymentNotDoneOpen }) => {
  const { thisUser } = useContext(MyContext)

  const [loading, setLoading] = useState(true)
  const [dediacated, setDediacated] = useState([])

  const orderNewServer = useCallback(async () => {
    setLoading(true)
    const productData = [
      ...(await getOffers(11))?.products || [],
      ...(await getOffers(13))?.products || []
    ]
    setLoading(false)
    const sortonstocklevel = productData
      .filter(item => item?.configoptions?.configoption?.length > 0)
      .sort((b, a) => a.stocklevel - b.stocklevel)
    setDediacated(sortonstocklevel)
  }, [])

  useEffect(() => {
    orderNewServer()
  }, [orderNewServer])

  const [open, setOpen] = useState(false)
  const [selectedServer, setSelectedServer] = useState(null)
  return (
    <div className='bg-white border shadow-sm rounded-[6px] p-5'>
      <OrderDedicatedModal
        setPaymentNotDoneOpen={setPaymentNotDoneOpen}
        setPaymentOpen={setPaymentOpen}
        open={open}
        setOpen={setOpen}
        oneserver={selectedServer}
      />

      <div className='mt-4  '>
        {!loading ?
          <Carousel
            opts={{
              align: 'start'
            }}
            className='w-full'>
            <div className='flex items-end mb-4 justify-between w-full'>
              <div>
                <h2 className='text-[22px] font-semibold text-main'>
                  Dedicated Servers
                </h2>
                <p className='text-[14px] text-body'>
                  Explore Available Dedicated Servers
                </p>
              </div>
              <div className='flex relative items-center gap-2'>
                <CarouselPrevious className='relative' />
                <CarouselNext className='relative' />
              </div>
            </div>
            <CarouselContent>
              {dediacated.map((item, ind) =>
                <CarouselItem
                  key={ind}
                  className='md:basis-1/2 py-2 lg:basis-1/3'>
                  <DedicatedCard
                    thisUser={thisUser}
                    setSelectedServer={setSelectedServer}
                    setOpen={setOpen}
                    key={ind}
                    item={item}
                  />
                </CarouselItem>
              )}
            </CarouselContent>
          </Carousel>
          :
          <Carousel
            opts={{
              align: 'start'
            }}
            className='w-full'>
            <div className='flex items-end mb-4 justify-between w-full'>
              <div>
                <h2 className='text-[22px] font-semibold text-main'>
                  Dedicated Servers
                </h2>
                <p className='text-[14px] text-body'>
                  Explore Available Dedicated Servers
                </p>
              </div>
              <div className='flex relative items-center gap-2'>
                <CarouselPrevious className='relative' />
                <CarouselNext className='relative' />
              </div>
            </div>
            <CarouselContent>
              {Array.from({ length: 5 }).map((item, ind) =>
                <CarouselItem key={ind} className='md:basis-1/2 lg:basis-1/3'>
                  <Skeleton className={'h-[160px] w-full'} />
                </CarouselItem>
              )}
            </CarouselContent>
          </Carousel>
        }
      </div>
    </div>
  )
}

export default DedicatedServer
