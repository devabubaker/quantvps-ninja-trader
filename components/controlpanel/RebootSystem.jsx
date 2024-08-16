import React from 'react'

import Image from 'next/image'
const RebootSystem = ({ setOpen, rloading, loading }) => {
  return (
    <div className='mt-[26px] border overflow-hidden border-[#FDD8D8] rounded-[6px]'>
      <div className=' p-[20px] bg-white'>
        <h2 className='text-main font-semibold pb-2 text-[20px]'>
          Reboot System
        </h2>
        <p className='text-[14px] text-main leading-[22px] pb-[26px]'>
          If you are having issues with your server, you can reboot your server
          here remotely. Reboots can take up to 30 minutes.
        </p>
      </div>
      <div className='py-[13px] bg-[#FFF0F0] flex-wrap gap-3 px-[24px] border-t border-[#FDD8D8] flex items-center justify-between'>
        <p className='text-[#9B3434] text-[14px]'>
          Reboots start immediately and can take up to 30 minutes.
        </p>

        {!rloading ?
          <>
            {!loading ?
              <button
                onClick={() => setOpen(true)}
                className='bg-[#DA2F35] px-[16px] py-[8px] text-[14px] font-semibold rounded-[8px] text-white flex items-center gap-2'>
                Reboot
                <div className='w-[14px] cursor-pointer'>
                  <Image
                    width={300}
                    height={300}
                    src={'/reboot.svg'}
                    className='object-cover'
                    alt='reboot'
                  />
                </div>
              </button>
              :
              <button
                disabled
                className='bg-[#DA2F35] px-[16px] py-[8px] text-[14px] font-semibold rounded-[8px] text-white flex items-center gap-2'>
                Rebooting
                <div
                  className={
                    'w-[14px] duration-100 animate-spin cursor-pointer'
                  }>
                  <Image
                    width={300}
                    height={300}
                    src={'/reboot.svg'}
                    className='object-cover'
                    alt='reboot'
                  />
                </div>
              </button>
            }
          </>
          :
          <button
            disabled
            className='bg-[#DA2F35] px-[16px] bg-opacity-30 py-[8px] text-[14px] font-semibold rounded-[8px] text-white flex items-center gap-2'>
            Reboot
            <div className='w-[14px] cursor-pointer'>
              <Image
                width={300}
                height={300}
                src={'/reboot.svg'}
                className='object-cover'
                alt='reboot'
              />
            </div>
          </button>
        }
      </div>
    </div>
  )
}

export default RebootSystem
