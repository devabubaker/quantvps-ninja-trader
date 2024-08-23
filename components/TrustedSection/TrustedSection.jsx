import React, { useRef, useState } from 'react'
import Image from 'next/image'
import ThumbsUp from '../../assets/images/thumbs-up.svg'
import TrustpilotLogo from '../../assets/images/trustpilot-logo.png'
import RatingStar from '../../assets/images/rating-star.svg'
import { ReviewsData1, ReviewsData2 } from '@/constants'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const TrustedSection = () => {
  return (
    <section className='pt-[120px]'>
      <div className='flex flex-col items-center text-center'>
        <h6 className='text-[#0171E3] font-GiestSemiBold mb-[4px] text-[14px] leading-[14px] tracking-[-0.28px]'>
          Loved by Automated Traders around the World
        </h6>

        <h3 className='relative max-w-[662px] text-[#F5F5F7] font-GiestSemiBold text-[40px] leading-[44px]'>
          Trusted by{' '}
          <span className='bg-clip-text text-[transparent] bg-linearGradient1'>
            100,000+
          </span>{' '}
          happy traders worldwide...{' '}
          <Image
            className='absolute top-[25px] right-[20px]'
            src={ThumbsUp}
            alt='vector'
          />
        </h3>

        <div className='flex items-center gap-[4px] mt-[16px]'>
          <p className='text-[#B5B5B5] font-GiestRegular text-[18px] leading-[18px] tracking-[-0.36px]'>
            We’re <span className='text-white'>Excellent 4.9 Stars</span> at
          </p>

          <Image
            src={TrustpilotLogo}
            alt='vector'
            className='max-w-[117.333px]'
          />
        </div>
      </div>

      <div>
        <div className='mt-[39px] mb-[32px]'>
          <Swiper
            spaceBetween={12}
            centeredSlides={true}
            slidesPerView={4}
            speed={7000}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false
            }}
            allowTouchMove={false}
            noSwipingClass='swiper'
            modules={[Autoplay]}
            className='mySwiper'>
            {ReviewsData1.map(item =>
              <SwiperSlide
                key={item.id}
                className='p-[24px] rounded-[28px] bg-linearGradient3'>
                <div className='flex items-center gap-[8px] mb-[12px]'>
                  <Image
                    src={item.avatarImg}
                    alt='image'
                    className='max-w-[32px]'
                  />

                  <h5 className='text-white font-SfProSemibold text-[16px] leading-[24px] tracking-[-0.4px]'>
                    {item.title}
                  </h5>
                </div>

                <div className='flex flex-col gap-[8px]'>
                  <div className='flex items-center gap-[4px]'>
                    <Image src={RatingStar} alt='icon' />
                    <Image src={RatingStar} alt='icon' />
                    <Image src={RatingStar} alt='icon' />
                    <Image src={RatingStar} alt='icon' />
                    <Image src={RatingStar} alt='icon' />
                  </div>

                  <h4 className='text-white font-GiestSemiBold leading-[24px] tracking-[-0.4px]'>
                    {item.subTitle}
                  </h4>

                  <p className='text-[#b5b5b5] font-GiestRegular line-clamp-4 text-[14px] leading-[23.8px] tracking-[-0.4px]'>
                    {item.content}
                  </p>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        <div style={{ direction: 'ltr' }}>
          <Swiper
            spaceBetween={12}
            centeredSlides={true}
            slidesPerView={4}
            speed={7000}
            loop={true}
            direction='horizontal'
            autoplay={{
              delay: 0,
              disableOnInteraction: false
            }}
            allowTouchMove={false}
            noSwipingClass='swiper'
            modules={[Autoplay]}
            className='mySwiper'
            style={{ transform: 'scaleX(-1)' }} // Reverses the direction
          >
            {ReviewsData2.map(item =>
              <SwiperSlide
                key={item.id}
                className='p-[24px] rounded-[28px] bg-linearGradient3'
                style={{ transform: 'scaleX(-1)' }} // Corrects the text direction
              >
                <div className='flex items-center gap-[8px] mb-[12px]'>
                  <Image
                    src={item.avatarImg}
                    alt='image'
                    className='max-w-[32px]'
                  />
                  <h5 className='text-white font-SfProSemibold text-[16px] leading-[24px] tracking-[-0.4px]'>
                    {item.title}
                  </h5>
                </div>

                <div className='flex flex-col gap-[8px]'>
                  <div className='flex items-center gap-[4px]'>
                    <Image src={RatingStar} alt='icon' />
                    <Image src={RatingStar} alt='icon' />
                    <Image src={RatingStar} alt='icon' />
                    <Image src={RatingStar} alt='icon' />
                    <Image src={RatingStar} alt='icon' />
                  </div>

                  <h4 className='text-white font-GiestSemiBold leading-[24px] tracking-[-0.4px]'>
                    {item.subTitle}
                  </h4>

                  <p className='text-[#b5b5b5] line-clamp-4 font-GiestRegular text-[14px] leading-[23.8px] tracking-[-0.4px]'>
                    {item.content}
                  </p>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default TrustedSection
