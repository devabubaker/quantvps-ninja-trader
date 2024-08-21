const BannerSection = () => {
  return (
    <section>
      <div className='banner-section max-w-[1180px] mx-auto h-[247px] relative'>
        <div className='h-[100%] w-[100%] bg-linearGradient4 absolute top-0 left-0 z-[2]'></div>

        <h2 className='absolute bottom-0 z-[1] left-[50%] translate-x-[-50%] banner-text font-GiestBold text-[167px] leading-[167px] tracking-[20.04px]'>
          QUANTVPS
        </h2>
      </div>
    </section>
  )
}

export default BannerSection
