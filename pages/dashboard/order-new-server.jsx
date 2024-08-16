import React, { useState, useEffect, useContext, useCallback } from 'react'
import Image from 'next/image'
import DedicatedServer from '../../components/ordernew/DedicatedServer'
import { servers } from '../../data/servers'
import ModalBuyServer from '../../components/ordernew/OrderServerModal'
import { getOffers } from '@/datawagon'
import PaymentConfirm from '../../components/global/PaymentConfirm'
import PaymentNotDone from '../../components/global/PaymentNotDone'
import { MyContext } from '../_app'
import Skeleton from '../../components/global/Skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import Link from 'next/link'
import { Button } from '../../components/ui/button'
import Head from 'next/head'
const OrderNew = () => {
  const [open1, setOpen1] = useState(false)
  const [selectedServer, setSelectedServer] = useState(null)
  const [mainVpServers, setMainVpServers] = useState([])
  const [vpsAll, setVpsAll] = useState([])

  const orderNewServer = useCallback(async () => {
    const productData = (await getOffers(19))?.products || []
    setMainVpServers([...productData])
    let demServers = servers
    // TODO swap arrays for empty productData case
    productData.forEach(item => {
      const idx = demServers.findIndex(v => v.pid === item.pid)
      if (demServers[idx]) demServers[idx].stock = item.stocklevel
    })
    setVpsAll([...demServers])
  }, [])

  useEffect(() => {
    orderNewServer()
  }, [orderNewServer])

  const [paymentOpen, setPaymentOpen] = useState(false)
  const [paymentNotDoneOpen, setPaymentNotDoneOpen] = useState(false)
  const { thisUser } = useContext(MyContext)
  const { setOpenPaymentAdd } = useContext(MyContext)
  return (
    <>
      <Head>
        <title>Order new server QuantVPS</title>
      </Head>
      <>
        <ModalBuyServer
          open={open1}
          setOpen={setOpen1}
          oneserver={selectedServer}
          mainVpServers={vpsAll}
          setPaymentOpen={setPaymentOpen}
          setPaymentNotDoneOpen={setPaymentNotDoneOpen}
        />
        <PaymentConfirm open={paymentOpen} setOpen={setPaymentOpen} />
        <PaymentNotDone
          open={paymentNotDoneOpen}
          setOpen={setPaymentNotDoneOpen}
        />

        <div className='lg:max-w-[1200px] py-[40px] mx-auto px-4'>
          <h1 className='text-main font-semibold text-[32px]'>
            Deploy New Server
          </h1>
          <div className='text-[14px] mt-2 flex items-center gap-1 text-[#666666]'>
            Seamlessly scale your trading environments{' '}
            <Link className='text-[#0068D6] flex items-center ' href={'/'}>
              Learn more
              <div className='w-[17px]'>
                <Image
                  alt='external link'
                  width={300}
                  height={300}
                  src={'/link.svg'}
                  className='object-cover'
                />
              </div>{' '}
            </Link>
          </div>
        </div>
        <div className='bg-[#FAFAFA] min-h-screen py-[40px]'>
          <div className='max-w-[1200px] px-3 lg:p-0 mx-auto'>
            <div className='flex items-center justify-center w-full mb-5'>
              <div className='w-[60px]'>
                <Image
                  alt='order'
                  width={300}
                  height={300}
                  src={'/order.png'}
                  className='object-cover'
                />
              </div>
            </div>
            <DedicatedServer
              setPaymentNotDoneOpen={setPaymentNotDoneOpen}
              setPaymentOpen={setPaymentOpen}
            />

            <div className=' mt-8 overflow-x-auto'>
              <div className='mt-5 bg-white min-w-[1100px] w-full p-5 border rounded-[6px]'>
                <h2 className='text-[20px] font-semibold text-main'>
                  Virtual Private Servers
                </h2>
                <p className='text-[14px] mt-2 mb-4 text-body'>
                  Explore Available Virtual Private Servers (VPS) in Chicago &
                  New York.
                </p>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='text-[14px] text-start'>
                        Plan
                      </TableHead>
                      <TableHead className='text-[14px]'>Inventory</TableHead>
                      <TableHead className='text-[14px] '>CPU</TableHead>
                      <TableHead className='text-[14px] '>RAM</TableHead>
                      <TableHead className='text-[14px] '>Storage</TableHead>
                      <TableHead className='text-[14px] '>Price</TableHead>
                      <TableHead className='text-[14px] '></TableHead>
                    </TableRow>
                  </TableHeader>
                  {mainVpServers.length > 0 &&
                    <TableBody>
                      {vpsAll?.map((item, ind) =>
                        <TableRow key={ind}>
                          <TableCell>
                            <div className='flex items-center  gap-2'>
                              <div className='w-[17px]'>
                                <Image
                                  alt='logo'
                                  width={300}
                                  height={300}
                                  src={'/order/icn.svg'}
                                  className='object-cover'
                                />
                              </div>
                              <p className='text-main text-[14px] font-semibold'>
                                {item?.name}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell className='text-[13px]'>
                            <p className='text-main  text-[14px] font-semibold'>
                              {item?.stock}
                            </p>
                          </TableCell>
                          <TableCell className='text-[14px]'>
                            <p className='text-main   text-[14px] font-semibold'>
                              {item?.description?.CPU}
                            </p>
                          </TableCell>
                          <TableCell className='text-[14px]'>
                            <p className='text-main text-[14px] font-semibold'>
                              {item?.description?.RAM}
                            </p>
                          </TableCell>
                          <TableCell className='text-[14px]'>
                            <p className='text-main text-[14px] font-semibold'>
                              {item?.description?.storage}
                            </p>
                          </TableCell>
                          <TableCell className='text-[14px]'>
                            <p className='text-main text-[14px] font-semibold'>
                              ${item?.pricing} / month
                            </p>
                          </TableCell>
                          <TableCell className='text-[14px]'>
                            <div className='flex items-center justify-center'>
                              {item?.stock > 0 ?
                                <>
                                  {thisUser?.invoice_settings?.default_payment_method ?
                                    <Button
                                      onClick={() => {
                                        setOpen1(true)
                                        setSelectedServer(item?.pid)
                                      }}
                                      className='bg-main text-white rounded-[6px] px-[10px] py-[8px] text-[14px]'>
                                      Deploy
                                    </Button>
                                    :
                                    <Button
                                      onClick={() => {
                                        setOpenPaymentAdd(true)
                                      }}
                                      className='bg-main text-white rounded-[6px] px-[10px] py-[8px] text-[14px]'>
                                      Deploy
                                    </Button>
                                  }
                                </>
                                :
                                <Button
                                  disabled
                                  className='bg-body text-white rounded-[6px] px-[10px] py-[8px] text-[14px]'>
                                  Deploy
                                </Button>
                              }
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  }
                </Table>
                {mainVpServers.length <= 0 &&
                  <>
                    <Skeleton className={'h-[53px] mb-1 w-full'} />
                    <Skeleton className={'h-[53px] w-full mb-1'} />
                    <Skeleton className={'h-[53px] w-full mb-1'} />
                    <Skeleton className={'h-[53px] w-full mb-1'} />
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

const ServerRow = ({ item, setSelectedServer, setOpen, thisUser }) => {
  const { setOpenPaymentAdd } = useContext(MyContext)
  return (
    <div className=' w-full py-[8px] border-b items-center grid grid-cols-7'>
      <div className='flex items-center justify-center gap-2'>
        <div className='w-[17px]'>
          <Image
            alt='logo'
            width={300}
            height={300}
            src={'/order/icn.svg'}
            className='object-cover'
          />
        </div>
        <p className='text-main text-[14px] font-semibold'> {item?.name}</p>
      </div>

      <p className='text-main pl-10 text-[14px] font-semibold'>
        Stock: {item?.stock}
      </p>

      <p className='text-main pl-6  text-[14px] font-semibold'>
        {' '}
        {item?.description?.CPU}{' '}
      </p>

      <p className='text-main text-[14px] font-semibold'>
        RAM: {item?.description?.RAM}{' '}
      </p>

      <p className='text-main text-center text-[14px] font-semibold'>
        Storage: {item?.description?.storage}{' '}
      </p>
      <p className='text-main text-center text-[14px] font-semibold'>
        {' '}
        ${item?.pricing}{' '}
      </p>
      <div className='flex items-center justify-center'>
        {item?.stock > 0 ?
          <>
            {thisUser?.card_info ?
              <button
                onClick={() => {
                  setOpen(true)
                  setSelectedServer(item?.pid)
                }}
                className='bg-main text-white rounded-[6px] px-[10px] py-[8px] text-[14px]'>
                Deploy
              </button>
              :
              <button
                onClick={() => {
                  setOpenPaymentAdd(true)
                }}
                className='bg-main text-white rounded-[6px] px-[10px] py-[8px] text-[14px]'>
                Deploy
              </button>
            }
          </>
          :
          <button
            disabled
            className='bg-body text-white rounded-[6px] px-[10px] py-[8px] text-[14px]'>
            Deploy
          </button>
        }
      </div>
    </div>
  )
}

export default OrderNew
