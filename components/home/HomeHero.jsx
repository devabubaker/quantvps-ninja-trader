import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Skeleton from '../global/Skeleton'
import { useUser } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
const HomeHero = ({
  mainVpServers,
  vpsAll,
  setOpen,
  setSelectedServer,
  setOpen2,
  annualType,
  setAnnualType
}) => {
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

  const [countNum, setCountNum] = useState(1105.12)
  const [startCount, setStartCount] = useState(false)
  useEffect(() => {
    if (countNum <= 4505.12 && startCount) {
      setTimeout(() => {
        let countt = countNum + 9.9
        let data22 = countt.toFixed(2)
        setCountNum(countt)
      }, 50)
    }
  }, [countNum, startCount])

  let fontSize = 64
  let constantText = 'Coin landed on '
  let rotatingText = ['low latency', 'fast']

  //

  useEffect(() => {
    // Define the options for the IntersectionObserver
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.5 // Trigger when 50% of the target is in view
    }

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If the #features section is in view
          setStartCount(true)
        } else {
          setStartCount(false)
          // If the #features section is not in view
        }
      })
    }, options)

    // Get the target element
    const targetElement = document.querySelector('#features')

    // Observe the target element
    if (targetElement) {
      observer.observe(targetElement)
    } else {
      console.error('Target element not found')
    }

    // Cleanup function
    return () => {
      observer.disconnect() // Disconnect the observer when component unmounts
    }
  }, [])
  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash
    if (hash) {
      // Scroll to the element with the corresponding ID
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])
  return (
    <div className='max-w-[1078px] lg:border  relative   mx-auto'>
      <div className='relative  w-full min-h-[451px]'>
        <div className='absolute  -top-[7px] -left-[7px]'>
          <div className='w-[16px] h-[16px]'>
            <Image width={100} height={100} src={'/plus.png'} alt='plus' />
          </div>
        </div>
        <Image
          alt='white background'
          width={1600}
          height={1000}
          className=' w-full h-full min-h-[470px] lg:min-h-max'
          src={'/heromain.png'}
        />
        <div className='absolute z-10 w-full h-full p-5 lg:p-0 top-0 left-0 flex items-center justify-center flex-col'>
          <h1 className='capitalize font-semibold text-[#171717] -tracking-[2.4px] text-[26px] lg:text-[40px] leading-[35px] text-center lg:leading-[48px]'>
            QuantVPS is the trading Cloud.{' '}
            <span className='text-[#666666] font-normal'>
              Trade, backtest,{' '}
              <span className='lg:hidden'>and scale on our</span>
            </span>{' '}
          </h1>
          <h1 className='capitalize font-semibold overflow-hidden relative text-[#171717] flex items-center gap-2 -tracking-[2.4px] text-[26px] lg:text-[40px] leading-[35px] text-center lg:leading-[48px]'>
            <span className='text-[#666666] font-normal hidden lg:block'>
              and scale on our
            </span>
            {/* {rotatingText.map((item, index) => (
                <motion.div key={index}

                  animate={{
                    y: [fontSize, -fontSize * 0.75, -fontSize - 10],
                    opacity: [0, 1, 0],
                    transition: {
                      times: [0, 0.8, 11],
                      repeat: Infinity,
                      duration: 1.5,
                      repeatDelay: 1.5 * (rotatingText.length - 1),
                      delay: 1.5 * index,
                    },
                  }}
                >
                  <p
                    style={{ fontSize: "${fontSize}px" }}
                    className={"font-bold"}
                  >
                    {item}
                  </p>
                </motion.div>
              ))} */}
            <span className='text-[#666666] font-normal'>
              Low-Latency servers.
            </span>
          </h1>

          <div className='mt-8  flex items-center justify-center lg:justify-start gap-3 flex-wrap'>
            {mainVpServers?.length > 0 ?
              <>
                {!isSignedIn ?
                  <>
                    <Button
                      onClick={() => {
                        setSelectedServer(active)
                        setOpen2(true)
                      }}
                      className='text-[16px] flex lg:hidden items-center gap-2 bg-[#131316] font-medium text-white py-[11px] px-[28px] rounded-[6px] relative'>
                      <div className='w-[16px]'>
                        <Image
                          width={166}
                          height={126}
                          alt=''
                          src={'/deploy.png'}
                        />
                      </div>
                      Deploy Server
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedServer(active)
                        setOpen(true)
                      }}
                      className='text-[16px] hidden lg:flex items-center gap-2 bg-[#131316] font-medium text-white py-[11px] px-[28px] rounded-[6px] relative'>
                      <div className='w-[16px]'>
                        <Image
                          width={166}
                          height={126}
                          alt=''
                          src={'/deploy.png'}
                        />
                      </div>
                      Deploy Server
                    </Button>
                  </>
                  :
                  <Link href={'/dashboard/order-new-server'}>
                    <Button className='text-[16px] flex items-center gap-2 bg-[#131316] font-medium text-white py-[11px] px-[28px] rounded-[6px] relative'>
                      <div className='w-[16px]'>
                        <Image
                          width={166}
                          height={126}
                          alt=''
                          src={'/deploy.png'}
                        />
                      </div>
                      Deploy Server
                    </Button>
                  </Link>
                }
              </>
              :
              <Skeleton className={'w-[173px] h-[46px]'} />
            }

            <Link
              href={'#hosting'}
              className='text-[16px] flex items-center gap-2 border font-medium text-main  py-[12px] px-[50px] rounded-[6px] relative'>
              Learn more
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="w-full border-b flex items-center flex-wrap gap-4 justify-center py-[40px] hidden">
        <h1 className="text-main text-[24px] w-full text-center lg:w-auto font-semibold">
          Our Services:
        </h1>
        <button className="border transform duration-300 ease-in-out hover:-translate-y-1 bg-white cursor-pointer px-4 py-3 group shadow-md flex text-[14px] items-center gap-1 rounded-[23px] text-main">
          <div className="w-[17px]">
            <Image width={166} height={126} alt="" src={"/home/ic1.png"} />
          </div>
          Forex VPS
        </button>
        <button className="border bg-white transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer px-4 py-3 group shadow-md flex text-[14px] items-center gap-1 rounded-[23px] text-main">
          <div className="w-[17px]">
            <Image width={166} height={126} alt="" src={"/home/ic2.png"} />
          </div>
          Crypto VPS
        </button>
        <button className="border bg-white transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer px-4 py-3 group shadow-md flex text-[14px] items-center gap-1 rounded-[23px] text-main">
          <div className="w-[17px]">
            <Image width={166} height={126} alt="" src={"/home/ic3.png"} />
          </div>
          GPU VPS
        </button>
        <button className="border bg-white transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer px-4 py-3 group shadow-md flex text-[14px] items-center gap-1 rounded-[23px] text-main">
          <div className="w-[17px]">
            <Image width={166} height={126} alt="" src={"/home/ic4.png"} />
          </div>
          Futures VPS
        </button>
        <button className="border bg-white transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer px-4 py-3 group shadow-md flex text-[14px] items-center gap-1 rounded-[23px] text-main">
          <div className="w-[17px]">
            <Image width={166} height={126} alt="" src={"/home/ic5.png"} />
          </div>
          AMD Ryzen VPS
        </button>
      </div> */}
      <div id='pricing' className='border-b w-full'>
        <div className='py-6 lg:mx-auto max-w-[900px]  lg:px-0 px-2 '>
          <h1
            className='
      text-[32px] font-semibold text-center lg:text-left mt-8 text-main'>
            VPS Pricing
          </h1>
          {mainVpServers?.length > 0 ?
            <div className=' w-full'>
              <div className='w-full mt-3 grid grid-cols-1 gap-6 lg:grid-cols-8'>
                <div className=' lg:col-span-5'>
                  <div className='flex mb-5  items-center justify-center lg:justify-start gap-3  lg:gap-2'>
                    {annualType === 'monthly' ?
                      <Button
                        onClick={() => setAnnualType('yearly')}
                        className='text-[12px] lg:text-[14px] flex  justify-center  items-center gap-2 bg-[#131316] font-medium text-white py-[8px] px-4 lg:px-5 rounded-[6px] relative'>
                        Get 2 months free (switch to yearly)
                      </Button>
                      :
                      <Button
                        onClick={() => setAnnualType('monthly')}
                        className='text-[12px] lg:text-[14px] flex  justify-center  items-center gap-2 bg-[#131316] font-medium text-white py-[8px] px-4 lg:px-5 rounded-[6px] relative'>
                        switch to monthly
                      </Button>
                    }
                    <Link
                      href={'#'}
                      className='text-[12px] lg:text-[14px] flex items-center gap-2  font-medium text-[#6B7280]  py-[6px] px-0 lg:px-8 rounded-[6px] relative'>
                      Compare
                      <div className='w-[16px]'>
                        <Image
                          width={166}
                          height={126}
                          alt=''
                          src={'/home/rar.png'}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className=' w-full'>
                    {vpsAll?.map((item, ind) =>
                      <div
                        key={ind}
                        onClick={() => setActive(item?.pid)}
                        className={`${
                          active === item?.pid
                            ? 'border border-[#0070F3] bg-[#0070F3] bg-opacity-[2.5%]'
                            : 'border bg-white'
                        } mt-4 rounded-[12px] cursor-pointer justify-between  shadow-md flex  lg:gap-0 items-center px-[10px] lg:px-[30px] py-[10px] lg:py-[18px]`}>
                        <div className='flex  items-end '>
                          <h1 className='text-[20px] font-semibold leading-[22px] text-main'>
                            $
                            {annualType === 'yearly'
                              ? item?.pricing * 10
                              : item?.pricing}{' '}
                          </h1>
                          <p className='text-[13px] text-body'>
                            {' '}
                            {annualType === 'yearly' ? '/yr' : '/mo'}
                          </p>
                        </div>
                        <div
                          className='flex items-center text-[13px]
                 gap-3 lg:gap-4'>
                          <p className='text-[12px] font-medium text-center lg:text-left'>
                            {' '}
                            {item?.description?.CPU?.slice(0, 3)}{' '}
                            <br className='lg:hidden' />
                            <span className='text-body font-normal'>CPU</span>
                          </p>{' '}
                          |{' '}
                          <p className='text-[12px] font-medium text-center lg:text-left'>
                            {' '}
                            {item?.description?.RAM?.slice(0, 4)}{' '}
                            <br className='lg:hidden' />
                            <span className='text-body text-nowrap font-normal'>
                              {' '}
                              DDR4 RAM
                            </span>
                          </p>{' '}
                          |{' '}
                          <p className='text-[12px] font-medium text-center lg:text-left'>
                            {item?.description?.storage?.slice(0, 5)}{' '}
                            <br className='lg:hidden' />
                            <span className='text-body text-nowrap font-normal'>
                              {' '}
                              NVMe Storage
                            </span>
                          </p>
                        </div>
                        <div className=' lg:hidden'>
                          {active === item?.pid ?
                            <div className='w-[17px] cursor-pointer'>
                              <Image
                                width={166}
                                height={126}
                                alt=''
                                src={'/home/tik.png'}
                              />
                            </div>
                            :
                            <div className='w-[17px] cursor-pointer'>
                              <Image
                                width={166}
                                height={126}
                                alt=''
                                src={'/home/circle.png'}
                              />
                            </div>
                          }
                        </div>

                        <div className=' hidden lg:block'>
                          {active === item?.pid ?
                            <div className='w-[17px] cursor-pointer'>
                              <Image
                                width={166}
                                height={126}
                                alt=''
                                src={'/home/tik.png'}
                              />
                            </div>
                            :
                            <div className='w-[17px] cursor-pointer'>
                              <Image
                                width={166}
                                height={126}
                                alt=''
                                src={'/home/circle.png'}
                              />
                            </div>
                          }
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className=' lg:col-span-3 bg-white p-6 rounded-[12px] relative border shadow-md'>
                  <Link href={'/'} className='flex items-center gap-[5px]'>
                    <div className='w-[36px]'>
                      <Image
                        width={137}
                        height={137}
                        alt=''
                        src={'/logo.png'}
                      />
                    </div>
                    <div>
                      <p className='font-semibold leading-[18px] text-[16px] f_bold'>
                        Virtual Private Servers (VPS)
                      </p>
                      <p className='text-[#262626] opacity-40  text-[12px]'>
                        By <span className=' font-semibold'>QuantVPS.com</span>
                      </p>
                    </div>
                  </Link>
                  <DescriptionComponent
                    description={selectedList?.description}
                  />
                  <>
                    {isSignedIn ?
                      <Link href='/dashboard/order-new-server'>
                        <Button className='text-[14px] mt-6 w-full  justify-between flex items-center gap-2 bg-[#131316] font-medium text-white py-[10px] px-3 rounded-[6px] relative'>
                          Deploy Server
                          <div className='w-[18px]'>
                            <Image
                              width={166}
                              height={126}
                              alt=''
                              src={'/home/wa.png'}
                            />
                          </div>
                        </Button>
                      </Link>
                      :
                      <>
                        <Button
                          onClick={() => {
                            setSelectedServer(active)
                            setOpen(true)
                          }}
                          className='text-[14px] hidden hover:bottom-[3px] bottom-0 duration-150 transition-all ease-linear lg:flex mt-6 w-full justify-between  items-center gap-2 bg-[#131316] font-medium text-white py-[10px] px-3 rounded-[6px] relative'>
                          Deploy Server
                          <div className='w-[18px]'>
                            <Image
                              width={166}
                              height={126}
                              alt=''
                              src={'/home/wa.png'}
                            />
                          </div>
                        </Button>
                        <Button
                          onClick={() => {
                            setSelectedServer(active)
                            setOpen2(true)
                          }}
                          className='text-[14px] sticky bottom-0 lg:hidden flex mt-6 w-full justify-between  items-center gap-2 bg-[#131316] font-medium text-white py-[10px] px-3 rounded-[6px] '>
                          Deploy Server
                          <div className='w-[18px]'>
                            <Image
                              width={166}
                              height={126}
                              alt=''
                              src={'/home/wa.png'}
                            />
                          </div>
                        </Button>
                      </>
                    }
                  </>
                </div>
              </div>
            </div>
            :
            <div className='w-full mt-3 grid grid-cols-1 gap-6 lg:grid-cols-6'>
              <div className=' lg:col-span-4'>
                <div className='flex mb-5 items-center gap-2'>
                  <Skeleton className={' py-[20px]  w-[300px]'} />
                  <Skeleton className={' py-[20px] w-[150px]'} />
                </div>
                <div className=' w-full'>
                  <Skeleton className={' py-[35px]  w-full'} />
                  <Skeleton className={' py-[35px] mt-4  w-full'} />
                  <Skeleton className={' py-[35px] mt-4  w-full'} />
                  <Skeleton className={' py-[35px] mt-4  w-full'} />
                </div>
              </div>
              <div className=' lg:col-span-2 w-full h-full'>
                <Skeleton className={' py-[28px] h-full  w-full'} />
              </div>
            </div>
          }
          <p className='text-center text-[14px] text-[#6B7280] mt-5'>
            *All pricing is in USD and renews automatically unless cancelled.{' '}
          </p>
        </div>
      </div>
      <div
        id='compatibility'
        className='max-w-[851px] py-5 px-5 lg:py-3 lg:px-0 mx-auto pt-[40px]'>
        <div className='flex mt-3 items-center gap-2'>
          <div className='w-[17px]'>
            <Image width={166} height={126} alt='' src={'/home/low.png'} />
          </div>
          <p className='text-[14px] text-body'>Low Latency to Brokers</p>
        </div>
        <div className='flex flex-wrap items-center mt-2 gap-3 lg:gap-9'>
          <h1 className='text-[24px] leading-[28px] font-semibold'>
            NinjaTrader, MetaTrader, and more. <br />{' '}
            <span className='text-body font-normal'>
              QuantVPS is optimized for all brokers.
            </span>
          </h1>
          <Link href='#features'>
            <Button className='bg-main text-[14px] text-white px-4 py-2 rounded-[5px]'>
              See Features
            </Button>
          </Link>
        </div>
        <div className='lg:w-[851px] my-10'>
          <Image width={1066} height={1206} alt='' src={'/ninja.png'} />
        </div>
      </div>
      <p className='text-center text-[14px] pb-[40px] text-[#6B7280] mt-5'>
        ▲ connect to your server from any device, anywhere in the world{' '}
      </p>
      <div id='features' className=' relative border-t'>
        <div className='border-[#0000000b] border-r lg:border-b w-full grid grid-cols-1 lg:grid-cols-2'>
          <div className='p-[30px] border-r h-full '>
            <div className='flex items-center gap-1'>
              <div className='w-[18px]'>
                <Image
                  alt='refresh'
                  width={100}
                  className='w-full'
                  height={100}
                  src={'/auto.png'}
                />
              </div>
              <p className='text-[#666] text-[16px]'>Automatic Backups</p>
            </div>
            <h3 className='text-[#171717] my-2 text-[24px] leading-[32px] font-semibold'>
              Go ahead, trade.
              <span className='text-[#666] font-light'>
                Your server will automatically backup every 72 hours.
              </span>{' '}
            </h3>
            <Image
              alt='secure storage'
              width={1600}
              className=' object-cover'
              height={1000}
              src={'/mb.png'}
            />
          </div>
          <div className='p-[30px]  '>
            <div className='flex items-center gap-1'>
              <div className='w-[18px]'>
                <Image
                  alt='power button'
                  width={100}
                  className='w-full'
                  height={100}
                  src={'/like.png'}
                />
              </div>
              <p className='text-[#666] text-[16px]'>Reliability</p>
            </div>
            <h3 className='text-[#171717] my-2 text-[24px] leading-[32px] font-semibold'>
              100% uptime, guaranteed.
              <span className='text-[#666] font-light'>
                Rely on our redundant infrastructure.
              </span>{' '}
            </h3>
            <div className='mt-8 w-full rounded-[20px] pb-[55px] pt-[24px] px-[46px] bg-black'>
              <div className='flex items-center justify-center gap-1'>
                <h1 className='text-[18px] gradient2-text'>Monitor </h1>
                <h1 className='text-[18px] gradient-text'>Performance </h1>
              </div>
              <div className='mt-[40px] flex items-center justify-center'>
                <div className='rounded-[8px] flex items-center justify-center w-[145px] border border-white  border-opacity-10 py-2 gradient2-text text-[18px]'>
                  {countNum.toLocaleString()} MB/s
                </div>
              </div>
              <div className='mt-5 flex items-center justify-center gap-6'>
                <div>
                  <h1 className=' gradient2-text text-[18px]'>1Gbps+</h1>
                  <div className='mt-1 flex items-center gap-1'>
                    <p className='text-[12px] text-[#C7C3D2]'>Download MB/s</p>
                    <div className='w-[10px]'>
                      <Image
                        alt='arrow down'
                        width={100}
                        className='w-full'
                        height={100}
                        src={'/down.svg'}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className=' gradient2-text text-[18px]'>1Gbps+</h1>
                  <div className='mt-1 flex items-center gap-1'>
                    <p className='text-[12px] text-[#C7C3D2]'>Upload MB/s</p>
                    <div className='w-[10px]'>
                      <Image
                        alt='arrow up'
                        width={100}
                        className='w-full'
                        height={100}
                        src={'/up.svg'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:col-span-2 border-t relative   w-full '>
            <div className=' absolute z-10 w-full h-full  grid-cols-3 hidden lg:grid'>
              <div className=' h-full '></div>
              <div className=' h-full border-r border-dashed'></div>
            </div>
            <div className=' relative grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0  z-20 py-[40px] '>
              <div className=' lg:col-span-2 px-[40px]'>
                <h1 className=' mb-6 tracking-[-0.96px] text-left text-[20px]  lg:text-[24px] leading-[24px] lg:leading-[32px] text-[#171717] font-semibold'>
                  Ready to trade?{' '}
                  <span className='text-[#666] font-normal'>
                    Use our servers.
                    <br /> Check out the{' '}
                    <Link
                      // href={"/tradervue"}
                      href={'/login'}
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
                <div className='mt-8 flex items-center flex-wrap gap-3'>
                  <Link
                    href={
                      isSignedIn ? '/dashboard/order-new-server' : '#pricing'
                    }>
                    <Button className='py-[8px] px-[15px] font-medium bg-[#171717] rounded-[6px] text-[14px] text-white'>
                      Deploy Now
                    </Button>
                  </Link>
                  <button className='py-[8px] px-[15px] font-medium bg-white border rounded-[6px] text-[14px] text-[#171717]'>
                    View Dedicated Servers
                  </button>
                </div>
              </div>
              <div className='px-[40px]'>
                <h1 className='text-[#666] text-[16px] leading-[24px]'>
                  <span className='text-[#171717] font-semibold'>
                    {' '}
                    Trial QuantVPS
                  </span>{' '}
                  to see how our performance and ease of use through our Control
                  Panel.
                </h1>
                <button className='py-[8px] mt-6 px-[15px] font-medium bg-white border rounded-[6px] text-[14px] text-[#171717]'>
                  Money Back Guarantee
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DescriptionComponent = ({ description }) => {
  const cleanedDescription = description
    ?.replace(/\./g, '')
    .replace(/<b>/g, '')
    .replace(/<\/b>/g, '')

  // Split the cleaned description into an array of lines
  const lines = cleanedDescription?.split('\r\n')
  return (
    <div className='mt-8'>
      {lines?.map((item, ind) =>
        <div key={ind} className='flex py-[5px] items-center gap-2'>
          <div className='w-[14px]'>
            <Image
              width={166}
              height={126}
              alt=''
              src={`/home/span.fa-li-${ind + 2}.png`}
            />
          </div>
          <p className='text-[#4B5563] text-[12px]'>{item?.slice(1)}</p>
        </div>
      )}
      <div className='flex py-[5px] items-center gap-2'>
        <div className='w-[14px]'>
          <Image
            width={166}
            height={126}
            alt=''
            src={'/home/span.fa-li-4.png'}
          />
        </div>
        <p className='text-[#4B5563] text-[12px]'>
          Chicago & New York data centers
        </p>
      </div>
      <div className='flex py-[5px] items-center gap-2'>
        <div className='w-[14px]'>
          <Image
            width={166}
            height={126}
            alt=''
            src={'/home/span.fa-li-2.png'}
          />
        </div>
        <p className='text-[#4B5563] text-[12px]'>
          Windows or Linux Operating System
        </p>
      </div>
    </div>
  )
}
export default HomeHero
