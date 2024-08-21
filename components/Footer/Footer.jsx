import {
  FooterAboutData,
  FooterAccountData,
  FooterMoreServicesData,
  FooterNavigationData,
  FooterResourcesData,
  FooterSupportData,
  FooterTradingServersData
} from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='px-[40px]'>
      <div className='px-[22px] max-w-[980px] mx-auto'>
        <div className='py-[17px] border-t border-solid border-[#424245]'>
          <div className='flex items-center pl-[25px] '>
            <div className='flex items-center gap-[11px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='16'
                viewBox='0 0 17 16'
                fill='none'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M8.9074 1.19647C8.8768 1.11787 8.8083 1.0602 8.7257 1.04334C8.643 1.02649 8.5575 1.05274 8.4985 1.11306L4.06436 5.64908C3.98192 5.73342 3.97018 5.8641 4.03626 5.96178C4.10235 6.05946 4.22803 6.09718 4.33697 6.05202L8.15239 4.47079L12.1426 10.8533C12.2106 10.962 12.35 11.0011 12.4646 10.9436C12.5791 10.8861 12.6311 10.751 12.5845 10.6316L8.9074 1.19647ZM6.48968 7.3703C6.5538 7.25986 6.52369 7.11879 6.42006 7.04416C6.31644 6.96952 6.17309 6.98567 6.08866 7.08148L0.0620074 13.9206C0.00415744 13.9862 -0.0148626 14.0775 0.0119374 14.1608C0.0387374 14.2441 0.107397 14.3071 0.192677 14.3267L6.21933 15.7119C6.33396 15.7383 6.45134 15.6806 6.50051 15.5737C6.54968 15.4669 6.51713 15.3402 6.42256 15.2703L3.26038 12.9324L6.48968 7.3703ZM14.4931 8.99623C14.454 8.88123 14.3374 8.81153 14.2175 8.83133C14.0977 8.85123 14.0098 8.95483 14.0098 9.07633V12.9735L6.65437 13.1175C6.52597 13.12 6.42068 13.22 6.41156 13.3481C6.40245 13.4762 6.49252 13.5901 6.61927 13.6108L16.2117 15.1749C16.2978 15.189 16.385 15.1568 16.4413 15.0902C16.4976 15.0236 16.5149 14.9324 16.4867 14.8498L14.4931 8.99623Z'
                  fill='white'
                  stroke='white'
                  stroke-width='0.2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>

              <span className='text-[#A1A1A6] font-SfProRegular text-[12px] leading-[16px] tracking-[-0.12px]'>
                QuantVPS
              </span>
            </div>

            <svg
              className='ml-[7px]'
              xmlns='http://www.w3.org/2000/svg'
              width='8'
              height='19'
              viewBox='0 0 8 19'
              fill='none'>
              <g clip-path='url(#clip0_3247_24837)'>
                <path
                  d='M0.969062 1.00708L7.17906 9.02708L0.969062 17.0371L0.289062 16.4971L6.09906 9.02708L0.299062 1.53708L0.969062 1.00708Z'
                  fill='#444444'
                />
              </g>
              <defs>
                <clipPath id='clip0_3247_24837'>
                  <rect
                    width='8'
                    height='18'
                    fill='white'
                    transform='translate(-0.320312 0.0305176)'
                  />
                </clipPath>
              </defs>
            </svg>

            <span className='mx-[11px] text-[#6E6E73] font-SfProRegular text-[12px] leading-[16px] tracking-[-0.12px]'>
              All Services Online
            </span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'>
              <path
                d='M6 11.5305C9.31371 11.5305 12 9.06808 12 6.03052C12 2.99295 9.31371 0.530518 6 0.530518C2.68629 0.530518 0 2.99295 0 6.03052C0 9.06808 2.68629 11.5305 6 11.5305Z'
                fill='#10B981'
                fill-opacity='0.2'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M6 9.69979C7.06087 9.69979 8.07827 9.31351 8.8284 8.62582C9.5786 7.9382 10 7.00558 10 6.03312C10 5.06066 9.5786 4.12803 8.8284 3.4404C8.07827 2.75276 7.06087 2.36646 6 2.36646C4.93913 2.36646 3.92172 2.75276 3.17157 3.4404C2.42143 4.12803 2 5.06066 2 6.03312C2 7.00558 2.42143 7.9382 3.17157 8.62582C3.92172 9.31351 4.93913 9.69979 6 9.69979ZM7.883 5.12058C7.9186 5.0894 7.9472 5.0521 7.96707 5.0108C7.987 4.96949 7.9978 4.92501 7.99893 4.87988C8.00007 4.83474 7.99153 4.78984 7.97373 4.74774C7.95593 4.70564 7.92927 4.66717 7.89527 4.63451C7.86127 4.60186 7.82053 4.57567 7.77547 4.55744C7.7304 4.5392 7.68193 4.52928 7.63267 4.52824C7.5834 4.52719 7.53447 4.53505 7.48853 4.55136C7.4426 4.56767 7.4006 4.59211 7.365 4.62329C6.61312 5.28183 5.9534 6.02344 5.401 6.83111L4.64 6.13396C4.60567 6.10018 4.56427 6.07309 4.51827 6.0543C4.47227 6.03552 4.42261 6.02542 4.37226 6.0246C4.32191 6.02378 4.27189 6.03228 4.2252 6.04957C4.17851 6.06685 4.13609 6.09259 4.10048 6.12523C4.06487 6.15787 4.0368 6.19675 4.01794 6.23956C3.99908 6.28236 3.98981 6.3282 3.99071 6.37436C3.99159 6.42052 4.00261 6.46603 4.02311 6.5082C4.04361 6.55037 4.07315 6.58832 4.11 6.61979L5.21 7.62861C5.25073 7.66595 5.3003 7.69418 5.35487 7.71111C5.40943 7.7281 5.46753 7.73329 5.52464 7.72633C5.58175 7.71936 5.63635 7.70042 5.68419 7.67102C5.73203 7.64157 5.77183 7.60246 5.8005 7.55662C6.36371 6.65731 7.06507 5.8369 7.883 5.12058Z'
                fill='#10B981'
              />
            </svg>
          </div>
        </div>

        <div className='pt-[5px] flex items-start self-stretch '>
          <div className='flex-1'>
            <div className='flex flex-col gap-[9.6px]'>
              <h4 className='text-[#F5F5F7] text-[12px] font-SfProSemibold leading-[16px] tracking-[-0.12px]'>
                Navigation
              </h4>

              <ul className='flex flex-col gap-[9.6px]'>
                {FooterNavigationData.map(item =>
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className='text-[#A1A1A6] text-[12px] font-SfProRegular leading-[16px] tracking-[-0.12px]'>
                      {item.linkText}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className='flex mt-[24px] flex-col gap-[9.6px]'>
              <h4 className='text-[#F5F5F7] text-[12px] font-SfProSemibold leading-[16px] tracking-[-0.12px]'>
                About
              </h4>

              <ul className='flex flex-col gap-[9.6px]'>
                {FooterAboutData.map(item =>
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className='text-[#A1A1A6] text-[12px] font-SfProRegular leading-[16px] tracking-[-0.12px]'>
                      {item.linkText}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-[9.6px]'>
              <h4 className='text-[#F5F5F7] text-[12px] font-SfProSemibold leading-[16px] tracking-[-0.12px]'>
                Resources
              </h4>

              <ul className='flex flex-col gap-[9.6px]'>
                {FooterResourcesData.map(item =>
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className='text-[#A1A1A6] text-[12px] font-SfProRegular leading-[16px] tracking-[-0.12px]'>
                      {item.linkText}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className='flex mt-[24px] flex-col gap-[9.6px]'>
              <h4 className='text-[#F5F5F7] text-[12px] font-SfProSemibold leading-[16px] tracking-[-0.12px]'>
                Support
              </h4>

              <ul className='flex flex-col gap-[9.6px]'>
                {FooterSupportData.map(item =>
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className='text-[#A1A1A6] text-[12px] font-SfProRegular leading-[16px] tracking-[-0.12px]'>
                      {item.linkText}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className='flex mt-[24px] flex-col gap-[9.6px]'>
              <h4 className='text-[#F5F5F7] text-[12px] font-SfProSemibold leading-[16px] tracking-[-0.12px]'>
                Account
              </h4>

              <ul className='flex flex-col gap-[9.6px]'>
                {FooterAccountData.map(item =>
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className='text-[#A1A1A6] text-[12px] font-SfProRegular leading-[16px] tracking-[-0.12px]'>
                      {item.linkText}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-[9.6px]'>
              <h4 className='text-[#F5F5F7] text-[12px] font-SfProSemibold leading-[16px] tracking-[-0.12px]'>
                Trading Servers
              </h4>

              <ul className='flex flex-col gap-[9.6px]'>
                {FooterTradingServersData.map(item =>
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className='text-[#A1A1A6] text-[12px] font-SfProRegular leading-[16px] tracking-[-0.12px]'>
                      {item.linkText}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-[9.6px]'>
              <h4 className='text-[#F5F5F7] text-[12px] font-SfProSemibold leading-[16px] tracking-[-0.12px]'>
                More Services
              </h4>

              <ul className='flex flex-col gap-[9.6px]'>
                {FooterMoreServicesData.map(item =>
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className='text-[#A1A1A6] text-[12px] font-SfProRegular leading-[16px] tracking-[-0.12px]'>
                      {item.linkText}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
