import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'
const ActiveServices = ({ activeServers }) => {
  return (
    <div className='mx-auto min-h-screen  pb-8 mt-8'>
      <p className='text-main text-[14px] font-semibold  my-5'>
        Active Services
      </p>
      {activeServers?.map((item, ind) =>
        <div key={ind}>
          {item?.dataWagan?.dedicatedip ?
            <Link
              href={`/dashboard/control-panel?server=${item?.dataWagan?.id}`}>
              <ActiveRow item={item} ind={ind} />
            </Link>
            :
            <ActiveRow item={item} ind={ind} />
          }
        </div>
      )}
    </div>
  )
}

const ActiveRow = ({ item, ind }) => {
  // Function to calculate days left in the current billing cycle
  function calculateDaysLeftInCycle(nextBillingDate) {
    const endOfCycle = moment(nextBillingDate)
    const now = moment()
    return endOfCycle.diff(now, 'days')
  }
  return (
    <div className='mt-5 relative pc1 pb-6 overflow-hidden'>
      <div className=' relative bg-white c1  transition-all duration-200 hover:border-blue-500 border rounded-[8px] p-4'>
        <div className='flex items-center justify-between'>
          <div className='px-[15px] py-[8px] bg-[#FAFAFA] text-main text-[13px] font-semibold rounded-[31px] flex items-center gap-2'>
            <div className='w-[17px]'>
              <Image
                alt='active'
                width={300}
                height={300}
                src={'/active.svg'}
                className='w-full object-cover'
              />
            </div>
            {item?.ourServer?.domain} - Server #{item?.custom_id}
          </div>
          {/* <div className="w-[16px] cursor-pointer">
          <Image
            width={300}
            height={300}
            src={"/three.svg"}
            className="w-full object-cover"
          />
        </div> */}
        </div>
        <div className='my-4 flex flex-wrap items-center gap-[8px]'>
          <div className='px-2 py-[2px] flex border rounded-full items-center gap-2'>
            <div className='w-[17px]'>
              <Image
                alt='uptime/status'
                width={300}
                height={300}
                src={'/upt.svg'}
                className='object-cover'
              />
            </div>
            <p className=' text-[12px] text-[#666666]'>
              Status: {item?.dataWagan?.status}
            </p>
          </div>
          <div className='px-2 py-[2px] flex border rounded-full items-center gap-2'>
            {item?.dataWagan?.dedicatedip ?
              <div className='w-[8px] h-[8px] rounded-full bg-[#50E3C2]'></div>
              :
              <div className='w-[8px] h-[8px] my-[6px] rounded-full bg-red-500'></div>
            }
            {item?.dataWagan?.dedicatedip &&
              <p className=' text-[12px] text-[#666666]'>
                {item?.dataWagan?.dedicatedip}
              </p>
            }
          </div>
          {/* <div className="px-2 py-[2px] flex border rounded-full items-center gap-2">
          <div className="w-[12px]">
            <Image
              width={300}
              height={300}
              src={"/vps.svg"}
              className="object-cover"
            />
          </div>
          <p className=" text-[12px] text-[#666666]">
            {item?.ourServer?.plan_type}
          </p>
        </div> */}
          <div className='px-2 py-[2px] flex border rounded-full items-center gap-2'>
            {/* <div className="w-[14px]">
            <Image
              width={300}
              height={300}
              src={"/loca.svg"}
              className="object-cover"
            />
          </div> */}
            <p className=' text-[12px] text-[#666666]'>
              Location:{' '}
              {item.geo ||
                item?.dataWagan?.configoptions?.configoption?.filter(
                  it => it?.id === parseInt(item?.ourServer?.location)
                )?.[0]?.value}
            </p>
          </div>

          {item?.dataWagan?.dedicatedip &&
            <div className='px-2 py-[2px] flex border rounded-full items-center gap-2'>
              <p className=' text-[12px] text-[#666666]'>
                Next Billing Date: {item?.ourServer?.next_due}
              </p>
            </div>
          }
          <div className='px-2 py-[2px] flex border rounded-full items-center gap-2'>
            <p className=' text-[12px] text-[#666666]'>
              Price: ${item?.ourServer?.price}
            </p>
          </div>
          {/* {item?.dataWagan?.dedicatedip && <div className="px-2 py-[2px] flex border rounded-full items-center gap-2">
          <p className=" text-[12px] text-[#666666]">
            Days left in cycle: {calculateDaysLeftInCycle(item?.ourServer?.next_due)}
          </p>
        </div>} */}
        </div>
      </div>
      <p className='text-[12px] absolute c2 left-0 z-30 bottom-[5px] text-main'>
        Updated (1) Day(s) Ago
      </p>
      <p className='flex absolute c3  right-0 z-30 bottom-[5px] items-center text-[12px] gap-1'>
        Go to server{' '}
        <svg
          viewBox='0 0 15 15'
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4 fill-black'>
          <path d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'></path>
        </svg>
      </p>
    </div>
  )
}
export default ActiveServices
