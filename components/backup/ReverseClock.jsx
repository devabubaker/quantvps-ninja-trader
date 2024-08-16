import { useEffect, useState } from 'react'

const ReverseClock = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeDifference())

  function getTimeDifference() {
    const currentDate = new Date()
    const targetDateTime = new Date(targetDate)
    const timeDifference = targetDateTime - currentDate

    return Math.max(timeDifference, 0)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTimeLeft => Math.max(prevTimeLeft - 1000, 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = time => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor(time / (1000 * 60 * 60) % 24)
    const minutes = Math.floor(time / (1000 * 60) % 60)
    const seconds = Math.floor(time / 1000 % 60)

    let timeString = ''
    if (days > 0) {
      timeString += `${days} day${days !== 1 ? 's' : ''} `
    }
    timeString += `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

    return timeString
  }
  return <p>{formatTime(timeLeft)}</p>
}

export default ReverseClock
