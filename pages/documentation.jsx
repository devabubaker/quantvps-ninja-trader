import React, { useState } from 'react'
import HomeNavbar from '../components/home/HomeNavbar'
import Image from 'next/image'
import Head from 'next/head'

const Documentation = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Head>
        <title>Documentation QuantVPS</title>
      </Head>
      <div className='relative min-h-screen w-full'>
        <HomeNavbar setOpen={setOpen} />
        <div className='px-3 mt-8'>
          <div className='lg:max-w-[1000px] mx-auto  '>
            <h2 className='text-2xl font-semibold text-main'>
              SDK Mental Model
            </h2>
            <p className='text-body'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              possimus repellendus esse eum explicabo vitae est eveniet sit! Id,
              fuga. Perspiciatis, delectus officiis! Alias architecto
              perspiciatis error accusantium ipsam facilis.
            </p>
            <p className='text-body mt-2'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.{' '}
            </p>
            <div className='mt-1 '>
              <ul className=' list-disc ml-6'>
                <li className='text-body'>
                  <b>Lorem ipsum</b> dolor, sit amet consectetur adipisicing.
                </li>
                <li className='text-body'>
                  <b>Lorem ipsum</b> dolor, sit amet consectetur adipisicing.
                </li>
                <li className='text-body'>
                  <b>Lorem ipsum</b> dolor, sit amet consectetur adipisicing.
                </li>
                <li className='text-body'>
                  <b>Lorem ipsum</b> dolor, sit amet consectetur adipisicing.
                </li>
              </ul>
            </div>

            <Image
              alt='scheme'
              src={
                'https://www.100ms.live/docs/docs/v2/web-mental-model/100ms.png'
              }
              width={1000}
              height={800}
              className='w-full my-7 '
            />
            <h2 className='text-2xl font-semibold text-main'>
              SDK Mental Model
            </h2>
            <p className='text-body'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              possimus repellendus esse eum explicabo vitae est eveniet sit! Id,
              fuga. Perspiciatis, delectus officiis! Alias architecto
              perspiciatis error accusantium ipsam facilis.
            </p>
            <div className='mt-3 '>
              <ul className=' list-disc ml-6'>
                <li className='text-body'>
                  <b>Lorem ipsum</b> dolor, sit amet consectetur adipisicing.
                </li>
                <li className='text-body'>
                  <b>Lorem ipsum</b> dolor, sit amet consectetur adipisicing.
                </li>
                <li className='text-body'>
                  <b>Lorem ipsum</b> dolor, sit amet consectetur adipisicing.
                </li>
                <li className='text-body'>
                  <b>Lorem ipsum</b> dolor, sit amet consectetur adipisicing.
                </li>
              </ul>
            </div>

            <Image
              alt='scheme'
              src={
                'https://www.100ms.live/docs/docs/v2/web-mental-model/100ms.png'
              }
              width={1000}
              height={800}
              className='w-full my-7 '
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Documentation
