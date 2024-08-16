import React from 'react'
// import Header from "../components/layout/Header";
// import Tabs from "../components/global/Tabs";
// import Footer from "../components/layout/Footer";
import Image from 'next/image'
import Help from '../components/support/Help'
// import GlobLayout from "../components/layout/GlobLayout";
import Link from 'next/link'
import Head from 'next/head'
import StatusWidget from '@/components/global/StatusWidget'
const Support = () => {
  return (
    <div>
      <Head>
        <title>Support QuantVPS</title>
      </Head>
      <>
        <div className='lg:max-w-[1248px] flex items-center flex-wrap gap-2 justify-between py-[40px] mx-auto px-4'>
          <div>
            <h1 className='text-main font-semibold text-[32px]'>Support</h1>
            <div className='text-[14px] flex flex-wrap  items-center gap-2 text-[#666666]'>
              We are built & ran by traders. We can help.{' '}
              <Link className='text-[#0068D6] flex items-center ' href={'/'}>
                Learn more{' '}
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
          <StatusWidget></StatusWidget>
        </div>
        <Help />
      </>
    </div>
  )
}

export default Support
