import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Skeleton from '../global/Skeleton'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import { Button } from '../ui/button'
const Cloud = ({ mainVpServers, setOpen, setSelectedServer, setOpen2 }) => {
  const [active, setActive] = useState()
  const [selectedList, setSelectedList] = useState(null)
  useEffect(() => {
    if (mainVpServers?.length > 0) {
      if (selectedList === null) {
        setSelectedList(mainVpServers[0])
        setActive(mainVpServers[0]?.pid)
      }
      const filterData = mainVpServers.filter(item => item.pid === active)
      setSelectedList(filterData[0])
    }
  }, [active, mainVpServers, selectedList])
  const { isSignedIn } = useUser()
  return (
    <div className='w-full relative'>
      <Image
        alt='feature'
        width={2600}
        className=' mt-8 h-[680px] lg:min-h-[900px] lg:max-h-[900px]'
        height={2000}
        src={'/feature.png'}
      />
      <div className='absolute top-0 overflow-x-hidden  p-5 lg:p-0 left-0 w-full h-full z-20'>
        <div className=' max-w-[330px]  lg:max-w-[1128px]  relative mx-auto mt-[120px] lg:mt-[230px]'>
          <div className='w-[330px] lg:w-[701px] mx-auto'>
            <Image
              alt='frame'
              width={2600}
              className=' object-cover '
              height={2000}
              src={'/home/frame.png'}
            />
          </div>
          <div className='absolute -bottom-[30px] -left-[20px] lg:-bottom-[105px]  lg:left-[0px] z-30'>
            <div className='w-[90px] lg:w-[239px]  relative'>
              <Image
                alt='fan case'
                width={500}
                className=' object-cover'
                height={500}
                src={'/home/parent.png'}
              />
              <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-20'>
                <div className='w-[189px]'>
                  <Image
                    alt='fan'
                    width={500}
                    className=' object-cover duration-100 animate-spin'
                    height={500}
                    src={'/home/child.png'}
                  />
                </div>
              </div>
              <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-30'>
                <div className='w-[201px]'>
                  <Image
                    alt='logo'
                    width={500}
                    className=' object-cover '
                    height={500}
                    src={'/home/fr.png'}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='absolute bottom-[30px] left-[65px] lg:bottom-[40px] lg:left-[320px] z-30'>
            <div className='w-[90px] lg:w-[239px]  relative'>
              <Image
                alt='fan case'
                width={500}
                className=' object-cover'
                height={500}
                src={'/home/parent.png'}
              />
              <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-20'>
                <div className='w-[189px]'>
                  <Image
                    alt='fan'
                    width={500}
                    className=' object-cover duration-100 animate-spin'
                    height={500}
                    src={'/home/child.png'}
                  />
                </div>
              </div>
              <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-30'>
                <div className='w-[201px]'>
                  <Image
                    alt='logo'
                    width={500}
                    className=' object-cover '
                    height={500}
                    src={'/home/fr.png'}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='absolute bottom-[30px] left-[180px] lg:bottom-[40px]  lg:left-[570px] z-30'>
            <div className='w-[90px] lg:w-[239px]  relative'>
              <Image
                alt='fan case'
                width={500}
                className=' object-cover'
                height={500}
                src={'/home/parent.png'}
              />
              <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-20'>
                <div className='w-[189px]'>
                  <Image
                    alt='fan'
                    width={500}
                    className=' object-cover duration-100 animate-spin'
                    height={500}
                    src={'/home/child.png'}
                  />
                </div>
              </div>
              <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-30'>
                <div className='w-[201px]'>
                  <Image
                    alt='logo'
                    width={500}
                    className=' object-cover '
                    height={500}
                    src={'/home/fr.png'}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='absolute -bottom-[30px]  lg:-bottom-[105px] -right-[20px] lg:right-[0px] z-30'>
            <div className='w-[90px] lg:w-[239px]  relative'>
              <Image
                alt='fan case'
                width={500}
                className=' object-cover'
                height={500}
                src={'/home/parent.png'}
              />
              <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-20'>
                <div className='w-[189px]'>
                  <Image
                    alt='fan'
                    width={500}
                    className=' object-cover duration-100 animate-spin'
                    height={500}
                    src={'/home/child.png'}
                  />
                </div>
              </div>
              <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-30'>
                <div className='w-[201px]'>
                  <Image
                    alt='logo'
                    width={500}
                    className=' object-cover '
                    height={500}
                    src={'/home/fr.png'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className='text-white font-semibold text-[32px] text-center mt-[50px] lg:mt-[60px]'>
          QuantVPS is the Trading Cloud
        </h1>
        <p className='text-[16px] text-[#9394A1] mt-2 text-center'>
          Trade, backtest, and scale your trading <br /> systems on our{' '}
          <span className='text-[#BFE8FF]'>fast, low latency servers.</span>
        </p>
        <div className='flex items-center mt-6 lg:mt-10 justify-center w-full'>
          {mainVpServers?.length > 0 ?
            <>
              {!isSignedIn ?
                <>
                  <button
                    onClick={() => {
                      setSelectedServer(active)
                      setOpen(true)
                    }}
                    className='w-[160px] hidden lg:block relative'>
                    <Image
                      alt='button bg'
                      width={200}
                      className=' object-cover '
                      height={200}
                      src={'/btn.png'}
                    />
                    <div className=' absolute top-0 left-0 w-full h-full  flex items-center justify-center '>
                      <p className='text-white text-[12px]'>Deploy Now</p>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setSelectedServer(active)
                      setOpen2(true)
                    }}
                    className='w-[160px] block lg:hidden relative'>
                    <Image
                      alt='button bg'
                      width={200}
                      className=' object-cover '
                      height={200}
                      src={'/btn.png'}
                    />
                    <div className=' absolute top-0 left-0 w-full h-full  flex items-center justify-center '>
                      <p className='text-white text-[12px]'>Deploy Now</p>
                    </div>
                  </button>
                </>
                :
                <Link href='/dashboard/order-new-server'>
                  <button
                    onClick={() => {
                      setSelectedServer(active)
                      setOpen(true)
                    }}
                    className='w-[160px]  relative'>
                    <Image
                      alt='button bg'
                      width={200}
                      className=' object-cover '
                      height={200}
                      src={'/btn.png'}
                    />
                    <div className=' absolute top-0 left-0 w-full h-full  flex items-center justify-center '>
                      <p className='text-white text-[12px]'>Deploy Now</p>
                    </div>
                  </button>
                  <button className='w-[160px] block lg:hidden relative'>
                    <Image
                      alt='button bg'
                      width={200}
                      className=' object-cover '
                      height={200}
                      src={'/btn.png'}
                    />
                    <div className=' absolute top-0 left-0 w-full h-full  flex items-center justify-center '>
                      <p className='text-white text-[12px]'>Deploy Now</p>
                    </div>
                  </button>
                </Link>
              }
            </>
            :
            <Skeleton
              className={'w-[130px] relative z-40 bg-white opacity-90 h-[40px]'}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default Cloud
