import React from 'react'

const Skeleton = ({ className }) => {
  return (
    <div className={`animate-pulse rounded-md bg-gray-900/30 ${className} `} />
  )
}

export default Skeleton
