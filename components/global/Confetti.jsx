import React, { useRef } from 'react'
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks'

const ConfettiComponent = () => {
  const confettiRef = useRef(null)

  const handleClick = () => {
    if (confettiRef.current) {
      confettiRef.current({
        particleCount: 200,
        spread: 200,
        origin: { y: 0.6 }
      })
    }
  }

  return (
    <div className=' fixed top-0 left-0 w-full min-h-screen z-[500]'>
      {/* <button onClick={handleClick}>Launch Confetti</button> */}
      <Fireworks autorun={{ speed: 3 }} />
    </div>
  )
}

export default ConfettiComponent
