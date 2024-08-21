import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '../../assets/images/logo.png'
import DeployServerIcon from '../../assets/images/deploy-server-icon.svg'

const Header = () => {
  return (
    <header className=''>
      <div className='pt-[16px] backdrop-blur-[102px] pb-[12px] px-[40px] bg-[#1D1D1F]'>
        <div className='flex items-center h-[32px] backdrop-blur-[102px] justify-between max-w-[1200px] mx-auto'>
          <div className='basis-[25%] flex justify-start'>
            <Link href='/'>
              <Image src={LogoImg} alt='logo' className='max-w-[145px]' />
            </Link>
          </div>

          <div className='flex basis-[50%] justify-center'>
            <ul className='flex items-center justify-center gap-[32px]'>
              {[
                'Benefits',
                'Features',
                'Brokers',
                'How It Works',
                'Pricing',
                'FAQ'
              ].map((item, i) =>
                <li key={i}>
                  <button className='text-white text-[14px] leading-[21px] font-SfProRegular'>
                    {item}
                  </button>
                </li>
              )}
            </ul>
          </div>

          <div className='basis-[25%] flex justify-end'>
            <div className='flex items-center gap-[16px]'>
              <button className='inline-flex justify-center items-center h-[32px] px-[24px] py-[12px] rounded-[8px] border border-solid border-white  text-[13px] font-SfProMedium leading-[19.5px] text-white'>
                Get Help
              </button>

              <button className='btn inline-flex items-center justify-center gap-[8px] h-[32px] py-[12px] px-[16px] rounded-[8px] bg-[#0171E3]  text-[13px] font-SfProMedium leading-[19.5px] text-white'>
                <Image src={DeployServerIcon} alt='icon' /> Deploy Server
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='py-[16px] px-[6px] bg-[#0171E3] flex items-center justify-center gap-[10px]'>
        <div className='text-white font-SfProRegular text-[13px] leading-[19.5px]'>
          August VPS Promotion:
        </div>

        <div className='flex items-center gap-[4px] text-white font-SfProSemibold text-[13px] leading-[19.5px]'>
          GET 50% OFF NEW ORDERS{' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'>
            <path
              d='M2.66406 8H13.3307M13.3307 8L9.33073 4M13.3307 8L9.33073 12'
              stroke='white'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>

        <div className='text-white font-SfProRegular text-[13px] leading-[19.5px]'>
          4 hours 15 minutes 12 seconds left
        </div>
      </div>
    </header>
  )
}

export default Header
