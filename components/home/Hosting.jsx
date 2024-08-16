import React from 'react'
import Image from 'next/image'
const Hosting = () => {
  return (
    <div id='hosting' className='w-full  lg:mt-[40px] relative'>
      <Image
        alt='hosting'
        width={2600}
        className='  hidden lg:block lg:h-[940px]'
        height={2000}
        src={'/home/hosting.png'}
      />
      <Image
        alt='server rack'
        width={2600}
        className='  lg:hidden w-full min-h-[2100px] fixonmini'
        height={2000}
        src={'/hosting_mob.png'}
      />
      <div className='absolute  p-5 lg:p-0 z-10 top-0 left-0 w-full h-full'>
        <h1 className='text-[32px] font-semibold text-center mt-[120px] text-white'>
          Everything you need for trading server hosting
        </h1>
        <p className='text-[16px] text-[#9394A1] text-center mt-2'>
          Stop worrying about the infrastructure. We’ll handle that.{' '}
          <br className='hidden lg:block' />
          Focus on trading while your algorithmic trading systems run 24/7.
        </p>
        <div className=' max-w-[1216px] mx-auto mt-[40px] grid grid-cols-1 lg:grid-cols-3 gap-2'>
          <div className='w-full relative'>
            <Image
              alt='encryption'
              width={2600}
              className=' object-cover '
              height={2000}
              src={'/home/encrypt.png'}
            />
            <div
              className='absolute top-0 left-0 w-full h-full
             z-10 p-5'>
              <p className='text-white pt-[5px] text-[13px]'>
                Encrypted Networks
              </p>
              <p className='text-[13px] pt-1 text-[#9394A1] leading-[20px]'>
                Ultra-secure networking, authentication, and control panel to
                ensure full security of your trading systems.{' '}
              </p>
            </div>
          </div>
          <div className='w-full'>
            <div className='w-full relative'>
              <Image
                alt='logos'
                width={2600}
                className=' object-cover '
                height={2000}
                src={'/home/multiple.png'}
              />
              <div
                className='absolute bottom-0 left-0 w-full
             z-10 p-5'>
                <p className='text-white pt-[35px] text-[13px]'>
                  Multiple Broker Support
                </p>
                <p className='text-[13px] pt-1 text-[#9394A1] leading-[20px]'>
                  Seamlessly trade through every broker. Our servers are
                  optimized for software like NinjaTrader and MetaTrader.
                </p>
              </div>
            </div>
            <div className='w-full mt-2 relative'>
              <Image
                alt='datacenter'
                width={2600}
                className=' object-cover '
                height={2000}
                src={'/home/datacenter.png'}
              />
              <div
                className='absolute bottom-0 left-0 w-full
             z-10 p-5'>
                <p className='text-white pt-[35px] text-[13px]'>
                  Datacenter Locations
                </p>
                <p className='text-[13px] pt-1 text-[#9394A1] leading-[20px]'>
                  Located within Equinix datacenters in Chicago <br />
                  and New York.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <div className='w-full relative'>
              <Image
                alt='rebooting'
                width={2600}
                className=' object-cover '
                height={2000}
                src={'/home/reboot.png'}
              />
              <div
                className='absolute top-0 left-0 w-full
             z-10 p-5'>
                <p className='text-white pt-[5px] text-[13px]'>Remote Reboot</p>
                <p className='text-[13px] pt-1 text-[#9394A1] leading-[20px]'>
                  Gain full control of your server by leveraging QuantVPS’s
                  control panel to reinstall and reboot, anytime.
                </p>
              </div>
            </div>
            <div className='w-full mt-2 relative'>
              <Image
                alt='background'
                width={2600}
                className=' object-cover '
                height={2000}
                src={'/home/anytime.png'}
              />
              <div
                className='absolute bottom-0 left-0 w-full
             z-10 p-5'>
                <p className='text-white pt-[35px] text-[13px]'>
                  Anytime, anywhere
                </p>
                <p className='text-[13px] pt-1 text-[#9394A1] leading-[20px]'>
                  Login to your server through the ultra-secure portal to ensure
                  that you never miss a trade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hosting
