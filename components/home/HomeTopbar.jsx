import React from 'react'
import { MdArrowRight } from 'react-icons/md'
import Link from 'next/link'
const HomeTopbar = () => {
  return (
    <div className='bg-black  w-full py-2 flex  items-center justify-center  divide-x'>
      <p className=' font-medium text-white text-[11px] lg:text-[13px] pr-3'>
        AMD Epyc in Chicago Datacenter Restocked
      </p>
      <Link
        href={'#pricing'}
        className=' font-medium text-white text-[11px] lg:text-[13px] group relative pl-3 flex items-center'>
        Read more
        <div className='transition group-hover:translate-x-1'>
          <MdArrowRight className='w-5 h-5' />
        </div>
      </Link>
    </div>
  )
}

export default HomeTopbar
