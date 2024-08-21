import Image from 'next/image'
import AvatarFrame from '../../assets/images/avatar-frame.png'
import CurlyLine from '../../assets/images/curly-line.svg'

const LoveSection = () => {
  return (
    <section className='love-section relative px-[180px] border-b border-solid border-[#ffffff0a]'>
      <div className='py-[90px] px-[40px] flex flex-col items-center text-center'>
        <p className='text-[#b5b5b5] font-GiestRegular text-[16px] leading-[16px] tracking-[-0.32px]'>
          and our customers loves our{' '}
          <span className='bg-clip-text text-[transparent] bg-linearGradient1 font-GiestSemiBold'>
            Support Teams that always be there 24/7
          </span>
        </p>

        <div className='mt-[20px]'>
          <Image src={AvatarFrame} alt='image' className='max-w-[176px]' />
        </div>

        <div className='flex items-center relative top-[-40px] left-[200px]'>
          <Image src={CurlyLine} alt='image' />

          <h5 className='max-w-[169px] text-left text-white font-Caveat text-[20px] leading-[24px]'>
            and because they’re awesome too
          </h5>
        </div>
      </div>
    </section>
  )
}

export default LoveSection
