import React, { useContext, useState, useEffect } from 'react'
import Image from 'next/image'
import { MyContext } from '@/pages/_app'
import { getTemplates } from '@/datawagon'
import ModalReinstall from './modalReinstall'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
const Reinstall = ({ getProductData, product, rloading, setRloading }) => {
  const { currentServer } = useContext(MyContext)
  const [allOS, setAllOS] = useState([])
  const [open2, setOpen2] = useState(false)
  const [osID, setOsID] = useState(0)
  useEffect(() => {
    if (currentServer) {
      getTemplates(currentServer?.dataWagan?.id, currentServer.dedicated).then(
        res => {
          let filterData = res
            ?.filter(
              item =>
                item?.distro === 'windows' ||
                item?.distro === 'ubuntu' ||
                item.billing_id?.indexOf('win') > -1 ||
                item?.billing_id?.indexOf('ubuntu') > -1
            )
            .map(v => {
              v.name = v.name.replace('(Trial)', '').trim()
              return v
            })
          setOsID(filterData[0].osid)
          setAllOS([...filterData])
        }
      )
    }
  }, [currentServer])
  const [loading, setLoading] = useState(false)

  const [second, setSecond] = useState(0)

  useEffect(() => {
    let intervalId

    if (loading) {
      // Start the timer if loading is true
      intervalId = setInterval(() => {
        setSecond(prevSecond => prevSecond + 1)
      }, 1000)
    } else {
      // Clear the interval if loading becomes false
      clearInterval(intervalId)
    }

    // Cleanup function to clear interval on component unmount or when loading changes
    return () => clearInterval(intervalId)
  }, [loading])

  useEffect(() => {
    if (product?.vps?.data?.status === 'running') {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [product])

  return (
    <div className='mt-[26px] border overflow-hidden border-[#FDD8D8] rounded-[6px]'>
      <ModalReinstall
        setRloading={setRloading}
        getProductData={getProductData}
        allOS={allOS}
        osID={osID}
        setOsID={setOsID}
        open={open2}
        setOpen={setOpen2}
      />

      <div className=' p-[20px] bg-white'>
        <h2 className='text-main font-semibold pb-2 text-[20px]'>
          Reinstall Operating System
        </h2>
        <p className='text-[14px]  text-main leading-[22px] pb-2 '>
          Current Build:{' '}
          <span className='font-semibold'>{product?.vps?.data?.os_name}</span>
        </p>
        <div className='flex items-center flex-wrap gap-y-2 lg:gap-2 pt-2'>
          <p className='text-[14px] text-main leading-[22px]  '>
            Choose your desired operating system :
          </p>
          {allOS?.length > 0 &&
            <div className='flex'>
              <div>
                <Select defaultValue={osID} onValueChange={e => setOsID(e)}>
                  <SelectTrigger className='w-full capitalize'>
                    <SelectValue placeholder='Operating systems' />
                  </SelectTrigger>
                  <SelectContent>
                    {allOS?.map((item, ind) =>
                      <SelectItem key={ind} value={item?.osid}>
                        {' '}
                        {item.name}
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
          }
        </div>
      </div>
      <div
        className='py-[13px] relative flex-wrap gap-2 bg-[#FFF0F0] px-[24px] border-t border-[#FDD8D8] flex items-center justify-between
'>
        {allOS.length === 0 &&
          <div className='absolute top-0 left-0 z-50 w-full h-full bg-[#DA2F35] bg-opacity-15'></div>
        }
        {/* { && } */}
        <p className='text-[#9B3434] text-[14px]'>
          This action is not reversible — please continue with caution.
        </p>

        {!rloading ?
          <button
            onClick={() => setOpen2(true)}
            className='bg-[#DA2F35] px-[16px] py-[8px] text-[14px] font-semibold rounded-[8px] text-white flex items-center gap-2'>
            Reinstall
            <div className='w-[19px] cursor-pointer'>
              <Image
                alt='reinstall'
                width={300}
                height={300}
                src={'/reinstall.svg'}
                className='object-cover'
              />
            </div>
          </button>
          :
          <button
            disabled
            className='bg-[#DA2F35]  px-[16px] py-[8px] text-[14px] font-semibold rounded-[8px] text-white flex items-center gap-2'>
            Reinstalling...
            <div className='w-[19px] duration-100 animate-spin '>
              <Image
                alt='reinstall'
                width={300}
                height={300}
                src={'/reinstall.svg'}
                className='object-cover'
              />
            </div>
          </button>
        }
      </div>
    </div>
  )
}

export default Reinstall
