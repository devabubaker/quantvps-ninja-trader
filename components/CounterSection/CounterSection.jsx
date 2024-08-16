const CounterSection = () => {
  return (
    <section className='counter-section relative border-y border-solid border-[#ffffff0a]'>
      <div className='container py-[40px] flex justify-center items-center gap-[10px]'>
        <div className='flex flex-col gap-[12px] w-[240px] items-center text-center'>
          <h4 className='text-white font-GiestMedium text-[32px] leading-[32px] tracking-[-0.64px] opacity-[0.71]'>
            10+
          </h4>

          <span className='text-white font-SfProRegular text-[14px] leading-[19.6px] opacity-[0.5]'>
            years in the business
          </span>
        </div>

        <div className='flex flex-col gap-[12px] w-[240px] items-center text-center'>
          <h4 className='text-transparent bg-linearGradient2 bg-clip-text font-GiestMedium text-[32px] leading-[32px] tracking-[-0.64px] opacity-[0.71]'>
            100k+
          </h4>

          <span className='text-white font-SfProRegular text-[14px] leading-[19.6px] opacity-[0.5]'>
            servers deployed worldwide
          </span>
        </div>

        <div className='flex flex-col gap-[12px] w-[240px] items-center text-center'>
          <h4 className='text-transparent bg-linearGradient2 bg-clip-text font-GiestMedium text-[32px] leading-[32px] tracking-[-0.64px] opacity-[0.71]'>
            100%+
          </h4>

          <span className='text-white font-SfProRegular text-[14px] leading-[19.6px] opacity-[0.5]'>
            uptime guaranteed
          </span>
        </div>
      </div>
    </section>
  )
}

export default CounterSection
