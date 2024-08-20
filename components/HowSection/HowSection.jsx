import Image from 'next/image'
import OneImage from '../../assets/images/1.svg'
import TwoImage from '../../assets/images/2.svg'
import ThreeImage from '../../assets/images/3.svg'
import Arrow from '../../assets/images/arrow.svg'

const HowSection = () => {
  return (
    <section>
      <div className='container pt-[200px] pb-[240px]'>
        <div className='text-center flex flex-col gap-[.4rem] mb-[64px]'>
          <h6 className='text-[#0171E3] font-SfProSemibold text-[14px] leading-[14px] tracking-[-0.28px]'>
            Get started in 3 steps...
          </h6>

          <h3 className='text-[#F5F5F7] font-SfProDisplaySemibold text-[40px] leading-[44px]'>
            How it works
          </h3>
        </div>

        <div className='relative flex justify-between gap-[40px]'>
          <Image
            src={Arrow}
            alt='image'
            className='absolute left-[30%] top-[15%]'
          />

          <Image
            src={Arrow}
            alt='image'
            className='absolute left-[60%] top-[15%]'
          />

          <div className='flex flex-col items-center text-center w-[373px]'>
            <span className='number font-GiestSemiBold text-[180px] leading-[180px]'>
              1
            </span>

            <div className='flex flex-col gap-[.6rem] mt-[-50px]'>
              <h4 className='text-[#F8F8F8F2] font-GiestSemiBold text-[24px] leading-[28.8px]'>
                Sign up with QuantVPS
              </h4>

              <p className='text-[#B5B5B5] font-GiestRegular text-[16px] leading-[24px]'>
                Sign up with QuantVPS to get access to your server credentials
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center text-center w-[373px]'>
            <span className='number font-GiestSemiBold text-[180px] leading-[180px]'>
              2
            </span>

            <div className='flex flex-col gap-[.6rem] mt-[-50px]'>
              <h4 className='text-[#F8F8F8F2] font-GiestSemiBold text-[24px] leading-[28.8px]'>
                Download Software
              </h4>

              <p className='text-[#B5B5B5] font-GiestRegular text-[16px] leading-[24px]'>
                Download your trading software of choice: NinjaTrader,
                MetaTrader, or Thinkorswim & MORE
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center text-center w-[373px]'>
            <span className='number font-GiestSemiBold text-[180px] leading-[180px]'>
              3
            </span>

            <div className='flex flex-col gap-[.6rem] mt-[-50px]'>
              <h4 className='text-[#F8F8F8F2] font-GiestSemiBold text-[24px] leading-[28.8px]'>
                Trade, uninterrupted
              </h4>

              <p className='text-[#B5B5B5] font-GiestRegular text-[16px] leading-[24px]'>
                Activate your trading systems and let them run automatically
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowSection
