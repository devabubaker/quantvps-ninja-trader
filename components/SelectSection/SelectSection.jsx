import React, { useRef, useState } from 'react'
import Image from 'next/image'
import WebGlobe from '../../assets/images/web-globe.svg'
import DownArrow from '../../assets/images/down-arrow.svg'
import NtLogo from '../../assets/images/nt-logo.svg'
import MetatraderLogo from '../../assets/images/metatrader-logo.svg'
import TsLogo from '../../assets/images/ts-logo.svg'
import MultichartsLogo from '../../assets/images/multicharts-logo.svg'
import InteractiveLogo from '../../assets/images/interactive-logo.svg'
import ThinkLogo from '../../assets/images/think-logo.svg'
import BinanceLogo from '../../assets/images/binance-logo.svg'
import Clogo from '../../assets/images/c-logo.svg'
import ByLogo from '../../assets/images/by-logo.svg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles

import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan'
  // Add all other countries
]

const SelectSection = () => {
  const [selectedCountry, setSelectedCountry] = useState('')

  const handleChange = e => {
    setSelectedCountry(e.target.value)
  }

  return (
    <section className='p-[80px]'>
      <div className='bg-[#161618]'>
        <div className='flex py-[32px] flex-col gap-[8px] items-center text-center'>
          <h6 className='text-[#0171E3] font-GiestSemiBold text-[14px] leading-[14px] tracking-[-0.28px] '>
            VPS Configuration
          </h6>

          <h4 className='font-medium text-white text-[24px] leading-[31.2px] tracking-[-0.48px]'>
            Select your broker
          </h4>

          <p className='text-white font-GiestRegular leading-[24px] tracking-[-0.32px] max-w-[468px]'>
            Selecting your broker will automatically configure the deployment to
            the best location for the lowest latency
          </p>
        </div>

        <Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
          <SwiperSlide>
            {' '}
            <div className='flex justify-center'>
              <div className='w-[320px] p-[20px] border border-solid border-[#ffffff0a]'>
                <div className='flex flex-col gap-[8px]'>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    Data Center
                  </h3>

                  <div className='py-[10px] px-[12px] rounded-[8px] flex items-center justify-between border border-solid border-[#212121]'>
                    {/* Country Select Dropdown */}
                    <div className='country-dropdown-container gap-[7px] w-[100%] flex items-center'>
                      <Image src={WebGlobe} alt='icon' />

                      <select
                        id='country-select'
                        value={selectedCountry}
                        onChange={handleChange}
                        className='country-select w-[100%] bg-[transparent] border-none outline-none font-GiestMedium text-[14px] leading-[14px] text-white  cursor-pointer appearance-none'>
                        <option className='text-black' value=''>
                          Chicago
                        </option>
                        {countries.map((country, index) =>
                          <option
                            className='text-black'
                            key={index}
                            value={country}>
                            {country}
                          </option>
                        )}
                      </select>
                    </div>

                    <Image src={DownArrow} alt='icon' />
                  </div>
                </div>

                <div className='flex flex-col gap-[8px]'>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    Broker
                  </h3>

                  <ul className='flex flex-col gap-[12px]'>
                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={NtLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          NinjaTrader
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#22C55E'
                          />
                        </svg>

                        <span className='text-[#22C55E] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          1ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={MetatraderLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          MetaTrader
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#F97316'
                          />
                        </svg>

                        <span className='text-[#F97316] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          105ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={TsLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          TradeStation
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#F97316'
                          />
                        </svg>

                        <span className='text-[#F97316] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          123ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={MultichartsLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          MultiCharts
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#22C55E'
                          />
                        </svg>

                        <span className='text-[#22C55E] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          1ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={InteractiveLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          Interactive Brokers
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#EF4444'
                          />
                        </svg>

                        <span className='text-[#EF4444] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          567ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={ThinkLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          Thinkorswim
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#22C55E'
                          />
                        </svg>

                        <span className='text-[#22C55E] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          1ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={BinanceLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          Binance
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#F97316'
                          />
                        </svg>

                        <span className='text-[#F97316] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          123ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={Clogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          Coinbase
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#F97316'
                          />
                        </svg>

                        <span className='text-[#F97316] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          123ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={ByLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          ByBit
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#EF4444'
                          />
                        </svg>

                        <span className='text-[#EF4444] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          567ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center gap-[8px] py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='22'
                          height='19'
                          viewBox='0 0 22 19'
                          fill='none'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M11.7885 1.14973C11.7518 1.05541 11.6696 0.986205 11.5704 0.965973C11.4712 0.945753 11.3686 0.977253 11.2978 1.04964L5.97684 6.49286C5.87791 6.59407 5.86382 6.75089 5.94312 6.8681C6.02243 6.98532 6.17324 7.03058 6.30397 6.97639L10.8825 5.07891L15.6707 12.738C15.7523 12.8684 15.9196 12.9153 16.0571 12.8463C16.1945 12.7773 16.2569 12.6152 16.201 12.4719L11.7885 1.14973ZM8.88722 8.55833C8.96417 8.4258 8.92803 8.25651 8.80368 8.16696C8.67934 8.07739 8.50731 8.09677 8.406 8.21174L1.17402 16.4187C1.1046 16.4974 1.08177 16.607 1.11393 16.707C1.14609 16.8069 1.22849 16.8825 1.33082 16.906L8.5628 18.5683C8.70036 18.6 8.84122 18.5307 8.90022 18.4024C8.95922 18.2743 8.92016 18.1222 8.80668 18.0384L5.01206 15.2329L8.88722 8.55833ZM18.4913 10.5094C18.4444 10.3714 18.3045 10.2878 18.1606 10.3116C18.0168 10.3354 17.9114 10.4598 17.9114 10.6056V15.2822L9.08485 15.455C8.93077 15.458 8.80442 15.578 8.79348 15.7317C8.78255 15.8854 8.89063 16.0221 9.04273 16.047L20.5536 17.9239C20.657 17.9408 20.7616 17.9022 20.8292 17.8222C20.8967 17.7423 20.9175 17.6329 20.8836 17.5338L18.4913 10.5094Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.24'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                      </div>

                      <div>
                        <p className='text-white font-GiestRegular text-[13px] leading-[16.6px]'>
                          Didn’t see your broker? <br />{' '}
                          <strong>You can build your own</strong>
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div className='mt-[16px] text-end'>
                    <button className='h-[32px] py-[12px] text-[#2d2d2d] font-GiestMedium text-[13px] leading-[19.5px] px-[16px] inline-flex items-center justify-center gap-[8px] rounded-[8px] bg-[#4B4B4B]'>
                      Next Step{' '}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='17'
                        viewBox='0 0 16 17'
                        fill='none'>
                        <path
                          d='M6 4.10156L10 8.76823L6 13.4349'
                          stroke='#2D2D2D'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className='p-[20px] w-[240px]  border border-solid border-[#ffffff0a]'>
                <div>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    Server
                  </h3>
                </div>

                <div className='mt-[8px] flex flex-col gap-[12px]'>
                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='19'
                      viewBox='0 0 22 19'
                      fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.7885 1.14973C11.7518 1.05541 11.6696 0.986205 11.5704 0.965973C11.4712 0.945753 11.3686 0.977253 11.2978 1.04964L5.97684 6.49286C5.87791 6.59407 5.86382 6.75089 5.94312 6.8681C6.02243 6.98532 6.17324 7.03058 6.30397 6.97639L10.8825 5.07891L15.6707 12.738C15.7523 12.8684 15.9196 12.9153 16.0571 12.8463C16.1945 12.7773 16.2569 12.6152 16.201 12.4719L11.7885 1.14973ZM8.88722 8.55833C8.96417 8.4258 8.92803 8.25651 8.80368 8.16696C8.67934 8.07739 8.50731 8.09677 8.406 8.21174L1.17402 16.4187C1.1046 16.4974 1.08177 16.607 1.11393 16.707C1.14609 16.8069 1.22849 16.8825 1.33082 16.906L8.5628 18.5683C8.70036 18.6 8.84122 18.5307 8.90022 18.4024C8.95922 18.2743 8.92016 18.1222 8.80668 18.0384L5.01206 15.2329L8.88722 8.55833ZM18.4913 10.5094C18.4444 10.3714 18.3045 10.2878 18.1606 10.3116C18.0168 10.3354 17.9114 10.4598 17.9114 10.6056V15.2822L9.08485 15.455C8.93077 15.458 8.80442 15.578 8.79348 15.7317C8.78255 15.8854 8.89063 16.0221 9.04273 16.047L20.5536 17.9239C20.657 17.9408 20.7616 17.9022 20.8292 17.8222C20.8967 17.7423 20.9175 17.6329 20.8836 17.5338L18.4913 10.5094Z'
                        fill='#474747'
                        stroke='#474747'
                        stroke-width='0.24'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>

                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[112px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[82px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='25'
                      viewBox='0 0 24 25'
                      fill='none'>
                      <path
                        d='M6.50041 4.76807H14.0004C17.7716 4.76807 19.6573 4.76807 20.8288 5.93964C22.0004 7.11121 22.0004 8.99683 22.0004 12.7681C22.0004 16.5393 22.0004 18.4249 20.8288 19.5965C19.7295 20.6958 17.1211 20.7636 13.688 20.7678C13.3083 20.7683 13.0004 20.4603 13.0004 20.0806C13.0004 14.3851 8.38335 9.76807 2.68791 9.76807C2.30822 9.76807 1.99946 9.46023 2.00197 9.08054C2.00401 8.77088 2.00874 8.487 2.01967 8.376C2.20672 6.47689 3.70923 4.97437 5.60834 4.78733C5.8039 4.76807 6.03607 4.76807 6.50041 4.76807Z'
                        fill='#474747'
                      />
                      <path
                        d='M2 11.0181C1.58579 11.0181 1.25 11.3539 1.25 11.7681C1.25 12.1823 1.58579 12.5181 2 12.5181C6.55635 12.5181 10.25 16.2117 10.25 20.7681C10.25 21.1823 10.5858 21.5181 11 21.5181C11.4142 21.5181 11.75 21.1823 11.75 20.7681C11.75 15.3833 7.38478 11.0181 2 11.0181Z'
                        fill='#474747'
                      />
                      <path
                        d='M2 14.0181C1.58579 14.0181 1.25 14.3539 1.25 14.7681C1.25 15.1823 1.58579 15.5181 2 15.5181C4.8995 15.5181 7.25 17.8686 7.25 20.7681C7.25 21.1823 7.58579 21.5181 8 21.5181C8.41421 21.5181 8.75 21.1823 8.75 20.7681C8.75 17.0401 5.72792 14.0181 2 14.0181Z'
                        fill='#474747'
                      />
                      <path
                        d='M2 17.0181C1.58579 17.0181 1.25 17.3539 1.25 17.7681C1.25 18.1823 1.58579 18.5181 2 18.5181C3.24264 18.5181 4.25 19.5254 4.25 20.7681C4.25 21.1823 4.58579 21.5181 5 21.5181C5.41421 21.5181 5.75 21.1823 5.75 20.7681C5.75 18.697 4.07107 17.0181 2 17.0181Z'
                        fill='#474747'
                      />
                    </svg>

                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[112px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[82px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-[20px] w-[158px]  border border-solid border-[#ffffff0a]'>
                <div>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    # of strategies
                  </h3>
                </div>

                <div className='mt-[8px] flex flex-col gap-[12px]'>
                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-[20px] w-[280px]  border border-solid border-[#ffffff0a]'>
                <div>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    Plan
                  </h3>
                </div>

                <div className='mt-[8px] flex flex-col gap-[12px]'>
                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='19'
                      viewBox='0 0 22 19'
                      fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.7885 1.14973C11.7518 1.05541 11.6696 0.986205 11.5704 0.965973C11.4712 0.945753 11.3686 0.977253 11.2978 1.04964L5.97684 6.49286C5.87791 6.59407 5.86382 6.75089 5.94312 6.8681C6.02243 6.98532 6.17324 7.03058 6.30397 6.97639L10.8825 5.07891L15.6707 12.738C15.7523 12.8684 15.9196 12.9153 16.0571 12.8463C16.1945 12.7773 16.2569 12.6152 16.201 12.4719L11.7885 1.14973ZM8.88722 8.55833C8.96417 8.4258 8.92803 8.25651 8.80368 8.16696C8.67934 8.07739 8.50731 8.09677 8.406 8.21174L1.17402 16.4187C1.1046 16.4974 1.08177 16.607 1.11393 16.707C1.14609 16.8069 1.22849 16.8825 1.33082 16.906L8.5628 18.5683C8.70036 18.6 8.84122 18.5307 8.90022 18.4024C8.95922 18.2743 8.92016 18.1222 8.80668 18.0384L5.01206 15.2329L8.88722 8.55833ZM18.4913 10.5094C18.4444 10.3714 18.3045 10.2878 18.1606 10.3116C18.0168 10.3354 17.9114 10.4598 17.9114 10.6056V15.2822L9.08485 15.455C8.93077 15.458 8.80442 15.578 8.79348 15.7317C8.78255 15.8854 8.89063 16.0221 9.04273 16.047L20.5536 17.9239C20.657 17.9408 20.7616 17.9022 20.8292 17.8222C20.8967 17.7423 20.9175 17.6329 20.8836 17.5338L18.4913 10.5094Z'
                        fill='#474747'
                        stroke='#474747'
                        stroke-width='0.24'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>

                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[12px] w-[36px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[200px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[60px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[91px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='19'
                      viewBox='0 0 22 19'
                      fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.7885 1.14973C11.7518 1.05541 11.6696 0.986205 11.5704 0.965973C11.4712 0.945753 11.3686 0.977253 11.2978 1.04964L5.97684 6.49286C5.87791 6.59407 5.86382 6.75089 5.94312 6.8681C6.02243 6.98532 6.17324 7.03058 6.30397 6.97639L10.8825 5.07891L15.6707 12.738C15.7523 12.8684 15.9196 12.9153 16.0571 12.8463C16.1945 12.7773 16.2569 12.6152 16.201 12.4719L11.7885 1.14973ZM8.88722 8.55833C8.96417 8.4258 8.92803 8.25651 8.80368 8.16696C8.67934 8.07739 8.50731 8.09677 8.406 8.21174L1.17402 16.4187C1.1046 16.4974 1.08177 16.607 1.11393 16.707C1.14609 16.8069 1.22849 16.8825 1.33082 16.906L8.5628 18.5683C8.70036 18.6 8.84122 18.5307 8.90022 18.4024C8.95922 18.2743 8.92016 18.1222 8.80668 18.0384L5.01206 15.2329L8.88722 8.55833ZM18.4913 10.5094C18.4444 10.3714 18.3045 10.2878 18.1606 10.3116C18.0168 10.3354 17.9114 10.4598 17.9114 10.6056V15.2822L9.08485 15.455C8.93077 15.458 8.80442 15.578 8.79348 15.7317C8.78255 15.8854 8.89063 16.0221 9.04273 16.047L20.5536 17.9239C20.657 17.9408 20.7616 17.9022 20.8292 17.8222C20.8967 17.7423 20.9175 17.6329 20.8836 17.5338L18.4913 10.5094Z'
                        fill='#474747'
                        stroke='#474747'
                        stroke-width='0.24'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>

                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[12px] w-[36px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[200px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[60px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[91px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='19'
                      viewBox='0 0 22 19'
                      fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.7885 1.14973C11.7518 1.05541 11.6696 0.986205 11.5704 0.965973C11.4712 0.945753 11.3686 0.977253 11.2978 1.04964L5.97684 6.49286C5.87791 6.59407 5.86382 6.75089 5.94312 6.8681C6.02243 6.98532 6.17324 7.03058 6.30397 6.97639L10.8825 5.07891L15.6707 12.738C15.7523 12.8684 15.9196 12.9153 16.0571 12.8463C16.1945 12.7773 16.2569 12.6152 16.201 12.4719L11.7885 1.14973ZM8.88722 8.55833C8.96417 8.4258 8.92803 8.25651 8.80368 8.16696C8.67934 8.07739 8.50731 8.09677 8.406 8.21174L1.17402 16.4187C1.1046 16.4974 1.08177 16.607 1.11393 16.707C1.14609 16.8069 1.22849 16.8825 1.33082 16.906L8.5628 18.5683C8.70036 18.6 8.84122 18.5307 8.90022 18.4024C8.95922 18.2743 8.92016 18.1222 8.80668 18.0384L5.01206 15.2329L8.88722 8.55833ZM18.4913 10.5094C18.4444 10.3714 18.3045 10.2878 18.1606 10.3116C18.0168 10.3354 17.9114 10.4598 17.9114 10.6056V15.2822L9.08485 15.455C8.93077 15.458 8.80442 15.578 8.79348 15.7317C8.78255 15.8854 8.89063 16.0221 9.04273 16.047L20.5536 17.9239C20.657 17.9408 20.7616 17.9022 20.8292 17.8222C20.8967 17.7423 20.9175 17.6329 20.8836 17.5338L18.4913 10.5094Z'
                        fill='#474747'
                        stroke='#474747'
                        stroke-width='0.24'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>

                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[12px] w-[36px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[200px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[60px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[91px]'></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-[20px] w-[282px]  border border-solid border-[#ffffff0a]'>
                <div>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    Billing frequency
                  </h3>
                </div>

                <div className='mt-[8px] flex flex-col gap-[12px]'>
                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>
                </div>

                <div className='mt-[32px] h-[319px] border-t flex flex-col gap-[16px] border-solid border-[#212121] pt-[20px]'>
                  <div className='flex items-center justify-between'>
                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>

                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>

                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>

                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>
                  </div>
                </div>

                <div className='flex flex-col gap-[8px]'>
                  <div className='flex items-center gap-[6px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='17'
                      viewBox='0 0 16 17'
                      fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M2.25168 4.1565C2 4.51508 2 5.58094 2 7.71267V8.76247C2 12.5212 4.82597 14.3452 6.59904 15.1197C7.08001 15.3298 7.32049 15.4349 8 15.4349C8.67951 15.4349 8.91999 15.3298 9.40096 15.1197C11.174 14.3452 14 12.5212 14 8.76247V7.71267C14 5.58094 14 4.51508 13.7483 4.1565C13.4966 3.79792 12.4945 3.45487 10.4901 2.76876L10.1082 2.63804C9.06335 2.28039 8.54093 2.10156 8 2.10156C7.45907 2.10156 6.93666 2.28039 5.89182 2.63804L5.50994 2.76876C3.50555 3.45487 2.50335 3.79792 2.25168 4.1565ZM10.0396 7.7679C10.2236 7.56192 10.2057 7.24584 9.99967 7.06193C9.79369 6.87801 9.47761 6.8959 9.2937 7.10189L7.28571 9.35083L6.7063 8.70189C6.52239 8.4959 6.20631 8.47801 6.00033 8.66193C5.79434 8.84584 5.77645 9.16192 5.96036 9.3679L6.91275 10.4346C7.00761 10.5408 7.14328 10.6016 7.28571 10.6016C7.42815 10.6016 7.56382 10.5408 7.65868 10.4346L10.0396 7.7679Z'
                        fill='#22C55E'
                      />
                    </svg>

                    <span className='font-GiestMedium text-[12px] leading-[12px] text-[#16A34A]'>
                      Guarantee safe checkout
                    </span>
                  </div>

                  <button className='w-[100%] text-[#5d5d5d] font-GiestSemiBold text-[14px] leading-[20px] py-[10px] shadow-Shadow1 flex items-center justify-center gap-[8px] rounded-[12px] bg-[#232323]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='19'
                      height='24'
                      viewBox='0 0 19 24'
                      fill='none'>
                      <g filter='url(#filter0_ddii_3408_24337)'>
                        <path
                          d='M5.28001 7.3778L7.32144 4.61578C8.64101 2.83041 9.3008 1.93773 9.91637 2.12637C10.5319 2.31501 10.5319 3.40989 10.5319 5.59964V5.80611C10.5319 6.59591 10.5319 6.9908 10.7843 7.23851L10.7977 7.25134C11.0555 7.4938 11.4665 7.4938 12.2885 7.4938C13.7677 7.4938 14.5074 7.4938 14.7573 7.94243C14.7615 7.94986 14.7655 7.95735 14.7694 7.96489C15.0054 8.42047 14.5771 8.99987 13.7206 10.1587L11.6792 12.9207C10.3596 14.706 9.69979 15.5987 9.08422 15.4101C8.46864 15.2214 8.46866 14.1265 8.46869 11.9368L8.4687 11.7304C8.46871 10.9406 8.46871 10.5457 8.21635 10.298L8.203 10.2852C7.94519 10.0427 7.53418 10.0427 6.71216 10.0427C5.23291 10.0427 4.49329 10.0427 4.24332 9.59405C4.23918 9.58662 4.23516 9.57913 4.23125 9.57159C3.99529 9.11602 4.42353 8.53661 5.28001 7.3778Z'
                          fill='#5D5D5D'
                        />
                      </g>
                      <defs>
                        <filter
                          id='filter0_ddii_3408_24337'
                          x='-2.49211'
                          y='-0.22996'
                          width='23.9842'
                          height='24.9822'
                          filterUnits='userSpaceOnUse'
                          color-interpolation-filters='sRGB'>
                          <feFlood
                            flood-opacity='0'
                            result='BackgroundImageFix'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='3.99211' />
                          <feGaussianBlur stdDeviation='1.99605' />
                          <feComposite in2='hardAlpha' operator='out' />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0.0313726 0 0 0 0 0.0313726 0 0 0 0 0.0313726 0 0 0 0.08 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='BackgroundImageFix'
                            result='effect1_dropShadow_3408_24337'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='0.998026' />
                          <feGaussianBlur stdDeviation='0.998026' />
                          <feComposite in2='hardAlpha' operator='out' />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0.0313726 0 0 0 0 0.0313726 0 0 0 0 0.0313726 0 0 0 0.2 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='effect1_dropShadow_3408_24337'
                            result='effect2_dropShadow_3408_24337'
                          />
                          <feBlend
                            mode='normal'
                            in='SourceGraphic'
                            in2='effect2_dropShadow_3408_24337'
                            result='shape'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='5.98816' />
                          <feGaussianBlur stdDeviation='5.98816' />
                          <feComposite
                            in2='hardAlpha'
                            operator='arithmetic'
                            k2='-1'
                            k3='1'
                          />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='shape'
                            result='effect3_innerShadow_3408_24337'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='0.998026' />
                          <feGaussianBlur stdDeviation='0.499013' />
                          <feComposite
                            in2='hardAlpha'
                            operator='arithmetic'
                            k2='-1'
                            k3='1'
                          />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='effect3_innerShadow_3408_24337'
                            result='effect4_innerShadow_3408_24337'
                          />
                        </filter>
                      </defs>
                    </svg>

                    <span>Deploy your VPS</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {' '}
            <div className='flex justify-center'>
              <div className='w-[320px] p-[20px] border border-solid border-[#ffffff0a]'>
                <div className='flex flex-col gap-[8px]'>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    Data Center
                  </h3>

                  <div className='py-[10px] px-[12px] rounded-[8px] flex items-center justify-between border border-solid border-[#212121]'>
                    {/* Country Select Dropdown */}
                    <div className='country-dropdown-container gap-[7px] w-[100%] flex items-center'>
                      <Image src={WebGlobe} alt='icon' />

                      <select
                        id='country-select'
                        value={selectedCountry}
                        onChange={handleChange}
                        className='country-select w-[100%] bg-[transparent] border-none outline-none font-GiestMedium text-[14px] leading-[14px] text-white  cursor-pointer appearance-none'>
                        <option className='text-black' value=''>
                          Chicago
                        </option>
                        {countries.map((country, index) =>
                          <option
                            className='text-black'
                            key={index}
                            value={country}>
                            {country}
                          </option>
                        )}
                      </select>
                    </div>

                    <Image src={DownArrow} alt='icon' />
                  </div>
                </div>

                <div className='flex flex-col gap-[8px]'>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    Broker
                  </h3>

                  <ul className='flex flex-col gap-[12px]'>
                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={NtLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          NinjaTrader
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#22C55E'
                          />
                        </svg>

                        <span className='text-[#22C55E] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          1ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={MetatraderLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          MetaTrader
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#F97316'
                          />
                        </svg>

                        <span className='text-[#F97316] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          105ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={TsLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          TradeStation
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#F97316'
                          />
                        </svg>

                        <span className='text-[#F97316] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          123ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={MultichartsLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          MultiCharts
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#22C55E'
                          />
                        </svg>

                        <span className='text-[#22C55E] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          1ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={InteractiveLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          Interactive Brokers
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#EF4444'
                          />
                        </svg>

                        <span className='text-[#EF4444] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          567ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={ThinkLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          Thinkorswim
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#22C55E'
                          />
                        </svg>

                        <span className='text-[#22C55E] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          1ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={BinanceLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          Binance
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#F97316'
                          />
                        </svg>

                        <span className='text-[#F97316] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          123ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={Clogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          Coinbase
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#F97316'
                          />
                        </svg>

                        <span className='text-[#F97316] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          123ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={ByLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          ByBit
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#EF4444'
                          />
                        </svg>

                        <span className='text-[#EF4444] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          567ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center gap-[8px] py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='22'
                          height='19'
                          viewBox='0 0 22 19'
                          fill='none'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M11.7885 1.14973C11.7518 1.05541 11.6696 0.986205 11.5704 0.965973C11.4712 0.945753 11.3686 0.977253 11.2978 1.04964L5.97684 6.49286C5.87791 6.59407 5.86382 6.75089 5.94312 6.8681C6.02243 6.98532 6.17324 7.03058 6.30397 6.97639L10.8825 5.07891L15.6707 12.738C15.7523 12.8684 15.9196 12.9153 16.0571 12.8463C16.1945 12.7773 16.2569 12.6152 16.201 12.4719L11.7885 1.14973ZM8.88722 8.55833C8.96417 8.4258 8.92803 8.25651 8.80368 8.16696C8.67934 8.07739 8.50731 8.09677 8.406 8.21174L1.17402 16.4187C1.1046 16.4974 1.08177 16.607 1.11393 16.707C1.14609 16.8069 1.22849 16.8825 1.33082 16.906L8.5628 18.5683C8.70036 18.6 8.84122 18.5307 8.90022 18.4024C8.95922 18.2743 8.92016 18.1222 8.80668 18.0384L5.01206 15.2329L8.88722 8.55833ZM18.4913 10.5094C18.4444 10.3714 18.3045 10.2878 18.1606 10.3116C18.0168 10.3354 17.9114 10.4598 17.9114 10.6056V15.2822L9.08485 15.455C8.93077 15.458 8.80442 15.578 8.79348 15.7317C8.78255 15.8854 8.89063 16.0221 9.04273 16.047L20.5536 17.9239C20.657 17.9408 20.7616 17.9022 20.8292 17.8222C20.8967 17.7423 20.9175 17.6329 20.8836 17.5338L18.4913 10.5094Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.24'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                      </div>

                      <div>
                        <p className='text-white font-GiestRegular text-[13px] leading-[16.6px]'>
                          Didn’t see your broker? <br />{' '}
                          <strong>You can build your own</strong>
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div className='mt-[16px] text-end'>
                    <button className='h-[32px] py-[12px] text-[#2d2d2d] font-GiestMedium text-[13px] leading-[19.5px] px-[16px] inline-flex items-center justify-center gap-[8px] rounded-[8px] bg-[#4B4B4B]'>
                      Next Step{' '}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='17'
                        viewBox='0 0 16 17'
                        fill='none'>
                        <path
                          d='M6 4.10156L10 8.76823L6 13.4349'
                          stroke='#2D2D2D'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className='p-[20px] w-[240px]  border border-solid border-[#ffffff0a]'>
                <div>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    Server
                  </h3>
                </div>

                <div className='mt-[8px] flex flex-col gap-[12px]'>
                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='19'
                      viewBox='0 0 22 19'
                      fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.7885 1.14973C11.7518 1.05541 11.6696 0.986205 11.5704 0.965973C11.4712 0.945753 11.3686 0.977253 11.2978 1.04964L5.97684 6.49286C5.87791 6.59407 5.86382 6.75089 5.94312 6.8681C6.02243 6.98532 6.17324 7.03058 6.30397 6.97639L10.8825 5.07891L15.6707 12.738C15.7523 12.8684 15.9196 12.9153 16.0571 12.8463C16.1945 12.7773 16.2569 12.6152 16.201 12.4719L11.7885 1.14973ZM8.88722 8.55833C8.96417 8.4258 8.92803 8.25651 8.80368 8.16696C8.67934 8.07739 8.50731 8.09677 8.406 8.21174L1.17402 16.4187C1.1046 16.4974 1.08177 16.607 1.11393 16.707C1.14609 16.8069 1.22849 16.8825 1.33082 16.906L8.5628 18.5683C8.70036 18.6 8.84122 18.5307 8.90022 18.4024C8.95922 18.2743 8.92016 18.1222 8.80668 18.0384L5.01206 15.2329L8.88722 8.55833ZM18.4913 10.5094C18.4444 10.3714 18.3045 10.2878 18.1606 10.3116C18.0168 10.3354 17.9114 10.4598 17.9114 10.6056V15.2822L9.08485 15.455C8.93077 15.458 8.80442 15.578 8.79348 15.7317C8.78255 15.8854 8.89063 16.0221 9.04273 16.047L20.5536 17.9239C20.657 17.9408 20.7616 17.9022 20.8292 17.8222C20.8967 17.7423 20.9175 17.6329 20.8836 17.5338L18.4913 10.5094Z'
                        fill='#474747'
                        stroke='#474747'
                        stroke-width='0.24'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>

                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[112px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[82px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='25'
                      viewBox='0 0 24 25'
                      fill='none'>
                      <path
                        d='M6.50041 4.76807H14.0004C17.7716 4.76807 19.6573 4.76807 20.8288 5.93964C22.0004 7.11121 22.0004 8.99683 22.0004 12.7681C22.0004 16.5393 22.0004 18.4249 20.8288 19.5965C19.7295 20.6958 17.1211 20.7636 13.688 20.7678C13.3083 20.7683 13.0004 20.4603 13.0004 20.0806C13.0004 14.3851 8.38335 9.76807 2.68791 9.76807C2.30822 9.76807 1.99946 9.46023 2.00197 9.08054C2.00401 8.77088 2.00874 8.487 2.01967 8.376C2.20672 6.47689 3.70923 4.97437 5.60834 4.78733C5.8039 4.76807 6.03607 4.76807 6.50041 4.76807Z'
                        fill='#474747'
                      />
                      <path
                        d='M2 11.0181C1.58579 11.0181 1.25 11.3539 1.25 11.7681C1.25 12.1823 1.58579 12.5181 2 12.5181C6.55635 12.5181 10.25 16.2117 10.25 20.7681C10.25 21.1823 10.5858 21.5181 11 21.5181C11.4142 21.5181 11.75 21.1823 11.75 20.7681C11.75 15.3833 7.38478 11.0181 2 11.0181Z'
                        fill='#474747'
                      />
                      <path
                        d='M2 14.0181C1.58579 14.0181 1.25 14.3539 1.25 14.7681C1.25 15.1823 1.58579 15.5181 2 15.5181C4.8995 15.5181 7.25 17.8686 7.25 20.7681C7.25 21.1823 7.58579 21.5181 8 21.5181C8.41421 21.5181 8.75 21.1823 8.75 20.7681C8.75 17.0401 5.72792 14.0181 2 14.0181Z'
                        fill='#474747'
                      />
                      <path
                        d='M2 17.0181C1.58579 17.0181 1.25 17.3539 1.25 17.7681C1.25 18.1823 1.58579 18.5181 2 18.5181C3.24264 18.5181 4.25 19.5254 4.25 20.7681C4.25 21.1823 4.58579 21.5181 5 21.5181C5.41421 21.5181 5.75 21.1823 5.75 20.7681C5.75 18.697 4.07107 17.0181 2 17.0181Z'
                        fill='#474747'
                      />
                    </svg>

                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[112px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[82px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-[20px] w-[158px]  border border-solid border-[#ffffff0a]'>
                <div>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    # of strategies
                  </h3>
                </div>

                <div className='mt-[8px] flex flex-col gap-[12px]'>
                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-[20px] w-[280px]  border border-solid border-[#ffffff0a]'>
                <div>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    Plan
                  </h3>
                </div>

                <div className='mt-[8px] flex flex-col gap-[12px]'>
                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='19'
                      viewBox='0 0 22 19'
                      fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.7885 1.14973C11.7518 1.05541 11.6696 0.986205 11.5704 0.965973C11.4712 0.945753 11.3686 0.977253 11.2978 1.04964L5.97684 6.49286C5.87791 6.59407 5.86382 6.75089 5.94312 6.8681C6.02243 6.98532 6.17324 7.03058 6.30397 6.97639L10.8825 5.07891L15.6707 12.738C15.7523 12.8684 15.9196 12.9153 16.0571 12.8463C16.1945 12.7773 16.2569 12.6152 16.201 12.4719L11.7885 1.14973ZM8.88722 8.55833C8.96417 8.4258 8.92803 8.25651 8.80368 8.16696C8.67934 8.07739 8.50731 8.09677 8.406 8.21174L1.17402 16.4187C1.1046 16.4974 1.08177 16.607 1.11393 16.707C1.14609 16.8069 1.22849 16.8825 1.33082 16.906L8.5628 18.5683C8.70036 18.6 8.84122 18.5307 8.90022 18.4024C8.95922 18.2743 8.92016 18.1222 8.80668 18.0384L5.01206 15.2329L8.88722 8.55833ZM18.4913 10.5094C18.4444 10.3714 18.3045 10.2878 18.1606 10.3116C18.0168 10.3354 17.9114 10.4598 17.9114 10.6056V15.2822L9.08485 15.455C8.93077 15.458 8.80442 15.578 8.79348 15.7317C8.78255 15.8854 8.89063 16.0221 9.04273 16.047L20.5536 17.9239C20.657 17.9408 20.7616 17.9022 20.8292 17.8222C20.8967 17.7423 20.9175 17.6329 20.8836 17.5338L18.4913 10.5094Z'
                        fill='#474747'
                        stroke='#474747'
                        stroke-width='0.24'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>

                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[12px] w-[36px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[200px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[60px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[91px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='19'
                      viewBox='0 0 22 19'
                      fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.7885 1.14973C11.7518 1.05541 11.6696 0.986205 11.5704 0.965973C11.4712 0.945753 11.3686 0.977253 11.2978 1.04964L5.97684 6.49286C5.87791 6.59407 5.86382 6.75089 5.94312 6.8681C6.02243 6.98532 6.17324 7.03058 6.30397 6.97639L10.8825 5.07891L15.6707 12.738C15.7523 12.8684 15.9196 12.9153 16.0571 12.8463C16.1945 12.7773 16.2569 12.6152 16.201 12.4719L11.7885 1.14973ZM8.88722 8.55833C8.96417 8.4258 8.92803 8.25651 8.80368 8.16696C8.67934 8.07739 8.50731 8.09677 8.406 8.21174L1.17402 16.4187C1.1046 16.4974 1.08177 16.607 1.11393 16.707C1.14609 16.8069 1.22849 16.8825 1.33082 16.906L8.5628 18.5683C8.70036 18.6 8.84122 18.5307 8.90022 18.4024C8.95922 18.2743 8.92016 18.1222 8.80668 18.0384L5.01206 15.2329L8.88722 8.55833ZM18.4913 10.5094C18.4444 10.3714 18.3045 10.2878 18.1606 10.3116C18.0168 10.3354 17.9114 10.4598 17.9114 10.6056V15.2822L9.08485 15.455C8.93077 15.458 8.80442 15.578 8.79348 15.7317C8.78255 15.8854 8.89063 16.0221 9.04273 16.047L20.5536 17.9239C20.657 17.9408 20.7616 17.9022 20.8292 17.8222C20.8967 17.7423 20.9175 17.6329 20.8836 17.5338L18.4913 10.5094Z'
                        fill='#474747'
                        stroke='#474747'
                        stroke-width='0.24'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>

                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[12px] w-[36px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[200px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[60px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[91px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='19'
                      viewBox='0 0 22 19'
                      fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.7885 1.14973C11.7518 1.05541 11.6696 0.986205 11.5704 0.965973C11.4712 0.945753 11.3686 0.977253 11.2978 1.04964L5.97684 6.49286C5.87791 6.59407 5.86382 6.75089 5.94312 6.8681C6.02243 6.98532 6.17324 7.03058 6.30397 6.97639L10.8825 5.07891L15.6707 12.738C15.7523 12.8684 15.9196 12.9153 16.0571 12.8463C16.1945 12.7773 16.2569 12.6152 16.201 12.4719L11.7885 1.14973ZM8.88722 8.55833C8.96417 8.4258 8.92803 8.25651 8.80368 8.16696C8.67934 8.07739 8.50731 8.09677 8.406 8.21174L1.17402 16.4187C1.1046 16.4974 1.08177 16.607 1.11393 16.707C1.14609 16.8069 1.22849 16.8825 1.33082 16.906L8.5628 18.5683C8.70036 18.6 8.84122 18.5307 8.90022 18.4024C8.95922 18.2743 8.92016 18.1222 8.80668 18.0384L5.01206 15.2329L8.88722 8.55833ZM18.4913 10.5094C18.4444 10.3714 18.3045 10.2878 18.1606 10.3116C18.0168 10.3354 17.9114 10.4598 17.9114 10.6056V15.2822L9.08485 15.455C8.93077 15.458 8.80442 15.578 8.79348 15.7317C8.78255 15.8854 8.89063 16.0221 9.04273 16.047L20.5536 17.9239C20.657 17.9408 20.7616 17.9022 20.8292 17.8222C20.8967 17.7423 20.9175 17.6329 20.8836 17.5338L18.4913 10.5094Z'
                        fill='#474747'
                        stroke='#474747'
                        stroke-width='0.24'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>

                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[12px] w-[36px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[200px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[60px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[91px]'></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-[20px] w-[282px]  border border-solid border-[#ffffff0a]'>
                <div>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    Billing frequency
                  </h3>
                </div>

                <div className='mt-[8px] flex flex-col gap-[12px]'>
                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>
                </div>

                <div className='mt-[32px] h-[319px] border-t flex flex-col gap-[16px] border-solid border-[#212121] pt-[20px]'>
                  <div className='flex items-center justify-between'>
                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>

                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>

                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>

                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>
                  </div>
                </div>

                <div className='flex flex-col gap-[8px]'>
                  <div className='flex items-center gap-[6px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='17'
                      viewBox='0 0 16 17'
                      fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M2.25168 4.1565C2 4.51508 2 5.58094 2 7.71267V8.76247C2 12.5212 4.82597 14.3452 6.59904 15.1197C7.08001 15.3298 7.32049 15.4349 8 15.4349C8.67951 15.4349 8.91999 15.3298 9.40096 15.1197C11.174 14.3452 14 12.5212 14 8.76247V7.71267C14 5.58094 14 4.51508 13.7483 4.1565C13.4966 3.79792 12.4945 3.45487 10.4901 2.76876L10.1082 2.63804C9.06335 2.28039 8.54093 2.10156 8 2.10156C7.45907 2.10156 6.93666 2.28039 5.89182 2.63804L5.50994 2.76876C3.50555 3.45487 2.50335 3.79792 2.25168 4.1565ZM10.0396 7.7679C10.2236 7.56192 10.2057 7.24584 9.99967 7.06193C9.79369 6.87801 9.47761 6.8959 9.2937 7.10189L7.28571 9.35083L6.7063 8.70189C6.52239 8.4959 6.20631 8.47801 6.00033 8.66193C5.79434 8.84584 5.77645 9.16192 5.96036 9.3679L6.91275 10.4346C7.00761 10.5408 7.14328 10.6016 7.28571 10.6016C7.42815 10.6016 7.56382 10.5408 7.65868 10.4346L10.0396 7.7679Z'
                        fill='#22C55E'
                      />
                    </svg>

                    <span className='font-GiestMedium text-[12px] leading-[12px] text-[#16A34A]'>
                      Guarantee safe checkout
                    </span>
                  </div>

                  <button className='w-[100%] text-[#5d5d5d] font-GiestSemiBold text-[14px] leading-[20px] py-[10px] shadow-Shadow1 flex items-center justify-center gap-[8px] rounded-[12px] bg-[#232323]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='19'
                      height='24'
                      viewBox='0 0 19 24'
                      fill='none'>
                      <g filter='url(#filter0_ddii_3408_24337)'>
                        <path
                          d='M5.28001 7.3778L7.32144 4.61578C8.64101 2.83041 9.3008 1.93773 9.91637 2.12637C10.5319 2.31501 10.5319 3.40989 10.5319 5.59964V5.80611C10.5319 6.59591 10.5319 6.9908 10.7843 7.23851L10.7977 7.25134C11.0555 7.4938 11.4665 7.4938 12.2885 7.4938C13.7677 7.4938 14.5074 7.4938 14.7573 7.94243C14.7615 7.94986 14.7655 7.95735 14.7694 7.96489C15.0054 8.42047 14.5771 8.99987 13.7206 10.1587L11.6792 12.9207C10.3596 14.706 9.69979 15.5987 9.08422 15.4101C8.46864 15.2214 8.46866 14.1265 8.46869 11.9368L8.4687 11.7304C8.46871 10.9406 8.46871 10.5457 8.21635 10.298L8.203 10.2852C7.94519 10.0427 7.53418 10.0427 6.71216 10.0427C5.23291 10.0427 4.49329 10.0427 4.24332 9.59405C4.23918 9.58662 4.23516 9.57913 4.23125 9.57159C3.99529 9.11602 4.42353 8.53661 5.28001 7.3778Z'
                          fill='#5D5D5D'
                        />
                      </g>
                      <defs>
                        <filter
                          id='filter0_ddii_3408_24337'
                          x='-2.49211'
                          y='-0.22996'
                          width='23.9842'
                          height='24.9822'
                          filterUnits='userSpaceOnUse'
                          color-interpolation-filters='sRGB'>
                          <feFlood
                            flood-opacity='0'
                            result='BackgroundImageFix'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='3.99211' />
                          <feGaussianBlur stdDeviation='1.99605' />
                          <feComposite in2='hardAlpha' operator='out' />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0.0313726 0 0 0 0 0.0313726 0 0 0 0 0.0313726 0 0 0 0.08 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='BackgroundImageFix'
                            result='effect1_dropShadow_3408_24337'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='0.998026' />
                          <feGaussianBlur stdDeviation='0.998026' />
                          <feComposite in2='hardAlpha' operator='out' />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0.0313726 0 0 0 0 0.0313726 0 0 0 0 0.0313726 0 0 0 0.2 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='effect1_dropShadow_3408_24337'
                            result='effect2_dropShadow_3408_24337'
                          />
                          <feBlend
                            mode='normal'
                            in='SourceGraphic'
                            in2='effect2_dropShadow_3408_24337'
                            result='shape'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='5.98816' />
                          <feGaussianBlur stdDeviation='5.98816' />
                          <feComposite
                            in2='hardAlpha'
                            operator='arithmetic'
                            k2='-1'
                            k3='1'
                          />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='shape'
                            result='effect3_innerShadow_3408_24337'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='0.998026' />
                          <feGaussianBlur stdDeviation='0.499013' />
                          <feComposite
                            in2='hardAlpha'
                            operator='arithmetic'
                            k2='-1'
                            k3='1'
                          />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='effect3_innerShadow_3408_24337'
                            result='effect4_innerShadow_3408_24337'
                          />
                        </filter>
                      </defs>
                    </svg>

                    <span>Deploy your VPS</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {' '}
            <div className='flex justify-center'>
              <div className='w-[320px] p-[20px] border border-solid border-[#ffffff0a]'>
                <div className='flex flex-col gap-[8px]'>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    Data Center
                  </h3>

                  <div className='py-[10px] px-[12px] rounded-[8px] flex items-center justify-between border border-solid border-[#212121]'>
                    {/* Country Select Dropdown */}
                    <div className='country-dropdown-container gap-[7px] w-[100%] flex items-center'>
                      <Image src={WebGlobe} alt='icon' />

                      <select
                        id='country-select'
                        value={selectedCountry}
                        onChange={handleChange}
                        className='country-select w-[100%] bg-[transparent] border-none outline-none font-GiestMedium text-[14px] leading-[14px] text-white  cursor-pointer appearance-none'>
                        <option className='text-black' value=''>
                          Chicago
                        </option>
                        {countries.map((country, index) =>
                          <option
                            className='text-black'
                            key={index}
                            value={country}>
                            {country}
                          </option>
                        )}
                      </select>
                    </div>

                    <Image src={DownArrow} alt='icon' />
                  </div>
                </div>

                <div className='flex flex-col gap-[8px]'>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    Broker
                  </h3>

                  <ul className='flex flex-col gap-[12px]'>
                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={NtLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          NinjaTrader
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#22C55E'
                          />
                        </svg>

                        <span className='text-[#22C55E] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          1ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={MetatraderLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          MetaTrader
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#F97316'
                          />
                        </svg>

                        <span className='text-[#F97316] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          105ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={TsLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          TradeStation
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#F97316'
                          />
                        </svg>

                        <span className='text-[#F97316] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          123ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={MultichartsLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          MultiCharts
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#22C55E'
                          />
                        </svg>

                        <span className='text-[#22C55E] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          1ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={InteractiveLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          Interactive Brokers
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#EF4444'
                          />
                        </svg>

                        <span className='text-[#EF4444] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          567ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={ThinkLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          Thinkorswim
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#22C55E'
                          />
                        </svg>

                        <span className='text-[#22C55E] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          1ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={BinanceLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          Binance
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#F97316'
                          />
                        </svg>

                        <span className='text-[#F97316] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          123ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={Clogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          Coinbase
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#F97316'
                          />
                        </svg>

                        <span className='text-[#F97316] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          123ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center justify-between py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div className='flex items-center gap-[8px]'>
                        <Image
                          src={ByLogo}
                          alt='logo'
                          className='max-w-[24px]'
                        />

                        <span className='text-[#E7E7E8] font-GiestRegular text-[14px] leading-[14px] tracking-[0.32px]'>
                          ByBit
                        </span>
                      </div>

                      <div className='flex items-center gap-[4px]'>
                        <svg
                          width='12'
                          height='13'
                          viewBox='0 0 12 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.73223 11.0358C2.46447 11.7681 3.64298 11.7681 6 11.7681C8.35702 11.7681 9.53553 11.7681 10.2678 11.0358C11 10.3036 11 9.12509 11 6.76807C11 4.41104 11 3.23253 10.2678 2.5003C9.53553 1.76807 8.35702 1.76807 6 1.76807C3.64298 1.76807 2.46447 1.76807 1.73223 2.5003C1 3.23253 1 4.41104 1 6.76807C1 9.12509 1 10.3036 1.73223 11.0358ZM8.46739 4.86606L6.71135 9.44895C6.55224 9.86417 5.97002 9.87767 5.84584 9.46902L5.31759 7.73053C5.2765 7.59532 5.17275 7.49157 5.03753 7.45048L3.29905 6.92222C2.89039 6.79805 2.90389 6.21582 3.31912 6.05672L7.90201 4.30067C8.26947 4.15987 8.60819 4.4986 8.46739 4.86606Z'
                            fill='#EF4444'
                          />
                        </svg>

                        <span className='text-[#EF4444] font-GiestRegular text-[12px] leading-[12px] tracking-[0.32px]'>
                          567ms
                        </span>
                      </div>
                    </li>

                    <li className='flex items-center gap-[8px] py-[8px] px-[12px] rounded-[8px] border border-solid border-[#212121]'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='22'
                          height='19'
                          viewBox='0 0 22 19'
                          fill='none'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M11.7885 1.14973C11.7518 1.05541 11.6696 0.986205 11.5704 0.965973C11.4712 0.945753 11.3686 0.977253 11.2978 1.04964L5.97684 6.49286C5.87791 6.59407 5.86382 6.75089 5.94312 6.8681C6.02243 6.98532 6.17324 7.03058 6.30397 6.97639L10.8825 5.07891L15.6707 12.738C15.7523 12.8684 15.9196 12.9153 16.0571 12.8463C16.1945 12.7773 16.2569 12.6152 16.201 12.4719L11.7885 1.14973ZM8.88722 8.55833C8.96417 8.4258 8.92803 8.25651 8.80368 8.16696C8.67934 8.07739 8.50731 8.09677 8.406 8.21174L1.17402 16.4187C1.1046 16.4974 1.08177 16.607 1.11393 16.707C1.14609 16.8069 1.22849 16.8825 1.33082 16.906L8.5628 18.5683C8.70036 18.6 8.84122 18.5307 8.90022 18.4024C8.95922 18.2743 8.92016 18.1222 8.80668 18.0384L5.01206 15.2329L8.88722 8.55833ZM18.4913 10.5094C18.4444 10.3714 18.3045 10.2878 18.1606 10.3116C18.0168 10.3354 17.9114 10.4598 17.9114 10.6056V15.2822L9.08485 15.455C8.93077 15.458 8.80442 15.578 8.79348 15.7317C8.78255 15.8854 8.89063 16.0221 9.04273 16.047L20.5536 17.9239C20.657 17.9408 20.7616 17.9022 20.8292 17.8222C20.8967 17.7423 20.9175 17.6329 20.8836 17.5338L18.4913 10.5094Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.24'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                      </div>

                      <div>
                        <p className='text-white font-GiestRegular text-[13px] leading-[16.6px]'>
                          Didn’t see your broker? <br />{' '}
                          <strong>You can build your own</strong>
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div className='mt-[16px] text-end'>
                    <button className='h-[32px] py-[12px] text-[#2d2d2d] font-GiestMedium text-[13px] leading-[19.5px] px-[16px] inline-flex items-center justify-center gap-[8px] rounded-[8px] bg-[#4B4B4B]'>
                      Next Step{' '}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='17'
                        viewBox='0 0 16 17'
                        fill='none'>
                        <path
                          d='M6 4.10156L10 8.76823L6 13.4349'
                          stroke='#2D2D2D'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className='p-[20px] w-[240px]  border border-solid border-[#ffffff0a]'>
                <div>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    Server
                  </h3>
                </div>

                <div className='mt-[8px] flex flex-col gap-[12px]'>
                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='19'
                      viewBox='0 0 22 19'
                      fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.7885 1.14973C11.7518 1.05541 11.6696 0.986205 11.5704 0.965973C11.4712 0.945753 11.3686 0.977253 11.2978 1.04964L5.97684 6.49286C5.87791 6.59407 5.86382 6.75089 5.94312 6.8681C6.02243 6.98532 6.17324 7.03058 6.30397 6.97639L10.8825 5.07891L15.6707 12.738C15.7523 12.8684 15.9196 12.9153 16.0571 12.8463C16.1945 12.7773 16.2569 12.6152 16.201 12.4719L11.7885 1.14973ZM8.88722 8.55833C8.96417 8.4258 8.92803 8.25651 8.80368 8.16696C8.67934 8.07739 8.50731 8.09677 8.406 8.21174L1.17402 16.4187C1.1046 16.4974 1.08177 16.607 1.11393 16.707C1.14609 16.8069 1.22849 16.8825 1.33082 16.906L8.5628 18.5683C8.70036 18.6 8.84122 18.5307 8.90022 18.4024C8.95922 18.2743 8.92016 18.1222 8.80668 18.0384L5.01206 15.2329L8.88722 8.55833ZM18.4913 10.5094C18.4444 10.3714 18.3045 10.2878 18.1606 10.3116C18.0168 10.3354 17.9114 10.4598 17.9114 10.6056V15.2822L9.08485 15.455C8.93077 15.458 8.80442 15.578 8.79348 15.7317C8.78255 15.8854 8.89063 16.0221 9.04273 16.047L20.5536 17.9239C20.657 17.9408 20.7616 17.9022 20.8292 17.8222C20.8967 17.7423 20.9175 17.6329 20.8836 17.5338L18.4913 10.5094Z'
                        fill='#474747'
                        stroke='#474747'
                        stroke-width='0.24'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>

                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[112px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[82px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='25'
                      viewBox='0 0 24 25'
                      fill='none'>
                      <path
                        d='M6.50041 4.76807H14.0004C17.7716 4.76807 19.6573 4.76807 20.8288 5.93964C22.0004 7.11121 22.0004 8.99683 22.0004 12.7681C22.0004 16.5393 22.0004 18.4249 20.8288 19.5965C19.7295 20.6958 17.1211 20.7636 13.688 20.7678C13.3083 20.7683 13.0004 20.4603 13.0004 20.0806C13.0004 14.3851 8.38335 9.76807 2.68791 9.76807C2.30822 9.76807 1.99946 9.46023 2.00197 9.08054C2.00401 8.77088 2.00874 8.487 2.01967 8.376C2.20672 6.47689 3.70923 4.97437 5.60834 4.78733C5.8039 4.76807 6.03607 4.76807 6.50041 4.76807Z'
                        fill='#474747'
                      />
                      <path
                        d='M2 11.0181C1.58579 11.0181 1.25 11.3539 1.25 11.7681C1.25 12.1823 1.58579 12.5181 2 12.5181C6.55635 12.5181 10.25 16.2117 10.25 20.7681C10.25 21.1823 10.5858 21.5181 11 21.5181C11.4142 21.5181 11.75 21.1823 11.75 20.7681C11.75 15.3833 7.38478 11.0181 2 11.0181Z'
                        fill='#474747'
                      />
                      <path
                        d='M2 14.0181C1.58579 14.0181 1.25 14.3539 1.25 14.7681C1.25 15.1823 1.58579 15.5181 2 15.5181C4.8995 15.5181 7.25 17.8686 7.25 20.7681C7.25 21.1823 7.58579 21.5181 8 21.5181C8.41421 21.5181 8.75 21.1823 8.75 20.7681C8.75 17.0401 5.72792 14.0181 2 14.0181Z'
                        fill='#474747'
                      />
                      <path
                        d='M2 17.0181C1.58579 17.0181 1.25 17.3539 1.25 17.7681C1.25 18.1823 1.58579 18.5181 2 18.5181C3.24264 18.5181 4.25 19.5254 4.25 20.7681C4.25 21.1823 4.58579 21.5181 5 21.5181C5.41421 21.5181 5.75 21.1823 5.75 20.7681C5.75 18.697 4.07107 17.0181 2 17.0181Z'
                        fill='#474747'
                      />
                    </svg>

                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[112px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[82px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-[20px] w-[158px]  border border-solid border-[#ffffff0a]'>
                <div>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    # of strategies
                  </h3>
                </div>

                <div className='mt-[8px] flex flex-col gap-[12px]'>
                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-[20px] w-[280px]  border border-solid border-[#ffffff0a]'>
                <div>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    Plan
                  </h3>
                </div>

                <div className='mt-[8px] flex flex-col gap-[12px]'>
                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='19'
                      viewBox='0 0 22 19'
                      fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.7885 1.14973C11.7518 1.05541 11.6696 0.986205 11.5704 0.965973C11.4712 0.945753 11.3686 0.977253 11.2978 1.04964L5.97684 6.49286C5.87791 6.59407 5.86382 6.75089 5.94312 6.8681C6.02243 6.98532 6.17324 7.03058 6.30397 6.97639L10.8825 5.07891L15.6707 12.738C15.7523 12.8684 15.9196 12.9153 16.0571 12.8463C16.1945 12.7773 16.2569 12.6152 16.201 12.4719L11.7885 1.14973ZM8.88722 8.55833C8.96417 8.4258 8.92803 8.25651 8.80368 8.16696C8.67934 8.07739 8.50731 8.09677 8.406 8.21174L1.17402 16.4187C1.1046 16.4974 1.08177 16.607 1.11393 16.707C1.14609 16.8069 1.22849 16.8825 1.33082 16.906L8.5628 18.5683C8.70036 18.6 8.84122 18.5307 8.90022 18.4024C8.95922 18.2743 8.92016 18.1222 8.80668 18.0384L5.01206 15.2329L8.88722 8.55833ZM18.4913 10.5094C18.4444 10.3714 18.3045 10.2878 18.1606 10.3116C18.0168 10.3354 17.9114 10.4598 17.9114 10.6056V15.2822L9.08485 15.455C8.93077 15.458 8.80442 15.578 8.79348 15.7317C8.78255 15.8854 8.89063 16.0221 9.04273 16.047L20.5536 17.9239C20.657 17.9408 20.7616 17.9022 20.8292 17.8222C20.8967 17.7423 20.9175 17.6329 20.8836 17.5338L18.4913 10.5094Z'
                        fill='#474747'
                        stroke='#474747'
                        stroke-width='0.24'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>

                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[12px] w-[36px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[200px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[60px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[91px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='19'
                      viewBox='0 0 22 19'
                      fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.7885 1.14973C11.7518 1.05541 11.6696 0.986205 11.5704 0.965973C11.4712 0.945753 11.3686 0.977253 11.2978 1.04964L5.97684 6.49286C5.87791 6.59407 5.86382 6.75089 5.94312 6.8681C6.02243 6.98532 6.17324 7.03058 6.30397 6.97639L10.8825 5.07891L15.6707 12.738C15.7523 12.8684 15.9196 12.9153 16.0571 12.8463C16.1945 12.7773 16.2569 12.6152 16.201 12.4719L11.7885 1.14973ZM8.88722 8.55833C8.96417 8.4258 8.92803 8.25651 8.80368 8.16696C8.67934 8.07739 8.50731 8.09677 8.406 8.21174L1.17402 16.4187C1.1046 16.4974 1.08177 16.607 1.11393 16.707C1.14609 16.8069 1.22849 16.8825 1.33082 16.906L8.5628 18.5683C8.70036 18.6 8.84122 18.5307 8.90022 18.4024C8.95922 18.2743 8.92016 18.1222 8.80668 18.0384L5.01206 15.2329L8.88722 8.55833ZM18.4913 10.5094C18.4444 10.3714 18.3045 10.2878 18.1606 10.3116C18.0168 10.3354 17.9114 10.4598 17.9114 10.6056V15.2822L9.08485 15.455C8.93077 15.458 8.80442 15.578 8.79348 15.7317C8.78255 15.8854 8.89063 16.0221 9.04273 16.047L20.5536 17.9239C20.657 17.9408 20.7616 17.9022 20.8292 17.8222C20.8967 17.7423 20.9175 17.6329 20.8836 17.5338L18.4913 10.5094Z'
                        fill='#474747'
                        stroke='#474747'
                        stroke-width='0.24'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>

                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[12px] w-[36px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[200px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[60px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[91px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='19'
                      viewBox='0 0 22 19'
                      fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.7885 1.14973C11.7518 1.05541 11.6696 0.986205 11.5704 0.965973C11.4712 0.945753 11.3686 0.977253 11.2978 1.04964L5.97684 6.49286C5.87791 6.59407 5.86382 6.75089 5.94312 6.8681C6.02243 6.98532 6.17324 7.03058 6.30397 6.97639L10.8825 5.07891L15.6707 12.738C15.7523 12.8684 15.9196 12.9153 16.0571 12.8463C16.1945 12.7773 16.2569 12.6152 16.201 12.4719L11.7885 1.14973ZM8.88722 8.55833C8.96417 8.4258 8.92803 8.25651 8.80368 8.16696C8.67934 8.07739 8.50731 8.09677 8.406 8.21174L1.17402 16.4187C1.1046 16.4974 1.08177 16.607 1.11393 16.707C1.14609 16.8069 1.22849 16.8825 1.33082 16.906L8.5628 18.5683C8.70036 18.6 8.84122 18.5307 8.90022 18.4024C8.95922 18.2743 8.92016 18.1222 8.80668 18.0384L5.01206 15.2329L8.88722 8.55833ZM18.4913 10.5094C18.4444 10.3714 18.3045 10.2878 18.1606 10.3116C18.0168 10.3354 17.9114 10.4598 17.9114 10.6056V15.2822L9.08485 15.455C8.93077 15.458 8.80442 15.578 8.79348 15.7317C8.78255 15.8854 8.89063 16.0221 9.04273 16.047L20.5536 17.9239C20.657 17.9408 20.7616 17.9022 20.8292 17.8222C20.8967 17.7423 20.9175 17.6329 20.8836 17.5338L18.4913 10.5094Z'
                        fill='#474747'
                        stroke='#474747'
                        stroke-width='0.24'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>

                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[12px] w-[36px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[200px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[60px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[91px]'></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-[20px] w-[282px]  border border-solid border-[#ffffff0a]'>
                <div>
                  <h3 className='text-white font-GiestMedium text-[16px] leading-[20.8px]'>
                    Billing frequency
                  </h3>
                </div>

                <div className='mt-[8px] flex flex-col gap-[12px]'>
                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>

                  <div className='p-[12px] rounded-[8px] flex flex-col gap-[8px] border border-solid border-[#212121] bg-[#171717]'>
                    <div className='flex flex-col gap-[8px]'>
                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[24px]'></div>

                      <div className='rounded-[1000px] bg-[#474747] h-[8px] w-[72px]'></div>
                    </div>
                  </div>
                </div>

                <div className='mt-[32px] h-[319px] border-t flex flex-col gap-[16px] border-solid border-[#212121] pt-[20px]'>
                  <div className='flex items-center justify-between'>
                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>

                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>

                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>

                    <div className='w-[57px] rounded-[1000px] bg-[#474747] h-[8px]'></div>
                  </div>
                </div>

                <div className='flex flex-col gap-[8px]'>
                  <div className='flex items-center gap-[6px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='17'
                      viewBox='0 0 16 17'
                      fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M2.25168 4.1565C2 4.51508 2 5.58094 2 7.71267V8.76247C2 12.5212 4.82597 14.3452 6.59904 15.1197C7.08001 15.3298 7.32049 15.4349 8 15.4349C8.67951 15.4349 8.91999 15.3298 9.40096 15.1197C11.174 14.3452 14 12.5212 14 8.76247V7.71267C14 5.58094 14 4.51508 13.7483 4.1565C13.4966 3.79792 12.4945 3.45487 10.4901 2.76876L10.1082 2.63804C9.06335 2.28039 8.54093 2.10156 8 2.10156C7.45907 2.10156 6.93666 2.28039 5.89182 2.63804L5.50994 2.76876C3.50555 3.45487 2.50335 3.79792 2.25168 4.1565ZM10.0396 7.7679C10.2236 7.56192 10.2057 7.24584 9.99967 7.06193C9.79369 6.87801 9.47761 6.8959 9.2937 7.10189L7.28571 9.35083L6.7063 8.70189C6.52239 8.4959 6.20631 8.47801 6.00033 8.66193C5.79434 8.84584 5.77645 9.16192 5.96036 9.3679L6.91275 10.4346C7.00761 10.5408 7.14328 10.6016 7.28571 10.6016C7.42815 10.6016 7.56382 10.5408 7.65868 10.4346L10.0396 7.7679Z'
                        fill='#22C55E'
                      />
                    </svg>

                    <span className='font-GiestMedium text-[12px] leading-[12px] text-[#16A34A]'>
                      Guarantee safe checkout
                    </span>
                  </div>

                  <button className='w-[100%] text-[#5d5d5d] font-GiestSemiBold text-[14px] leading-[20px] py-[10px] shadow-Shadow1 flex items-center justify-center gap-[8px] rounded-[12px] bg-[#232323]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='19'
                      height='24'
                      viewBox='0 0 19 24'
                      fill='none'>
                      <g filter='url(#filter0_ddii_3408_24337)'>
                        <path
                          d='M5.28001 7.3778L7.32144 4.61578C8.64101 2.83041 9.3008 1.93773 9.91637 2.12637C10.5319 2.31501 10.5319 3.40989 10.5319 5.59964V5.80611C10.5319 6.59591 10.5319 6.9908 10.7843 7.23851L10.7977 7.25134C11.0555 7.4938 11.4665 7.4938 12.2885 7.4938C13.7677 7.4938 14.5074 7.4938 14.7573 7.94243C14.7615 7.94986 14.7655 7.95735 14.7694 7.96489C15.0054 8.42047 14.5771 8.99987 13.7206 10.1587L11.6792 12.9207C10.3596 14.706 9.69979 15.5987 9.08422 15.4101C8.46864 15.2214 8.46866 14.1265 8.46869 11.9368L8.4687 11.7304C8.46871 10.9406 8.46871 10.5457 8.21635 10.298L8.203 10.2852C7.94519 10.0427 7.53418 10.0427 6.71216 10.0427C5.23291 10.0427 4.49329 10.0427 4.24332 9.59405C4.23918 9.58662 4.23516 9.57913 4.23125 9.57159C3.99529 9.11602 4.42353 8.53661 5.28001 7.3778Z'
                          fill='#5D5D5D'
                        />
                      </g>
                      <defs>
                        <filter
                          id='filter0_ddii_3408_24337'
                          x='-2.49211'
                          y='-0.22996'
                          width='23.9842'
                          height='24.9822'
                          filterUnits='userSpaceOnUse'
                          color-interpolation-filters='sRGB'>
                          <feFlood
                            flood-opacity='0'
                            result='BackgroundImageFix'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='3.99211' />
                          <feGaussianBlur stdDeviation='1.99605' />
                          <feComposite in2='hardAlpha' operator='out' />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0.0313726 0 0 0 0 0.0313726 0 0 0 0 0.0313726 0 0 0 0.08 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='BackgroundImageFix'
                            result='effect1_dropShadow_3408_24337'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='0.998026' />
                          <feGaussianBlur stdDeviation='0.998026' />
                          <feComposite in2='hardAlpha' operator='out' />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0.0313726 0 0 0 0 0.0313726 0 0 0 0 0.0313726 0 0 0 0.2 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='effect1_dropShadow_3408_24337'
                            result='effect2_dropShadow_3408_24337'
                          />
                          <feBlend
                            mode='normal'
                            in='SourceGraphic'
                            in2='effect2_dropShadow_3408_24337'
                            result='shape'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='5.98816' />
                          <feGaussianBlur stdDeviation='5.98816' />
                          <feComposite
                            in2='hardAlpha'
                            operator='arithmetic'
                            k2='-1'
                            k3='1'
                          />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='shape'
                            result='effect3_innerShadow_3408_24337'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='0.998026' />
                          <feGaussianBlur stdDeviation='0.499013' />
                          <feComposite
                            in2='hardAlpha'
                            operator='arithmetic'
                            k2='-1'
                            k3='1'
                          />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='effect3_innerShadow_3408_24337'
                            result='effect4_innerShadow_3408_24337'
                          />
                        </filter>
                      </defs>
                    </svg>

                    <span>Deploy your VPS</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default SelectSection
