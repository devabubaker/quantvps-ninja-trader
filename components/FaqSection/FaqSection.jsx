import { AccordionData } from '@/constants'
import Accordion from '../Accordion/Accordion'

const FaqSection = () => {
  return (
    <section className='px-[180px] pt-[120px] pb-[80px] relative'>
      <div className='flex flex-col items-center text-center'>
        <h6 className='text-[#0171E3] font-SfProSemibold text-[16px] leading-[16px] tracking-[-0.32px]'>
          FAQ
        </h6>

        <h4 className='text-[#F5F5F7] font-SfProDisplaySemibold text-[40px] mt-[4px] mb-[16px] leading-[44px]'>
          Frequently asked questions
        </h4>

        <p className='text-[#b5b5b5] font-SfProRegular text-[18px] leading-[27px] tracking-[-0.36px]'>
          Some short answers that provide clarity of what QuantVPS is about
        </p>
      </div>

      <div className='flex flex-col gap-[16px] max-w-[720px] mx-auto mt-[48px]'>
        {AccordionData.map(item =>
          <Accordion key={item.id} title={item.title} content={item.content} />
        )}
      </div>
    </section>
  )
}

export default FaqSection
