import Image from 'next/image'
import EliteTraderLogo from '../../assets/images/elite-trader.svg'
import NinjaTraderLogo from '../../assets/images/ninja-trader.svg'
import EquinixLogo from '../../assets/images/euqinix.svg'
import Ten from '../../assets/images/10+.svg'
import HunderedK from '../../assets/images/100k+.svg'
import HunderedPercentPlus from '../../assets/images/100pplus.svg'

const CounterSection = () => {
  return (
    <section className='counter-section relative border-y border-solid border-[#ffffff0a]'>
      <div className='container py-[40px] flex justify-center items-center gap-[10px]'>
        <div className='flex flex-col gap-[12px] w-[240px] items-center text-center'>
          {/* <h4 className='text-white font-GiestMedium text-[32px] leading-[32px] tracking-[-0.64px] opacity-[0.71]'>
            10+
          </h4> */}

          <Image src={Ten} alt='vector' />

          <span className='text-white font-SfProRegular text-[14px] leading-[19.6px] opacity-[0.5]'>
            years in the business
          </span>
        </div>

        <div className='flex flex-col gap-[12px] w-[240px] items-center text-center'>
          {/* <h4 className='text-transparent bg-linearGradient2 bg-clip-text font-GiestMedium text-[32px] leading-[32px] tracking-[-0.64px] opacity-[0.71]'>
            100k+
          </h4> */}

          <Image src={HunderedK} alt='vector' />

          <span className='text-white font-SfProRegular text-[14px] leading-[19.6px] opacity-[0.5]'>
            servers deployed worldwide
          </span>
        </div>

        <div className='flex flex-col gap-[12px] w-[240px] items-center text-center'>
          {/* <h4 className='text-transparent bg-linearGradient2 bg-clip-text font-GiestMedium text-[32px] leading-[32px] tracking-[-0.64px] opacity-[0.71]'>
            100%+
          </h4> */}

          <Image src={HunderedPercentPlus} alt='vector' />

          <span className='text-white font-SfProRegular text-[14px] leading-[19.6px] opacity-[0.5]'>
            uptime guaranteed
          </span>
        </div>
      </div>

      <div className='container flex items-center justify-center gap-[28px] my-[40px]'>
        <div className='flex flex-col gap-[4px] '>
          <h6 className='font-SfProMedium text-[9.1px] italic leading-[13.65px] text-[#FFFFFF4D]'>
            Proud sponsor:
          </h6>

          <Image src={EliteTraderLogo} alt='image' />
        </div>

        <div className='flex flex-col gap-[4px]'>
          <h6 className='font-SfProMedium text-[9.1px] italic leading-[13.65px] text-[#FFFFFF4D]'>
            Proud authorized vendor:
          </h6>

          <Image src={NinjaTraderLogo} alt='image' />
        </div>

        <div className='flex flex-col gap-[4px] '>
          <h6 className='font-SfProMedium text-[9.1px] italic leading-[13.65px] text-[#FFFFFF4D]'>
            Powered by:
          </h6>

          <Image src={EquinixLogo} alt='image' />
        </div>
      </div>
    </section>
  )
}

export default CounterSection
