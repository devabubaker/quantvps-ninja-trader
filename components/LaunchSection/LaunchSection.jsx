const LaunchSection = () => {
  return (
    <section>
      <div className='container py-[64px]'>
        <div className='btn w-[100%] py-[20px] px-[64px] flex items-center justify-between h-[120px] bg-[#0171E3] rounded-[32px]'>
          <div className='flex gap-[16px]'>
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M21.5937 0.430901C21.5195 0.216732 21.3534 0.0595921 21.1532 0.013652C20.9527 -0.032261 20.7454 0.0392652 20.6024 0.203625L9.85299 12.5634C9.65313 12.7932 9.62467 13.1493 9.78486 13.4154C9.94508 13.6816 10.2498 13.7844 10.5139 13.6613L19.7634 9.35278L29.4366 26.7439C29.6014 27.0401 29.9394 27.1467 30.2172 26.99C30.4948 26.8333 30.6208 26.4652 30.5079 26.1399L21.5937 0.430901ZM15.7325 17.2534C15.888 16.9524 15.815 16.5681 15.5638 16.3647C15.3126 16.1613 14.9651 16.2053 14.7604 16.4664L0.150321 35.1017C0.0100786 35.2805 -0.0360306 35.5293 0.0289391 35.7562C0.0939088 35.9832 0.260357 36.1549 0.467097 36.2083L15.0772 39.9827C15.355 40.0546 15.6396 39.8974 15.7588 39.6061C15.878 39.3151 15.7991 38.9699 15.5698 38.7794L7.90394 32.4091L15.7325 17.2534ZM35.1348 21.6837C35.04 21.3704 34.7573 21.1804 34.4666 21.2344C34.1762 21.2886 33.9631 21.5709 33.9631 21.902V32.5211L16.1318 32.9134C15.8205 32.9203 15.5653 33.1927 15.5432 33.5418C15.5211 33.8908 15.7394 34.2012 16.0467 34.2576L39.3011 38.5195C39.5098 38.5579 39.7212 38.4701 39.8577 38.2887C39.9942 38.1072 40.0361 37.8587 39.9677 37.6336L35.1348 21.6837Z'
                fill='white'
              />
            </svg>

            <div className='flex flex-col gap-[9px]'>
              <h4 className='text-white font-GiestSemiBold text-[22px] leading-[22px] tracking-[0.44px]'>
                You can launch your dedicated trading server in less than 3
                minutes
              </h4>

              <h5 className='text-white font-GiestRegular text-[16px] leading-[16px] tracking-[-0.32px]'>
                And the best thing, you can start for just $20/month
              </h5>
            </div>
          </div>

          <div>
            <button className='btnWhite inline-flex justify-center items-center gap-[8px] h-[40px] px-[24px] py-[12px] bg-white rounded-[12px] font-GiestSemiBold text-[13px] leading-[19.5px] text-[#0171E3]'>
              Deploy your own server{' '}
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M2.66602 8H13.3327M13.3327 8L9.33268 4M13.3327 8L9.33268 12'
                  stroke='#0171E3'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LaunchSection
