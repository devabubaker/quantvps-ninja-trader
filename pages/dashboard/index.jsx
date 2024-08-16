import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MyContext } from '../_app'
import ActiveServices from '@/components/overview/ActiveServices'
import Skeleton from '@/components/global/Skeleton'
import { Button } from '@/components/ui/button'
import Head from 'next/head'
const Overview = () => {
  const ctx = useContext(MyContext)
  const { allMySevers, globLoading } = ctx
  return (
    <>
      <Head>
        <title>Dashboard QuantVPS</title>
      </Head>
      <div className='w-full p-3 lg:p-0 pb-[20px] bg-[#FAFAFA]'>
        <div className=' min-h-screen max-w-[1012px] mx-auto'>
          <div className='w-full flex items-center gap-2 justify-end pt-5'>
            <Link href={'/dashboard/order-new-server'}>
              <button className='group/button relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-main font-medium text-white transition-all duration-300 hover:w-36'>
                <p className='inline-flex whitespace-nowrap text-[12px] opacity-0 transition-all duration-200 group-hover/button:-translate-x-2.5 group-hover/button:opacity-100'>
                  Deploy new server
                </p>
                <div className='absolute right-1.5'>
                  <svg
                    viewBox='0 0 15 15'
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 fill-white'>
                    <path d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'></path>
                  </svg>
                </div>
              </button>
            </Link>
          </div>
          {!globLoading ?
            <>
              {allMySevers?.length > 0 ?
                <div className='flex items-center justify-center'>
                  <ActiveServices activeServers={allMySevers} />
                </div>
                :
                <div className=' border mt-5 flex items-center justify-center flex-col gap-2 rounded-[12px] h-[320px]'>
                  <p className='text-[#000308] text-opacity-[88.7%] tracking-[-0.16px] text-[20px] font-bold text-center'>
                    You don&apos;t have any active servers
                  </p>
                  <p className='text-[14px] mb-5 text-[#000511] text-opacity-[62%] leading-[20px] text-center'>
                    Your active VPS and Dedicated Servers will show here. For
                    support, please <br />
                    contact us using the live chat feature.{' '}
                  </p>
                  <Link href={'/dashboard/order-new-server'}>
                    <Button className=' bg-main px-[14px] text-[14px] py-[8px] rounded-[6px] text-white flex items-center gap-2'>
                      <div className='w-[11px]'>
                        <Image
                          alt='plus'
                          width={300}
                          height={300}
                          src={'/home/plus.svg'}
                          className='object-cover'
                        />
                      </div>
                      Deploy New Server{' '}
                    </Button>
                  </Link>
                </div>
              }
            </>
            :
            <div className='mt-4'>
              <Skeleton className={'h-[125px] w-full'} />
              <Skeleton className={'h-[125px] mt-2 w-full'} />
              <Skeleton className={'h-[125px] mt-2 w-full'} />
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Overview
