import React, { useContext } from 'react'
import Image from 'next/image'
import moment from 'moment'
import { MyContext } from '@/pages/_app'
import Skeleton from '../global/Skeleton'
const PlanSummary = ({ product }) => {
  const { currentServer } = useContext(MyContext)
  const uptime = time => {
    const uptimeDuration = moment.duration(time, 'seconds')
    // Calculate the start time of the uptime
    const currentTime = moment()
    // Calculate days and hours
    const days = uptimeDuration.days()
    const hours = uptimeDuration.hours()
    // Format the result
    const result = `${days} days, ${hours} hours`
    return result
  }
  // Function to calculate days left in the current billing cycle
  function calculateDaysLeftInCycle(nextBillingDate) {
    const endOfCycle = moment(nextBillingDate)
    const now = moment()
    return endOfCycle.diff(now, 'days')
  }
  return (
    <div className='bg-white shadow-sm border rounded-[6px] px-5 py-[20px]'>
      <h2 className='text-main font-semibold pb-2 text-[20px]'>Plan Summary</h2>
      {product ?
        <div className='w-full border  rounded-[8px] p-[16px]'>
          <div className='flex items-center gap-2'>
            <div className='w-[17px]'>
              <Image
                width={300}
                height={300}
                src={'/inter.svg'}
                className='object-cover'
                alt='logo small'
              />
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: `${currentServer?.dataWagan?.domain} - Server #${currentServer?.custom_id}`
              }}
              className='text-main text-[13px] font-semibold'
            />
          </div>
          <div className='flex items-center justify-between'>
            <div className='my-4 flex flex-wrap items-center gap-[8px]'>
              <div className='px-2 py-[2px] flex border rounded-full items-center gap-2'>
                <div className='w-[17px]'>
                  <Image
                    width={300}
                    height={300}
                    src={'/upt.svg'}
                    className='object-cover'
                    alt='uptime bar'
                  />
                </div>
                <p className=' font-semibold text-[12px] text-[#666666]'>
                  Uptime: {uptime(product?.vps?.data?.uptime)}
                </p>
              </div>
              <div className='px-2 pt-[2px] flex border rounded-full items-center gap-2'>
                <div className='w-[8px] h-[8px] rounded-full bg-[#50E3C2]'></div>
                <p className=' font-semibold text-[12px] text-[#666666]'>
                  {currentServer?.dataWagan?.dedicatedip ||
                    product?.billing?.dedicatedip}
                </p>
              </div>
              {/* <div className='px-2 py-[2px] flex border rounded-full items-center gap-2'>
                            <div className='w-[12px]'>
                                <Image width={300} height={300} src={'/vps.svg'} className='object-cover' />
                            </div>
                            <p className=' font-semibold text-[12px] text-[#666666]'>{currentServer?.ourServer?.plan_type}</p>
                        </div> */}
              <div className='px-2 py-[2px] flex border rounded-full items-center gap-2'>
                <div className='w-[14px]'>
                  <Image
                    width={300}
                    height={300}
                    src={'/loca.svg'}
                    className='object-cover'
                    alt='map pin'
                  />
                </div>
                <p className=' font-semibold text-[12px] text-[#666666]'>
                  {currentServer?.geo ||
                    product?.billing?.configoptions?.configoption?.filter(
                      it =>
                        it?.id === parseInt(currentServer?.ourServer?.location)
                    )?.[0]?.value}
                </p>
              </div>

              <div className='px-2 py-[2px] flex border rounded-full items-center gap-2'>
                <p className=' font-semibold text-[12px] text-[#666666]'>
                  Next Billing Date: {currentServer?.ourServer?.next_due}
                </p>
              </div>
              <div className='px-2 py-[2px] flex border rounded-full items-center gap-2'>
                <p className=' font-semibold text-[12px] text-[#666666]'>
                  Price: ${currentServer?.ourServer?.price}
                </p>
              </div>
            </div>
          </div>
          {/* <div className='py-[20px] flex-wrap  flex px-[20px] items-center gap-4 lg:gap-[40px]'>
                    <div>
                        <p className='text-[14px] text-[#52525A]'>Price/Month</p>
                        <h1 className='text-[20px] font-semibold text-black'>${currentServer?.ourServer?.price}</h1>
                    </div>
                    <div>
                        <p className='text-[14px] text-[#52525A]'>Days left in cycle</p>
                        <h1 className='text-[20px] font-semibold text-black'>{calculateDaysLeftInCycle(currentServer?.ourServer?.next_due)} days</h1>
                    </div>

                </div> */}
        </div>
        :
        <Skeleton className={'h-[199px]'} />
      }
    </div>
  )
}

export default PlanSummary
