import { useState, useRef } from 'react'
import Image from 'next/image'
import Plus from '../../assets/images/plus.svg'
import Close from '../../assets/images/Close.svg'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)
  const contentRef = useRef(null)

  const toggleAccordion = () => {
    setIsActive(!isActive)
  }

  return (
    <div className='py-[12px] px-[16px] rounded-[8px] border border-solid border-[#ffffff21] bg-[#1616164D]'>
      <div
        className='flex w-[100%] cursor-pointer select-none items-center justify-between'
        onClick={toggleAccordion}>
        <h5
          className={`font-SfProMedium text-[14px] leading-[14px] ${
            isActive ? 'text-[#fff]' : 'text-[#B5B5B5]'
          }`}>
          {title}
        </h5>

        {isActive ?
          <Image src={Close} alt='icon' />
          :
          <Image src={Plus} alt='icon' />
        }
      </div>

      <div
        ref={contentRef}
        className='transition-max-height overflow-hidden duration-300'
        style={{
          maxHeight: isActive ? `${contentRef.current.scrollHeight}px` : '0px'
        }}>
        <p className='text-white font-SfProRegular text-[14px] leading-[21px] mt-[12px]'>
          {content}
        </p>
      </div>
    </div>
  )
}

export default Accordion
