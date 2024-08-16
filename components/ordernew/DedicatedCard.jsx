import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { MyContext } from '../../pages/_app'

const DedicatedCard = ({ item, setOpen, setSelectedServer, thisUser }) => {
  const price = Math.ceil(parseInt(item?.pricing?.USD?.monthly) * 2)

  const { setOpenPaymentAdd } = useContext(MyContext)

  return (
    <>
      {item?.stocklevel > 0 ?
        <div className='bg-white ns cursor-pointer min-h-[160px] rounded-[6px] border px-5 pt-5'>
          <div className='flex items-center justify-between'>
            <div className='w-[32px] '>
              <Image
                alt='logo circle'
                width={300}
                height={300}
                src={'/order/dadi.png'}
                className='object-cover'
              />
            </div>
            {thisUser?.invoice_settings?.default_payment_method ?
              <button
                onClick={() => {
                  setOpen(true)
                  setSelectedServer(item)
                }}
                className=' rounded-[6px] text-[14px] text-white bg-main px-[15px] py-[8px]'>
                Deploy: ${price}/month
              </button>
              :
              <button
                onClick={() => {
                  setOpenPaymentAdd(true)
                }}
                className=' rounded-[6px] text-[14px] text-white bg-main px-[15px] py-[8px]'>
                Deploy: ${price}/month
              </button>
            }
          </div>
          <p className='text-main pt-3  font-medium text-[14px]'>
            Stock: {item?.stocklevel}
          </p>
          <p className='text-main  font-medium text-[14px]'>
            Location(s):{' '}
            {item?.configoptions?.configoption?.[0]?.options?.option?.map(
              locationItem => `${locationItem?.name}`
            )}
          </p>
          <p className='pt-1 text-[#666666] text-[12px]'>{item.name}</p>
        </div>
        :
        <div className='bg-white min-h-[160px]  rounded-[6px] border px-5 pt-5'>
          <div className=' opacity-50'>
            <div className='flex items-center justify-between'>
              <div className='w-[32px] '>
                <Image
                  alt='logo circle'
                  width={300}
                  height={300}
                  src={'/order/dadi.png'}
                  className='object-cover'
                />
              </div>
              <button
                disabled
                className=' rounded-[6px] text-[14px] text-white bg-main px-[15px] py-[8px]'>
                Deploy: ${price}/month
              </button>
            </div>
            <p className='text-main pt-3  font-medium text-[14px]'>
              Stock: {item?.stocklevel}
            </p>
            <p className='text-main  font-medium text-[14px]'>
              Location(s):{' '}
              {item?.configoptions?.configoption?.[0]?.options?.option?.map(
                locationItem => `${locationItem?.name}`
              )}
            </p>
            <p className='pt-1 text-[#666666] text-[12px]'>{item.name}</p>
          </div>
        </div>
      }
    </>
  )
}

export default DedicatedCard
