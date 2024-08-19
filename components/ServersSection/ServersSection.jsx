import Image from 'next/image'
import LightBulb from '../../assets/images/Lightbulb.svg'
import { ServersSectionData } from '@/constants'
import ServersMainBg from '../../assets/images/servers-main-bg.svg'
import MetalBlackVideoCardImg from '../../assets/images/metal-black-video-card-1.svg'

const ServersSection = () => {
  return (
    <section className='relative overflow-hidden h-[720px]'>
      <Image
        src={ServersMainBg}
        alt='image'
        className='absolute w-[100%] h-[900px] bottom-[-180px] right-[-14px] object-cover'
      />

      <Image
        src={MetalBlackVideoCardImg}
        alt='image'
        className='w-[574px] h-[574px] absolute right-[60px] top-[50%] translate-y-[-50%]'
      />

      <div className='container h-[100%] flex items-center py-[120px]'>
        <div>
          <div className='w-[720px]'>
            <h6 className='text-[#0171E3] font-SfProSemibold text-[14px] leading-[14px] tracking-[-0.28px] mb-[4px]'>
              Stop worrying about the infrastructure
            </h6>

            <h4 className='max-w-[482px] text-[#F5F5F7] font-SfProDisplaySemibold text-[40px] leading-[44px]'>
              We have the fastest trading servers for futures trading
            </h4>

            <div className='mt-[40px] flex justify-between flex-wrap gap-[48px]'>
              {ServersSectionData.map(item =>
                <div
                  key={item.id}
                  className='flex flex-col gap-[8px] w-[336px]'>
                  <h5 className='flex items-center gap-[8px] text-[17px] font-GiestSemiBold text-[#F8F8F8F2] leading-[22.1px]'>
                    <Image src={LightBulb} alt='icon' />
                    {item.title}
                  </h5>

                  <p className='text-[#B5B5B5] font-SfProRegular leading-[21px] tracking-[-0.28px] text-[14px]'>
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServersSection
