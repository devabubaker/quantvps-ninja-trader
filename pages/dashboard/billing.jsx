import React, { useState } from 'react'
// import GlobLayout from '../components/layout/GlobLayout'
import Image from 'next/image'
import ActivePlans from '@/components/billings/ActivePlans'
import PaymentMethod from '@/components/billings/PaymentMethod'
import PaymentHistory from '@/components/billings/PaymentHistory'
import Link from 'next/link'
import Head from 'next/head'
const Billing = () => {
  return (
    <>
      <Head>
        <title>Billing QuantVPS</title>
      </Head>
      <div className='lg:max-w-[1200px] flex items-start justify-between py-[40px] mx-auto px-4'>
        <div>
          <h1 className='text-main font-semibold text-[32px]'>Billing</h1>
          <div className='text-[14px] mt-2 flex items-center gap-1 text-[#666666]'>
            Manage your server expenses here.
            <Link className='text-[#0068D6] flex items-center ' href={'/'}>
              Learn more
              <div className='w-[17px]'>
                <Image
                  alt='external link'
                  width={300}
                  height={300}
                  src={'/link.svg'}
                  className='object-cover'
                />
              </div>{' '}
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-[#FAFAFA] px-3 lg:px-0 min-h-screen py-[40px]'>
        <div className='max-w-[922px] lg:px-3 lg:p-0 mx-auto'>
          <div className='flex items-center justify-center w-full mb-5'>
            <div className='w-[60px]'>
              <Image
                alt='dollar sign'
                width={300}
                height={300}
                src={'/billing.png'}
                className='object-cover'
              />
            </div>
          </div>
        </div>
        <ActivePlans />
        <PaymentMethod />
        <PaymentHistory />
        {/* */}
      </div>
    </>
  )
}

export default Billing
