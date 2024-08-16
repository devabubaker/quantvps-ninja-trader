import React from 'react'
import Image from 'next/image'
const Access = () => {
  return (
    <div className='my-[40px] p-5 lg:p-0'>
      <h1 className=' font-semibold text-[#171717] -tracking-[2.4px] text-[30px] lg:text-[40px] leading-[38px] text-center lg:leading-[48px]'>
        Full access to your server via our control panel.{' '}
        <br className='hidden lg:block' />{' '}
        <span className='text-[#666666] font-normal'>
          Reboot, rebuild, and deploy 24/7. No support tickets.
        </span>
      </h1>{' '}
      <div className='max-w-[1120px] mx-auto'>
        <Image
          alt='display'
          width={1600}
          className=' object-cover mt-8'
          height={1000}
          src={'/reboot.png'}
        />
      </div>
    </div>
  )
}

export default Access
