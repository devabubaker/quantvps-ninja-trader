import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Skeleton from '../global/Skeleton'
const Professional = ({
  mainVpServers,
  setOpen,
  setSelectedServer,
  setOpen2
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
  return (
    <div className='pb-[30px] lg:py-[30px] p-5 lg:px-6 lg:p-0'>
      <div className=' max-w-[1216px] mx-auto'>
        <p className='text-[#6C47FF] text-[13px]'>Features & more</p>
        <h1 className='text-main text-[32px] mt-3 font-semibold'>
          Professional traders trust QuantVPS
        </h1>
        <p className='max-w-[790px] text-[15px] text-[#5E5F6E]'>
          QuantVPS is the ultimate solution for traders who need access to high
          performance servers for algorithmic execution across a variety of
          trading platforms. From manual trade execution to implementation of
          automated trading systems, our infrastructure is optimized for your
          performance. We provide ultra-low, 0-1ms latency networking and
          state-of-the-art server infrastructure. We ensure high capacity and
          high performance trading operations for all clients.
        </p>
        <div className='grid mt-5 grid-cols-1 gap-3 lg:grid-cols-3'>
          <div className='border bg-white shadow-md rounded-[16px] p-5'>
            <p className='text-[13px] font-medium'>Broker Compatibility</p>
            <p className='text-[#5E5F6E] text-[13px] mt-2'>
              Download your desired trading software in <br /> minutes and start
              trading.
            </p>
            <div className='flex items-center justify-center'>
              <div className='w-[306px]'>
                <Image
                  alt='broker'
                  width={600}
                  className=' object-cover mt-8'
                  height={500}
                  src={'/home/broker.png'}
                />
              </div>
            </div>
            <div className='flex items-center justify-center pb-3 gap-3'>
              <p className='text-[11px] text-[#B7B8C2]'>TradeStation</p>
              <p className='border px-3 py-2 bg-[#FAFAFB] text-[11px] text-[#B7B8C2] rounded-[23px]'>
                NinjaTrader
              </p>
              <p className='text-[11px] text-[#B7B8C2]'>Thinkorswim</p>
            </div>
          </div>
          <div className=''>
            <div className='w-full border relative shadow-md rounded-[16px]'>
              <Image
                alt='network'
                width={800}
                className=' object-cover '
                height={800}
                src={'/home/br2.png'}
              />
              <div className=' absolute bottom-0 left-0 w-full p-5 z-10'>
                <p className='text-[13px] font-medium'>
                  Easy access, from any device
                </p>
                <p className='text-[#5E5F6E] text-[13px] mt-1'>
                  You can securely and remotely access your server from your
                  desktop computer, mobile phone, or tablet.
                </p>
              </div>
            </div>
            <div className='border bg-white relative  rounded-[16px] shadow-md p-5 w-full mt-3'>
              <div className=' flex items-center mt-[50px] justify-center'>
                {mainVpServers?.length > 0 ?
                  <>
                    <button
                      onClick={() => {
                        setSelectedServer(active)
                        setOpen(true)
                      }}
                      className='text-[12px] hidden lg:flex items-center gap-2 bg-[#131316] font-medium text-white py-[6px] px-3 rounded-[6px] relative'>
                      <div className='w-[14px]'>
                        <Image
                          width={166}
                          height={126}
                          alt=''
                          src={'/deploy.png'}
                        />
                      </div>
                      Deploy Server
                    </button>
                    <button
                      onClick={() => {
                        setSelectedServer(active)
                        setOpen2(true)
                      }}
                      className='text-[12px] flex lg:hidden items-center gap-2 bg-[#131316] font-medium text-white py-[6px] px-3 rounded-[6px] relative'>
                      <div className='w-[14px]'>
                        <Image
                          width={166}
                          height={126}
                          alt=''
                          src={'/deploy.png'}
                        />
                      </div>
                      Deploy Server
                    </button>
                  </>
                  :
                  <Skeleton className={'w-[126px] h-[35px]'} />
                }
              </div>
              <div className='  w-full mt-[68px]'>
                <p className='text-[13px] font-medium'>
                  Deploy Servers Instantly
                </p>
                <p className='text-[#5E5F6E] text-[13px] mt-1'>
                  Launch new servers at the click of a button. Your server is
                  activated within minutes, 24/7.
                </p>
              </div>
            </div>
          </div>
          <div className='border bg-white shadow-md rounded-[16px] p-5'>
            <p className='text-[13px] font-medium'>Cutting-Edge Technology</p>
            <p className='text-[#5E5F6E] text-[13px] mt-2'>
              Built for trading global equities, futures, forex, and crypto on
              platforms like TradeStation and NinjaTtrader.
            </p>
            <div className='flex items-center justify-center mt-[30px]'>
              <div className='flex cursor-pointer border px-3 py-[5px] bg-white rounded-[8px] shadow-sm items-center gap-2'>
                <div className='w-[16px]'>
                  <Image
                    alt='logo small'
                    width={100}
                    className=' object-cover '
                    height={100}
                    src={'/operating.png'}
                  />
                </div>
                <p className='text-[11px] font-semibold'>Operating Systems</p>
                <div className='w-[9px] ml-1'>
                  <Image
                    alt='arrow down'
                    width={100}
                    className=' object-cover '
                    height={100}
                    src={'/arb.png'}
                  />
                </div>
              </div>
            </div>
            <div className='bg-white mx-auto overflow-hidden  mt-5 max-w-[304px] rounded-[12px] border shadow-md'>
              <div className=' bg-white shadow-md rounded-b-[12px]   '>
                <div className='px-4 border-b py-3 flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='p-1 border rounded-[6px]'>
                      <div className='w-[32px]'>
                        <Image
                          alt='windows'
                          width={100}
                          className=' object-cover '
                          height={100}
                          src={'/windows.png'}
                        />
                      </div>
                    </div>
                    <div>
                      <p className='text-[11px] text-main'>Windows VPS</p>
                      <p className='text-[#9394A1] text-[11px] pt-1'>
                        Starting at $47/mo
                      </p>
                    </div>
                  </div>
                  <div className='p-2 border cursor-pointer rounded-[6px]'>
                    <div className='w-[10px]'>
                      <Image
                        alt='arrow up'
                        width={100}
                        className=' object-cover '
                        height={100}
                        src={'/arrup.png'}
                      />
                    </div>
                  </div>
                </div>
                <div className='px-4 border-b py-3 flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='p-1 border rounded-[6px]'>
                      <div className='w-[32px]'>
                        <Image
                          alt='ubuntu'
                          width={100}
                          className=' object-cover '
                          height={100}
                          src={'/ubun.png'}
                        />
                      </div>
                    </div>
                    <div>
                      <p className='text-[11px] text-main'>
                        Ubuntu 22.04 Linux VPS
                      </p>
                      <p className='text-[#9394A1] text-[11px] pt-1'>
                        Starting at $47/mo
                      </p>
                    </div>
                  </div>
                  <div className='p-2 border cursor-pointer rounded-[6px]'>
                    <div className='w-[10px]'>
                      <Image
                        alt='arrow up'
                        width={100}
                        className=' object-cover '
                        height={100}
                        src={'/arrup.png'}
                      />
                    </div>
                  </div>
                </div>
                <div className='px-4 border-b py-3 flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='p-1 border rounded-[6px]'>
                      <div className='w-[32px]'>
                        <Image
                          alt='logo white'
                          width={100}
                          className=' object-cover '
                          height={100}
                          src={'/dedi.png'}
                        />
                      </div>
                    </div>
                    <div>
                      <p className='text-[11px] text-main'>Dedicated Server</p>
                      <p className='text-[#9394A1] text-[11px] pt-1'>
                        Starting under $100/mo
                      </p>
                    </div>
                  </div>
                  <div className='p-2 border cursor-pointer rounded-[6px]'>
                    <div className='w-[10px]'>
                      <Image
                        alt='arrow up'
                        width={100}
                        className=' object-cover '
                        height={100}
                        src={'/arrup.png'}
                      />
                    </div>
                  </div>
                </div>
                <div className='px-4 cursor-pointer py-3 flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className=' rounded-[6px]'>
                      <div className='w-[36px]'>
                        <Image
                          alt='add'
                          width={100}
                          className=' object-cover '
                          height={100}
                          src={'/add.png'}
                        />
                      </div>
                    </div>
                    <div>
                      <p className='text-[11px] text-main'>
                        Custom needs? Contact us.
                      </p>
                    </div>
                  </div>
                  <div className='p-2 border cursor-pointer rounded-[6px]'>
                    <div className='w-[10px]'>
                      <Image
                        alt='arrow up'
                        width={100}
                        className=' object-cover '
                        height={100}
                        src={'/arrup.png'}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full   flex py-3 bg_sm_gradient relative items-center justify-center'>
                <p className='text-[#9394A1] text-[11px]'>Powered by</p>
                <div className='w-[30px]'>
                  <Image
                    alt='logo gray'
                    width={100}
                    className=' object-cover '
                    height={100}
                    src={'/dd.png'}
                  />
                </div>
                <p className='text-[#9394A1] text-[11px]'>QuantVPS.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Professional
