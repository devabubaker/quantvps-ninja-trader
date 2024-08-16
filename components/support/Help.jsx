import React from 'react'
import Image from 'next/image'
import { openChat } from '@/util/intercomProvider'

const Help = () => {
  return (
    <div className='w-full bg-[#FAFAFA] min-h-screen pt-[40px] pb-[80px]'>
      <div className='flex items-center justify-center'>
        <div className='w-[100px]'>
          <Image
            alt='help sign'
            width={300}
            height={300}
            src={'/help.png'}
            className='object-cover'
          />
        </div>{' '}
      </div>
      {/* <h1 className="text-main text-center pb-3 text-[40px] f_bold font-semibold">
        How can we help?
      </h1> */}
      {/* <p className="text-body text-center  lg:leading-[33px] text-[20px] lg:text-[24px]">
        Discover solutions through our community{" "}
        <span className="text-black">documentation, guides,</span> and <br />{" "}
        <span className="text-black">community</span>
      </p> */}
      <div className='mt-5 max-w-[780px] mx-auto'>
        <div className='border lg:max-w-[400px] mx-auto rounded-[6px]'>
          <div className=' text-[16px] w-full border-b py-[20px] px-[20px] font-semibold text-main'>
            How can we help?
          </div>
          <div className='p-[20px]'>
            <p className='text-[16px] leading-[24px]'>
              Get instant support from our awesome team of support staff.
            </p>
            <button
              onClick={openChat}
              className='mt-8 w-full bg-white text-[16px] flex justify-center
              items-center gap-2 font-semibold border rounded-[6px] py-[8px]'>
              <div className='w-[32px]'>
                <Image
                  alt='Telegram'
                  width={300}
                  height={300}
                  src={'/telegram.svg'}
                  className='object-cover'
                />
              </div>
              Chat with Support
            </button>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

          {/* <div className="border rounded-[6px]">
            <div className=" text-[16px] w-full border-b py-[20px] px-[20px] font-semibold text-main">
              QuantVPS Customer Support
            </div>
            <div className="p-[20px]">
              <p className="text-[16px] leading-[24px]">
                Submit a case directly to our customer success team.
              </p>
              <button className="mt-8 w-full bg-main text-white text-[16px] flex justify-center
              items-center gap-2 font-semibold border rounded-[6px] py-[12px]">
                Submit a Ticket
                <div className="w-[3.5px]">
                  <Image
                    width={300}
                    height={300}
                    src={"/arrow.svg"}
                    className="object-cover"
                  />
                </div>
              </button>
            </div>
          </div> */}
        {/* </div> */}
        {/* <IssueForm /> */}
      </div>
    </div>
  )
}

export default Help
