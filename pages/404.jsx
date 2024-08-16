import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Not found</title>
      </Head>
      <div className=' min-h-[700px] relative '>
        <div className='flex min-h-[700px] z-40  items-center flex-col justify-center'>
          <h1 className='text-main text-2xl font-semibold'>
            Seems like this page doesn&apos;t exist.
          </h1>
          <p className='text-body text-sm text-center mt-2'>
            The page your are trying to reach is either missing <br /> or we are
            currenty building it ⚒️
          </p>
          <Link href='/'>
            <button className='border px-[16px] py-[8px] text-sm mt-4 hover:bg-gray-100 transition-all duration-100 rounded-[8px] text-body'>
              Back Home
            </button>
          </Link>
        </div>

        <h1 className=' hidden lg:block absolute top-[10%] left-[3%] rotate-12 font-semibold text-[70px]'>
          404
        </h1>
        <h1 className=' hidden lg:block absolute top-[10%] left-[56%] -rotate-45 font-semibold text-[70px]'>
          404
        </h1>
        <h1 className=' hidden lg:block absolute top-[30%] left-[26%] rotate-[68deg] font-semibold text-[70px]'>
          404
        </h1>
        <h1 className=' hidden lg:block absolute top-[60%] left-[66%] rotate-[-34deg] font-semibold text-[70px]'>
          404
        </h1>
        <h1 className=' hidden lg:block absolute top-[80%] left-[6%] rotate-[56deg] font-semibold text-[70px]'>
          404
        </h1>
        <h1 className=' hidden lg:block absolute top-[80%] left-[25%] rotate-[-52deg] font-semibold text-[70px]'>
          404
        </h1>
        <h1 className=' hidden lg:block absolute top-[20%] left-[83%] rotate-[96deg] font-semibold text-[90px]'>
          404
        </h1>
        <h1 className=' hidden lg:block absolute top-[50%] left-[13%] rotate-[-196deg] font-semibold text-[90px]'>
          404
        </h1>
        <h1 className=' hidden lg:block absolute top-[70%] left-[76%] rotate-[-76deg] font-semibold text-[90px]'>
          404
        </h1>
        <h1 className=' hidden lg:block absolute top-[30%] left-[65%] rotate-[-22deg] font-semibold text-[70px]'>
          404
        </h1>
        <h1 className=' hidden lg:block absolute top-[20%] left-[15%] rotate-[-92deg] font-semibold text-[70px]'>
          404
        </h1>
        <h1 className=' hidden lg:block absolute top-[10%] left-[35%] rotate-[-02deg] font-semibold text-[70px]'>
          404
        </h1>
        <h1 className=' hidden lg:block absolute top-[80%] left-[45%] rotate-[-42deg] font-semibold text-[70px]'>
          404
        </h1>
      </div>
    </>
  )
}

export default Custom404
