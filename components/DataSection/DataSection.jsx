import Image from 'next/image'
import NTLogo from '../../assets/images/nt-logo.svg'
import BLogo from '../../assets/images/b-logo.svg'
import CLogo from '../../assets/images/c-logo.svg'
import InteractiveLogo from '../../assets/images/interactive-logo.svg'
import MultichartsLogo from '../../assets/images/multicharts-logo.svg'
import MetatraderLogo from '../../assets/images/metatrader-logo.svg'
import CqgLogo from '../../assets/images/cqg-logo.svg'
import KinetickLogo from '../../assets/images/kinetick-logo.svg'
import BinanceLogo from '../../assets/images/binance-logo.svg'
import TsLogo from '../../assets/images/ts-logo.svg'
import RithmicLogo from '../../assets/images/rithmic-logo.svg'
import SchwabLogo from '../../assets/images/schwab-logo.svg'

const DataSection = () => {
  return (
    <section>
      <div className='container'>
        <div className='grid grid-cols-2 items-center'>
          <div className='flex gap-[65px] p-[42px] items-center'>
            <div className='flex flex-col gap-[50.82px]'>
              <Image src={NTLogo} alt='icon' />

              <Image src={BLogo} alt='icon' />

              <Image src={CLogo} alt='icon' />
            </div>

            <div className='flex flex-col gap-[50.82px]'>
              <Image src={InteractiveLogo} alt='icon' />

              <Image src={MultichartsLogo} alt='icon' />

              <Image src={MetatraderLogo} alt='icon' />

              <Image src={CqgLogo} alt='icon' />

              <Image src={NTLogo} alt='icon' />

              <Image src={KinetickLogo} alt='icon' />
            </div>

            <div className='flex flex-col gap-[50.82px]'>
              <Image src={BinanceLogo} alt='icon' />

              <Image src={TsLogo} alt='icon' />

              <Image src={RithmicLogo} alt='icon' />

              <Image src={CLogo} alt='icon' />

              <Image src={TsLogo} alt='icon' />

              <Image src={InteractiveLogo} alt='icon' />

              <Image src={MultichartsLogo} alt='icon' />
            </div>

            <div className='flex flex-col gap-[50.82px]'>
              <Image src={MetatraderLogo} alt='icon' />

              <Image src={SchwabLogo} alt='icon' />

              <Image src={BinanceLogo} alt='icon' />

              <Image src={NTLogo} alt='icon' />
            </div>

            <div className='flex flex-col gap-[50.82px]'>
              <Image src={InteractiveLogo} alt='icon' />

              <Image src={RithmicLogo} alt='icon' />

              <Image src={NTLogo} alt='icon' />
            </div>
          </div>

          <div>
            <h6 className='text-[#0171E3] font-SfProSemibold text-[14px] leading-[14px] tracking-[-0.28px]  '>
              Major Data centers worldwide
            </h6>

            <h4 className='mt-[4px] mb-[16px] text-[#F5F5F7] font-SfProDisplaySemibold text-[40px] leading-[48px]'>
              Choose the right data center location for your futures VPS
            </h4>

            <p className='text-[#b5b5b5] font-SfProRegular text-[18px] leading-[27px] tracking-[-0.36px]'>
              Experience peak trading performance by selecting from our <br />
              institutional data centers worldwide
            </p>

            <div className='flex flex-col gap-[8px] mt-[16px] mb-[32px]'>
              <label className='text-white font-SfProRegular text-[12px] leading-[12px] tracking-[-0.072px]'>
                Select your brokers
              </label>

              <div className='flex items-center gap-[7.98px] w-[100%] h-[40px] py-[8px] px-[12px] rounded-[12px] border border-solid bg-[#1D1D1F] border-[#ffffff0c]'>
                <svg
                  width='16'
                  height='17'
                  viewBox='0 0 16 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle
                    cx='7.66634'
                    cy='8.16683'
                    r='6.33333'
                    stroke='#666666'
                  />
                  <path
                    d='M12.333 12.8335L14.6663 15.1668'
                    stroke='#666666'
                    stroke-linecap='round'
                  />
                </svg>

                <input
                  type='text'
                  placeholder='Enter your selected broker here...'
                  className='w-[100%] h-[100%] bg-[transparent] outline-none placeholder:text-[#666666] border-none text-white text-[13px] font-SfProRegular'
                />
              </div>
            </div>

            <button className='inline-flex justify-center items-center text-white font-GiestMedium text-[13px] leading-[19.5px] gap-[8px] h-[32px] py-[12px] px-[16px] rounded-[8px] shadow-Shadow1 bg-[#0171E3]'>
              <svg
                width='16'
                height='17'
                viewBox='0 0 16 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M8.63747 0.672361C8.6078 0.586693 8.54138 0.523837 8.46128 0.505461C8.38109 0.487096 8.29818 0.515706 8.24096 0.58145L3.94119 5.52536C3.86125 5.61728 3.84987 5.75971 3.91395 5.86617C3.97803 5.97264 4.0999 6.01375 4.20554 5.96453L7.90534 4.24111L11.7746 11.1976C11.8406 11.3161 11.9757 11.3587 12.0869 11.296C12.1979 11.2333 12.2483 11.0861 12.2031 10.9559L8.63747 0.672361ZM6.29302 7.40135C6.3552 7.28098 6.326 7.12722 6.22551 7.04588C6.12503 6.96453 5.98602 6.98213 5.90415 7.08656L0.0601284 14.5407C0.00403145 14.6122 -0.0144122 14.7117 0.0115756 14.8025C0.0375635 14.8933 0.104143 14.962 0.186839 14.9833L6.03086 16.4931C6.14202 16.5218 6.25584 16.459 6.30352 16.3424C6.3512 16.226 6.31964 16.0879 6.22793 16.0118L3.16158 13.4636L6.29302 7.40135ZM14.0539 9.17349C14.016 9.04815 13.9029 8.97218 13.7867 8.99376C13.6705 9.01545 13.5853 9.12836 13.5853 9.26079V13.5084L6.45272 13.6654C6.32821 13.6681 6.22611 13.7771 6.21727 13.9167C6.20843 14.0563 6.29577 14.1805 6.41868 14.203L15.7204 15.9078C15.8039 15.9232 15.8885 15.8881 15.9431 15.8155C15.9977 15.7429 16.0144 15.6435 15.9871 15.5535L14.0539 9.17349Z'
                  fill='white'
                />
              </svg>
              Get your VPS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataSection
