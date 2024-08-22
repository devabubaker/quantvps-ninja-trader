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
import Amex from '../../assets/images/Amex.png'
import Maestro from '../../assets/images/Maestro.png'
import Mastercard from '../../assets/images/Mastercard.png'
import Paypal from '../../assets/images/Paypal.png'
import Visa from '../../assets/images/Visa.png'
import ApplePay from '../../assets/images/ApplePay.png'
import GooglePay from '../../assets/images/GooglePay.png'
import stripe from '../../assets/images/stripe.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='px-[40px] pb-[80px] max-w-[980px] mx-auto'>
      <div className='px-[22px]'>
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

      <div className='h-[121px] w-[100%] flex flex-col justify-center'>
        <div className='flex justify-between items-center pb-[10px] border-b border-solid border-[#424245]'>
          <p className='text-[#6E6E73] font-SfProRegular text-[12px] leading-[16px] tracking-[-0.12px]'>
            Optimize your <span className='text-[#2997FF]'>execution</span>{' '}
          </p>

          <ul className='flex p-[2px] items-center rounded-[12px] border border-solid border-[#0071E3]'>
            <li>
              <Link
                href=''
                className='lang-link flex min-w-[42px] py-[2px] px-[7px] rounded-[10px] text-[#0071E3] font-SfProRegular text-[12px] leading-[16px] tracking-[-0.12px]'>
                Русский
              </Link>
            </li>

            <li>
              <Link
                href=''
                className='lang-link flex min-w-[42px] py-[2px] px-[7px] rounded-[10px] text-[#0071E3] font-SfProRegular text-[12px] leading-[16px] tracking-[-0.12px]'>
                Polski
              </Link>
            </li>

            <li>
              <Link
                href=''
                className='lang-link flex min-w-[42px] py-[2px] px-[7px] rounded-[10px] text-[#0071E3] font-SfProRegular text-[12px] leading-[16px] tracking-[-0.12px]'>
                Español
              </Link>
            </li>

            <li>
              <Link
                href=''
                className='lang-link flex min-w-[42px] py-[2px] px-[7px] rounded-[10px] text-[#fff] font-SfProRegular text-[12px] leading-[16px] tracking-[-0.12px] bg-[#0071E3]'>
                English
              </Link>
            </li>
          </ul>
        </div>

        <div className='flex items-center mt-[11.47px] justify-between'>
          <div className='flex items-center gap-[17.07px]'>
            <p className='text-[#6E6E73] font-SfProRegular text-[12px] leading-[16px] tracking-[-0.12px]'>
              Copyright © 2024 <span className='text-[#A1A1A6]'>QuantVPS</span>{' '}
              All rights reserved.
            </p>

            <ul className='flex items-center gap-[10.3px]'>
              <li>
                <Link
                  href=''
                  className='text-[#A1A1A6] font-SfProRegular flex text-[12px] pr-[11px] border-r border-solid border-[#424245] leading-[16px] tracking-[-0.12px]'>
                  Legal
                </Link>
              </li>

              <li>
                <Link
                  href=''
                  className='text-[#A1A1A6] font-SfProRegular flex text-[12px] pr-[11px] border-r border-solid border-[#424245] leading-[16px] tracking-[-0.12px]'>
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href=''
                  className='text-[#A1A1A6] font-SfProRegular flex text-[12px] leading-[16px] tracking-[-0.12px]'>
                  SLA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className='flex items-center gap-[8px]'>
              <li>
                <Link href=''>
                  <svg
                    className='opacity-[0.3]'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='25'
                    viewBox='0 0 24 25'
                    fill='none'>
                    <path
                      d='M8.10429 21.3379C16.0292 21.3379 20.363 14.702 20.363 8.94756C20.363 8.7591 20.3592 8.57151 20.3508 8.38469C21.1941 7.76797 21.9219 7.00437 22.5 6.12969C21.728 6.47658 20.8973 6.71006 20.0258 6.81533C20.9153 6.27623 21.5982 5.42334 21.9204 4.40671C21.0746 4.91382 20.1494 5.2713 19.1845 5.46375C18.3983 4.61729 17.279 4.08789 16.0396 4.08789C13.6602 4.08789 11.7308 6.03809 11.7308 8.44201C11.7308 8.78377 11.7687 9.11609 11.8426 9.43496C8.2617 9.25284 5.08643 7.51999 2.96138 4.8851C2.57864 5.54967 2.37732 6.30497 2.37799 7.07387C2.37799 8.58471 3.1386 9.91843 4.2953 10.6987C3.6111 10.6776 2.94191 10.4908 2.34401 10.1541C2.34337 10.1724 2.34337 10.1902 2.34337 10.2097C2.34337 12.3186 3.82848 14.0795 5.79992 14.4785C5.42966 14.5804 5.04759 14.6319 4.66383 14.6317C4.38669 14.6317 4.11659 14.6041 3.85409 14.5532C4.40261 16.2835 5.99315 17.5426 7.87892 17.5778C6.40427 18.746 4.54666 19.4418 2.52772 19.4418C2.18427 19.4421 1.8411 19.422 1.5 19.3815C3.40682 20.6168 5.67076 21.3379 8.10429 21.3379Z'
                      fill='white'
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link href=''>
                  <svg
                    className='opacity-[0.3]'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='25'
                    viewBox='0 0 24 25'
                    fill='none'>
                    <path
                      d='M22.0612 7.55988C21.8197 6.63605 21.1081 5.90848 20.2046 5.66156C18.5669 5.21289 12 5.21289 12 5.21289C12 5.21289 5.43315 5.21289 3.79544 5.66156C2.89193 5.90852 2.18033 6.63605 1.93882 7.55988C1.5 9.23438 1.5 12.728 1.5 12.728C1.5 12.728 1.5 16.2217 1.93882 17.8962C2.18033 18.82 2.89193 19.5173 3.79544 19.7642C5.43315 20.2129 12 20.2129 12 20.2129C12 20.2129 18.5669 20.2129 20.2046 19.7642C21.1081 19.5173 21.8197 18.82 22.0612 17.8962C22.5 16.2217 22.5 12.728 22.5 12.728C22.5 12.728 22.5 9.23438 22.0612 7.55988ZM9.85226 15.9V9.55605L15.3409 12.7281L9.85226 15.9Z'
                      fill='white'
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link href=''>
                  <svg
                    className='opacity-[0.3]'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='25'
                    viewBox='0 0 24 25'
                    fill='none'>
                    <path
                      d='M18.0423 8.14013C17.9017 7.77826 17.7338 7.51977 17.4624 7.24837C17.1911 6.97696 16.9327 6.80895 16.5709 6.6684C16.2979 6.56178 15.8877 6.43577 15.1318 6.40184C14.3145 6.36469 14.069 6.35661 11.9984 6.35661C11.74 6.35661 11.509 6.35661 11.3023 6.35661C9.85675 6.35661 9.58056 6.3663 8.86506 6.39861C8.10918 6.43254 7.69893 6.55855 7.42597 6.66517C7.06418 6.80572 6.80576 6.97373 6.53442 7.24514C6.26308 7.51654 6.0951 7.77502 5.95458 8.1369C5.84799 8.40992 5.722 8.82026 5.68809 9.57632C5.65094 10.3938 5.64286 10.6377 5.64286 12.7088C5.64286 14.7799 5.65094 15.0254 5.68809 15.8429C5.722 16.5989 5.8496 17.0093 5.95458 17.2823C6.0951 17.6442 6.26308 17.9026 6.53442 18.1741C6.80576 18.4455 7.06418 18.6135 7.42597 18.754C7.69893 18.8606 8.10918 18.9867 8.86506 19.0222C9.68232 19.0594 9.92782 19.0674 11.9984 19.0674C14.069 19.0674 14.3145 19.0594 15.1318 19.0222C15.8877 18.9883 16.2979 18.8623 16.5709 18.7556C16.9327 18.6151 17.1911 18.4471 17.4624 18.1757C17.7338 17.9043 17.9017 17.6474 18.0423 17.2855C18.1489 17.0125 18.2748 16.6022 18.3088 15.8461C18.3459 15.0287 18.354 14.7831 18.354 12.7136C18.354 10.6442 18.3459 10.3986 18.3088 9.58116C18.2748 8.82511 18.1472 8.41477 18.0423 8.14175V8.14013ZM11.9984 16.6959C9.80022 16.6959 8.01711 14.914 8.01711 12.7136C8.01711 10.5133 9.80022 8.73141 11.9984 8.73141C14.1966 8.73141 15.9797 10.5149 15.9797 12.7136C15.9797 14.9123 14.1982 16.6959 11.9984 16.6959ZM16.1364 9.50523C15.6228 9.50523 15.2061 9.08843 15.2061 8.5747C15.2061 8.06097 15.6228 7.64417 16.1364 7.64417C16.65 7.64417 17.0667 8.06097 17.0667 8.5747C17.0667 9.08843 16.65 9.50523 16.1364 9.50523Z'
                      fill='white'
                    />
                    <path
                      d='M18.0423 8.14013C17.9017 7.77826 17.7338 7.51977 17.4624 7.24837C17.1911 6.97696 16.9327 6.80895 16.5709 6.6684C16.2979 6.56178 15.8877 6.43577 15.1318 6.40184C14.3145 6.36469 14.069 6.35661 11.9984 6.35661C11.74 6.35661 11.509 6.35661 11.3023 6.35661C9.85675 6.35661 9.58056 6.3663 8.86506 6.39861C8.10918 6.43254 7.69893 6.55855 7.42597 6.66517C7.06418 6.80572 6.80576 6.97373 6.53442 7.24514C6.26308 7.51654 6.0951 7.77502 5.95458 8.1369C5.84799 8.40992 5.722 8.82026 5.68809 9.57632C5.65094 10.3938 5.64286 10.6377 5.64286 12.7088C5.64286 14.7799 5.65094 15.0254 5.68809 15.8429C5.722 16.5989 5.8496 17.0093 5.95458 17.2823C6.0951 17.6442 6.26308 17.9026 6.53442 18.1741C6.80576 18.4455 7.06418 18.6135 7.42597 18.754C7.69893 18.8606 8.10918 18.9867 8.86506 19.0222C9.68232 19.0594 9.92782 19.0674 11.9984 19.0674C14.069 19.0674 14.3145 19.0594 15.1318 19.0222C15.8877 18.9883 16.2979 18.8623 16.5709 18.7556C16.9327 18.6151 17.1911 18.4471 17.4624 18.1757C17.7338 17.9043 17.9017 17.6474 18.0423 17.2855C18.1489 17.0125 18.2748 16.6022 18.3088 15.8461C18.3459 15.0287 18.354 14.7831 18.354 12.7136C18.354 10.6442 18.3459 10.3986 18.3088 9.58116C18.2748 8.82511 18.1472 8.41477 18.0423 8.14175V8.14013ZM11.9984 16.6959C9.80022 16.6959 8.01711 14.914 8.01711 12.7136C8.01711 10.5133 9.80022 8.73141 11.9984 8.73141C14.1966 8.73141 15.9797 10.5149 15.9797 12.7136C15.9797 14.9123 14.1982 16.6959 11.9984 16.6959ZM16.1364 9.50523C15.6228 9.50523 15.2061 9.08843 15.2061 8.5747C15.2061 8.06097 15.6228 7.64417 16.1364 7.64417C16.65 7.64417 17.0667 8.06097 17.0667 8.5747C17.0667 9.08843 16.65 9.50523 16.1364 9.50523Z'
                      fill='white'
                    />
                    <path
                      d='M11.9984 15.2985C13.4256 15.2985 14.5826 14.1413 14.5826 12.7137C14.5826 11.2862 13.4256 10.1289 11.9984 10.1289C10.5712 10.1289 9.41416 11.2862 9.41416 12.7137C9.41416 14.1413 10.5712 15.2985 11.9984 15.2985Z'
                      fill='white'
                    />
                    <path
                      d='M11.9984 15.2985C13.4256 15.2985 14.5826 14.1413 14.5826 12.7137C14.5826 11.2862 13.4256 10.1289 11.9984 10.1289C10.5712 10.1289 9.41416 11.2862 9.41416 12.7137C9.41416 14.1413 10.5712 15.2985 11.9984 15.2985Z'
                      fill='white'
                    />
                    <path
                      d='M22.4806 6.76378C22.4144 5.92048 22.2706 5.35344 21.9751 4.75409C21.7328 4.26297 21.4647 3.89787 21.0754 3.52307C20.3809 2.85909 19.5314 2.45522 18.5187 2.30982C18.0277 2.23874 17.9308 2.21774 15.4209 2.21289H12.0032C7.61975 2.21289 6.33733 2.21774 6.0886 2.23874C5.18897 2.31305 4.62852 2.45522 4.01961 2.75893C3.54961 2.99318 3.17813 3.26297 2.81311 3.64262C2.14605 4.33405 1.74227 5.18381 1.59691 6.19674C1.52584 6.68785 1.50485 6.78801 1.5 9.29528C1.5 10.1321 1.5 11.2323 1.5 12.7089C1.5 17.0901 1.50485 18.3712 1.52584 18.62C1.59852 19.4956 1.73581 20.0465 2.02653 20.6491C2.58214 21.8026 3.64329 22.6685 4.8934 22.9916C5.32626 23.103 5.80434 23.1644 6.41809 23.1935C6.67813 23.2048 9.32856 23.2129 11.9806 23.2129C14.6327 23.2129 17.2847 23.2097 17.5383 23.1967C18.249 23.1628 18.6624 23.1079 19.1179 22.99C20.3761 22.6652 21.4179 21.8122 21.9848 20.6426C22.269 20.0546 22.4144 19.4827 22.4806 18.6523C22.4952 18.4714 22.5 15.5861 22.5 12.7056C22.5 9.82517 22.4935 6.94472 22.479 6.76378H22.4806ZM19.7042 15.9108C19.6654 16.7363 19.5346 17.3001 19.344 17.7929C19.1454 18.3034 18.8805 18.7347 18.4492 19.166C18.018 19.5974 17.5868 19.8623 17.0764 20.061C16.5838 20.2533 16.0185 20.3841 15.1931 20.4213C14.3662 20.4584 14.1029 20.4681 11.9968 20.4681C9.89063 20.4681 9.62736 20.4584 8.80042 20.4213C7.97508 20.3841 7.4114 20.2533 6.91878 20.061C6.4084 19.8623 5.97716 19.5974 5.54592 19.166C5.11467 18.7347 4.84979 18.3017 4.65113 17.7929C4.45893 17.3001 4.32972 16.7363 4.29096 15.9108C4.25381 15.0836 4.24412 14.8203 4.24412 12.7137C4.24412 10.6071 4.25381 10.3437 4.29096 9.51661C4.3281 8.69108 4.45893 8.12727 4.65113 7.63454C4.84979 7.12404 5.11467 6.6927 5.54592 6.26136C5.97716 5.83001 6.41001 5.56507 6.91878 5.36798C7.4114 5.17573 7.97508 5.04488 8.80042 5.00772C9.62736 4.97056 9.89225 4.96087 11.9952 4.96087H11.9984C14.1029 4.96087 14.3662 4.97056 15.1931 5.00772C16.0185 5.04488 16.5821 5.17573 17.0764 5.36798C17.5868 5.56507 18.018 5.83001 18.4492 6.26136C18.8805 6.6927 19.1454 7.12565 19.344 7.63454C19.5346 8.12727 19.6654 8.69108 19.7042 9.51661C19.7413 10.3437 19.751 10.6087 19.751 12.7137C19.751 14.8187 19.7413 15.0836 19.7042 15.9108Z'
                      fill='white'
                    />
                    <path
                      d='M22.4806 6.76378C22.4144 5.92048 22.2706 5.35344 21.9751 4.75409C21.7328 4.26297 21.4647 3.89787 21.0754 3.52307C20.3809 2.85909 19.5314 2.45522 18.5187 2.30982C18.0277 2.23874 17.9308 2.21774 15.4209 2.21289H12.0032C7.61975 2.21289 6.33733 2.21774 6.0886 2.23874C5.18897 2.31305 4.62852 2.45522 4.01961 2.75893C3.54961 2.99318 3.17813 3.26297 2.81311 3.64262C2.14605 4.33405 1.74227 5.18381 1.59691 6.19674C1.52584 6.68785 1.50485 6.78801 1.5 9.29528C1.5 10.1321 1.5 11.2323 1.5 12.7089C1.5 17.0901 1.50485 18.3712 1.52584 18.62C1.59852 19.4956 1.73581 20.0465 2.02653 20.6491C2.58214 21.8026 3.64329 22.6685 4.8934 22.9916C5.32626 23.103 5.80434 23.1644 6.41809 23.1935C6.67813 23.2048 9.32856 23.2129 11.9806 23.2129C14.6327 23.2129 17.2847 23.2097 17.5383 23.1967C18.249 23.1628 18.6624 23.1079 19.1179 22.99C20.3761 22.6652 21.4179 21.8122 21.9848 20.6426C22.269 20.0546 22.4144 19.4827 22.4806 18.6523C22.4952 18.4714 22.5 15.5861 22.5 12.7056C22.5 9.82517 22.4935 6.94472 22.479 6.76378H22.4806ZM19.7042 15.9108C19.6654 16.7363 19.5346 17.3001 19.344 17.7929C19.1454 18.3034 18.8805 18.7347 18.4492 19.166C18.018 19.5974 17.5868 19.8623 17.0764 20.061C16.5838 20.2533 16.0185 20.3841 15.1931 20.4213C14.3662 20.4584 14.1029 20.4681 11.9968 20.4681C9.89063 20.4681 9.62736 20.4584 8.80042 20.4213C7.97508 20.3841 7.4114 20.2533 6.91878 20.061C6.4084 19.8623 5.97716 19.5974 5.54592 19.166C5.11467 18.7347 4.84979 18.3017 4.65113 17.7929C4.45893 17.3001 4.32972 16.7363 4.29096 15.9108C4.25381 15.0836 4.24412 14.8203 4.24412 12.7137C4.24412 10.6071 4.25381 10.3437 4.29096 9.51661C4.3281 8.69108 4.45893 8.12727 4.65113 7.63454C4.84979 7.12404 5.11467 6.6927 5.54592 6.26136C5.97716 5.83001 6.41001 5.56507 6.91878 5.36798C7.4114 5.17573 7.97508 5.04488 8.80042 5.00772C9.62736 4.97056 9.89225 4.96087 11.9952 4.96087H11.9984C14.1029 4.96087 14.3662 4.97056 15.1931 5.00772C16.0185 5.04488 16.5821 5.17573 17.0764 5.36798C17.5868 5.56507 18.018 5.83001 18.4492 6.26136C18.8805 6.6927 19.1454 7.12565 19.344 7.63454C19.5346 8.12727 19.6654 8.69108 19.7042 9.51661C19.7413 10.3437 19.751 10.6087 19.751 12.7137C19.751 14.8187 19.7413 15.0836 19.7042 15.9108Z'
                      fill='white'
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className='text-[#696969] mt-[16px] mb-[20px] font-SfProRegular text-[10px] leading-[16px]'>
        Caution: Trading involves risk (including Futures and Forex) and is not
        suitable for every investor. An investor could potentially lose all or
        more than the initial investment. You are responsible for your financial
        decisions and we assume zero liability for money made or lost as a
        result of using our services. Only risk capital should be used for
        trading and only those with sufficient risk capital should consider
        trading. Visit{' '}
        <Link href='' className='underline'>
          quantvps.com/legal
        </Link>{' '}
        or contact{' '}
        <Link href='' className='underline'>
          support@quantvps.com
        </Link>{' '}
        for more.
      </p>

      <div className='flex gap-[8px] justify-end items-end'>
        <p className='text-[#6E6E73] font-SfProRegular text-[12px] leading-[16px] tracking-[-0.12px]'>
          Payment methods accepted:
        </p>

        <ul className='flex items-center gap-[8px]'>
          {[
            Amex,
            Maestro,
            Mastercard,
            Paypal,
            Visa,
            ApplePay,
            GooglePay,
            stripe
          ].map((item, i) =>
            <li key={i}>
              <Image
                src={item}
                alt='image'
                className={`h-[24px] w-auto ${i === 7 && 'opacity-[0.5]'}`}
              />
            </li>
          )}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
