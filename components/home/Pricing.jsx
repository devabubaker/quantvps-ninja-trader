import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import Skeleton from '../global/Skeleton'
import { useUser } from '@clerk/nextjs'
import { Button } from '../ui/button'
const Pricing = ({ vpsAll, setOpen, setSelectedServer, setOpen2 }) => {
  const { isSignedIn } = useUser()

  return (
    <div className='my-10'>
      <div className='bg-white border rounded-[30px] px-3 lg:px-[110px] py-[40px] max-w-[1360px] mx-auto'>
        <div
          className='flex w-full items-center justify-center
            '>
          <p className=' text-center bg-[#F4F4F5] text-[#09090B] px-1 lg:px-4 py-[5px] text-[13px]  flex items-center gap-2 rounded-[12px] '>
            🎉 For Futures, Forex, Equity, and Crypto Trading{' '}
            <BsArrowRight className='w-5 h-5' />
          </p>
        </div>
        <h1 className='mt-8 mb-6 text-left text-[20px]  lg:text-[24px] leading-[24px] lg:leading-[32px] text-[#171717] font-semibold'>
          On-demand VPS, Dedicated, and GPU Cloud Pricing. <br />
          <span className='text-[#666] font-normal'>
            Access high-powered servers.{' '}
            <span className='border-b text-main border-black'> Instantly.</span>
          </span>
        </h1>

        <div className=' overflow-x-auto mt-5'>
          <div className=' min-w-[1000px]'>
            <div className='grid grid-cols-8 border-b border-black pb-3 items-center'>
              <div className=' col-span-2'>
                <p className=' font-semibold text-main text-[12px]'>Plan</p>
              </div>
              <p className=' font-semibold text-center text-main text-[12px]'>
                vCPUs
              </p>
              <p className=' font-semibold text-center text-main text-[12px]'>
                RAM
              </p>
              <p className=' font-semibold text-center text-main text-[12px]'>
                Storage
              </p>
              <p className=' font-semibold text-center text-main text-[12px]'>
                Setup Time
              </p>
              <p className=' font-semibold text-center text-main text-[12px]'>
                Price
              </p>
              <div></div>
            </div>
            {vpsAll?.length > 0 ?
              <>
                {vpsAll?.map((item, ind) =>
                  <div
                    key={ind}
                    className='grid grid-cols-8 py-3 border-b pb-3 items-center'>
                    <div className=' col-span-2 flex items-center gap-2'>
                      <div className='w-[8px] h-[8px] rounded-full bg-main'></div>
                      <p className=' font-semibold text-main text-[12px]'>
                        {item?.name?.slice(3)}
                      </p>
                      <button className='px-2 rounded-[6px]  py-1 bg-[#666666] bg-opacity-10 text-[12px] text-body'>
                        VPS
                      </button>
                    </div>
                    <p className='  text-center text-main text-[12px]'>
                      {item?.description?.CPU?.slice(0, 3)}
                    </p>
                    <p className='  text-center text-main text-[12px]'>
                      {item?.description?.RAM}
                    </p>
                    <p className='  text-center text-main text-[12px]'>
                      {item?.description?.storage}
                    </p>
                    <p className='  text-center text-main text-[12px]'>
                      Instant
                    </p>
                    <p className='  text-center text-main text-[12px]'>
                      ${item?.pricing} / mo
                    </p>
                    <div>
                      {!isSignedIn ?
                        <>
                          <Button
                            onClick={() => {
                              setOpen(true)
                              setSelectedServer(item?.pid)
                            }}
                            className='bg-main hidden lg:flex justify-center py-[3px] px-4 rounded-[6px] text-[12px] text-white  items-center gap-1'>
                            Deploy <BsArrowRight className='w-3 h-3' />
                          </Button>
                          <Button
                            onClick={() => {
                              setOpen2(true)
                              setSelectedServer(item?.pid)
                            }}
                            className='bg-main flex lg:hidden justify-center py-[3px] px-4 rounded-[6px] text-[12px] text-white  items-center gap-1'>
                            Deploy <BsArrowRight className='w-3 h-3' />
                          </Button>
                        </>
                        :
                        <Link href='/dashboard/order-new-server'>
                          <Button className='bg-main justify-center py-[3px] px-4 rounded-[6px] text-[12px] text-white flex items-center gap-1'>
                            Deploy <BsArrowRight className='w-3 h-3' />
                          </Button>
                        </Link>
                      }
                    </div>
                  </div>
                )}
              </>
              :
              <div className='w-full'>
                <Skeleton className={'w-full mt-2 py-[20px]'} />
                <Skeleton className={'w-full mt-2 py-[20px]'} />
                <Skeleton className={'w-full mt-2 py-[20px]'} />
                <Skeleton className={'w-full mt-2 py-[20px]'} />
              </div>
            }
          </div>
        </div>
        <h1 className=' mt-3 tracking-[-0.96px] text-left text-[20px]  lg:text-[24px] leading-[24px] lg:leading-[32px] text-[#171717] font-semibold'>
          Ready to trade?{' '}
          <span className='text-[#666] font-normal'>
            Use our servers. Check out the{' '}
            <Link
              href={'/login'}
              //  href={"/tradervue"}
              className=' font-semibold text-main'>
              VPS Lite
            </Link>
            ,{' '}
            <Link
              href={'/login'}
              // href={"/tradezella"}
              className=' font-semibold text-[#0068D6]'>
              VPS Pro
            </Link>
            ,{' '}
            <Link
              href={'/login'}
              // href={"/tradersync"}
              className=' font-semibold text-[#2d20bc]'>
              VPS Max
            </Link>{' '}
            and{' '}
            <Link
              href={'/login'}
              // href={"/tradersync"}
              className=' font-semibold text-[#7820BC]'>
              VPS Ultra
            </Link>
          </span>
        </h1>
      </div>
    </div>
  )
}

export default Pricing
