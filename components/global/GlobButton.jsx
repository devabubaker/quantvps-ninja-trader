import { forwardRef, useLayoutEffect, useRef, useState } from 'react'

const BorderGlowButton = forwardRef(
  ({ btnType, text, isDisabled, isdeploying }, _) => {
    const ref = useRef(null)
    const [mousePosition, setMousePosition] = useState({
      x: '-100%',
      y: '-100%'
    })

    useLayoutEffect(() => {
      const handleMouseMove = e => {
        if (!ref?.current) return
        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePosition({ x: `${x}px`, y: `${y}px` })
      }
      document.addEventListener('mousemove', handleMouseMove)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
      }
    }, [])

    return (
      <button
        disabled={isDisabled ? isDisabled : false}
        type={btnType ? btnType : 'button'}
        className='inverted relative mt-2 overflow-hidden w-full rounded-lg bg-[#e5e7eb] transform transition-transform ease-in-out active:scale-90'
        ref={ref}
        style={isDisabled ? { cursor: 'default' } : { cursor: 'pointer' }}>
        <span
          className={
            'absolute z-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(#000000_0%,transparent_70%)] '
          }
          style={{
            left: mousePosition.x,
            top: mousePosition.y
          }}></span>
        <div className='relative z-10 m-[1px] flex items-center justify-center gap-2  w-full rounded-[calc(0.5rem-1px)] bg-white/90  px-4  py-[12px] font-semibold text-center text-[14px] text-main backdrop-blur-sm'>
          {isdeploying && <span className='exampleBtn'></span>}
          {text}
        </div>
      </button>
    )
  }
)
BorderGlowButton.displayName = 'BorderGlowButton'

export default BorderGlowButton
