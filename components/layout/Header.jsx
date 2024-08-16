import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { useClerk } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import { MyContext } from '../../pages/_app'
import { Button } from '@/components/ui/button'
import { ChevronRight, Check, FileText, Shield } from 'lucide-react'
import { HiMiniBars3 } from 'react-icons/hi2'
import { FaSignal } from 'react-icons/fa6'

import { CreditCard, LogOut, Settings } from 'lucide-react'

import { measureLatency } from '../../util/latency'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
// import { readNotification } from "../../lib/readNofication";
// import { getNotification } from "../../lib/getNotification";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { shutdown } from '@intercom/messenger-js-sdk'

const Header = () => {
  const router = useRouter()
  const { signOut } = useClerk()
  const allNofication = []
  const { allMySevers, currentServer, thisUser } = useContext(MyContext)
  const readAllNofication = async () => {}

  function timeAgo(timestamp) {
    const [dateStr, timeStr] = timestamp.split(' ')
    const [month, day, year] = dateStr.split('/')
    const [hour, minute] = timeStr.split(':')

    const ts = new Date(year, month - 1, day, hour, minute).getTime() // Month is 0-indexed in JavaScript
    const seconds = Math.floor((Date.now() - ts) / 1000)
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1
    }

    for (let interval in intervals) {
      const timeDiff = Math.floor(seconds / intervals[interval])
      if (timeDiff >= 1) {
        return timeDiff === 1
          ? `${timeDiff} ${interval} ago`
          : `${timeDiff} ${interval}s ago`
      }
    }
    return 'Just now'
  }

  const [latency, setLatency] = useState(null)

  useEffect(() => {
    const getLatency = async () => {
      const latency = await measureLatency()
      setLatency(latency)
    }

    getLatency()
    const intervalId = setInterval(getLatency, 10000) // Measure latency every 5 seconds

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <div className='w-full px-[10px] sticky lg:relative top-0 bg-white
      z-[40] py-[12px] flex items-center justify-between'>
        <div className='flex items-center gap-[5px] lg:gap-[22px]'>
          <Link
            href={'/'}
            className='flex items-center gap-1  lg:gap-2'>
            <div className='w-[37px]'>
              <Image
                alt='logo'
                width={300}
                height={300}
                src={'/logo.png'}
                className='w-full object-cover'
              />
            </div>
            <div>
              <h6 className='text-[#09090B] text-[12px] lg:text-[16px] font-semibold'>
                Trading Servers
              </h6>
              <p className='text-[10px] lg:text-[12px] opacity-40 text-[#262626]'>
                By <span className='f_bold'>QuantVPS.com</span>
              </p>
            </div>
          </Link>
          {/* <Badge className="bg-[#ADFA1E] opacity-70 hidden lg:block shadow-none text-main hover:bg-[#adf32b]">
            BETA
          </Badge> */}
          {/* <div className="flex cursor-pointer  items-center gap-[12px]">
            <p className="text-[14px] text-[#171717] text-nowrap lg:font-semibold ">
              User Dashboard
            </p>

          </div> */}
          {allMySevers?.length > 0 &&
            <div className='w-[10px]'>
              <Image
                alt='beta'
                width={300}
                height={300}
                src={'/bet.svg'}
                className='object-cover'
              />
            </div>
          }
          {allMySevers?.length > 0 &&
            currentServer?.ourServer?.status === 'active' &&
              <div className='flex  items-center gap-[6px] lg:gap-[12px]'>
                <p className='text-[14px] hidden lg:inline-flex text-[#171717] text-nowrap lg:font-semibold '>
                  {currentServer?.ourServer?.domain} #{currentServer?.custom_id}{' '}
                </p>
                <p className='text-[14px] lg:hidden text-[#171717] text-nowrap lg:font-semibold '>
                  {currentServer?.ourServer?.domain?.slice(0, 10)}.. #
                  {currentServer?.custom_id}{' '}
                </p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className='px-2 py-2 cursor-pointer rounded-[4px]
                    transition-all ease-linearduration-200 hover:bg-gray-100'>
                      <div className='w-[11px] cursor-pointer'>
                        <Image
                          alt='updown arrows'
                          width={300}
                          height={300}
                          src={'/ud.png'}
                          className='object-cover'
                        />
                      </div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='absolute min-w-[220px] -right-[10px]'>
                    {allMySevers
                      ?.filter(server => server?.dataWagan?.dedicatedip)
                      ?.map((item, ind) =>
                        <DropdownMenuItem key={ind}>
                          <Link
                            href={`/dashboard/control-panel?server=${item?.dataWagan?.id}`}>
                            <div className='flex cursor-pointer items-center gap-2 px-4 '>
                              <p className='text-[14px] text-[#171717] text-nowrap lg:font-semibold '>
                                {item?.ourServer?.domain} #{item?.custom_id}
                              </p>
                              <div className='px-[12px] hidden lg:flex text-[9px] lg:text-[11px]
                              py-[5px] text-[#F8089B] bg-[#EBF5FF] rounded-[100px]
                              items-center text-nowrap gap-2 font-semibold'>
                                {' '}
                                <div className='w-[8px] h-[8px] rounded-full bg-[#50E3C2]'></div>{' '}
                                {item?.ourServer?.plan_type}
                              </div>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      )}
                    <DropdownMenuItem>
                      <Link
                        className='w-full'
                        href={'/dashboard/order-new-server'}>
                        <Button className=' bg-main w-full px-[14px] py-[8px]
                        rounded-[6px] text-white flex items-center gap-2'>
                          Deploy New Server{' '}
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <mask
                              id='mask0_491_2270'
                              style={{ maskType: 'luminance' }}
                              maskUnits='userSpaceOnUse'
                              x='0'
                              y='1'
                              width='16'
                              height='13'>
                              <path
                                d='M16 1.26172H0V13.9304H16V1.26172Z'
                                fill='white'
                              />
                            </mask>
                            <g mask='url(#mask0_491_2270)'>
                              <path
                                d='M14.2491 11.0487V9.29688H13.0956V11.0487H11.3438V12.0909H13.0956V13.8427H14.2491V12.0909H16.0003V11.0487H14.2491Z'
                                fill='white'
                              />
                              <path
                                d='M4.36821 9.90112C4.33587 9.87182 3.90927 9.43842 3.90927 9.43842C3.84149 9.41478 3.77184 9.40234 3.70158 9.40234C3.69162 9.40234 3.68229 9.40234 3.67297 9.40297C3.42609 9.41292 3.07598 9.4608 2.80547 9.63492C1.66931 10.3706 1.21224 11.6734 0.851562 12.957C2.26692 12.5925 3.20035 12.118 3.87072 11.4234C4.21959 11.0621 4.44719 10.712 4.42605 10.1766C4.42232 10.0802 4.40242 9.98752 4.36821 9.90112Z'
                                fill='white'
                              />
                              <path
                                d='M12.6438 2.95506L10.9511 1.26172L7.67632 1.50611L4.5757 4.60611L4.56512 4.61669L4.5502 4.61918L0 5.35111L2.42279 7.77328L2.92402 7.27144L2.95698 7.23848L2.98994 7.27144L6.63407 10.9156L6.66703 10.9485L6.63407 10.9815L6.12041 11.4946L8.55629 13.9304L9.27453 9.36837L9.27697 9.35282L12.3994 6.23043L12.6438 2.95506ZM11.729 3.31636L11.5418 5.81938L11.5406 5.83679L11.5288 5.84923L7.20867 10.1699L7.17571 10.2029L7.14275 10.1699L3.73741 6.76462L3.70445 6.73166L3.73741 6.6987L8.05752 2.37797L8.06996 2.36616L8.08675 2.36429L10.5904 2.17773L10.6115 2.17587L10.6264 2.19079L11.716 3.27967L11.7309 3.29522L11.729 3.31636Z'
                                fill='white'
                              />
                              <path
                                d='M8.58726 4.17969C7.95977 4.17969 7.44922 4.69024 7.44922 5.3177C7.44922 5.94517 7.95977 6.45572 8.58726 6.45572C9.21471 6.45572 9.72528 5.94517 9.72528 5.3177C9.72528 4.69024 9.21471 4.17969 8.58726 4.17969Z'
                                fill='white'
                              />
                            </g>
                          </svg>
                        </Button>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
          }
        </div>
        <div className='flex items-center gap-[8px]'>
          {latency !== null &&
            <div className=' bg-gray-100 px-3 py-2 flex text-[12px] rounded-[24px] items-center gap-2 relative group'>
              <FaSignal />
              {latency}ms
              {/*  */}
              <div className='absolute bottom-[-100px] flex flex-col
              items-center hidden mb-5 group-hover:flex w-[300px] right-0'>
                <div className='w-3 h-3 rotate-45 bg-[#EDEEEF] ml-auto relative right-4 top-2' />
                <span className='relative rounded-md z-10 p-4 text-xs leading-none
                text-gray-800 whitespace-no-wrap bg-[#EDEEEF] shadow-lg'>
                  This is the latency you would experience executing from your
                  own home computer, get QuantVPS!
                </span>
              </div>
              {/*  */}
            </div>
          }
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='rounded-full  relative'>
                {' '}
                <div className='w-[15px]'>
                  {parseInt(thisUser?.metadata?.unread_log) > 0 &&
                    <div className='absolute h-[9px] w-[9px] bg-[#0068D6] rounded-full -top-[0px] -right-[0px]'></div>
                  }
                  <Image
                    alt='bell'
                    width={300}
                    height={300}
                    src={'/bell.svg'}
                    className='object-cover'
                  />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='absolute -right-[20px] lg:-right-[10px]'>
              <Card className='w-[290px] lg:w-[380px] border-none outline-none shadow-none'>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>

                  <CardDescription>
                    You have {thisUser?.metadata?.unread_log} unread messages.
                  </CardDescription>
                </CardHeader>

                {thisUser?.unread_log > 0 ?
                  <CardContent className='grid  gap-4'>
                    <div className='max-h-[350px] overflow-y-auto'>
                      {allNofication
                        ?.slice(0, thisUser?.unread_log)
                        ?.map((notification, index) =>
                          <div
                            key={index}
                            className='mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0'>
                            <span className='flex h-2 w-2 translate-y-1 rounded-full bg-sky-500' />

                            <div className='space-y-1'>
                              <p className='text-sm font-medium capitalize leading-none'>
                                {notification?.log_text?.slice(17, 500)}
                              </p>

                              <p className='text-sm text-muted-foreground'>
                                {timeAgo(notification?.log_text?.slice(0, 17))}
                              </p>
                            </div>
                          </div>
                        )}
                    </div>
                  </CardContent>
                  :
                  <CardContent className='grid  gap-4'>
                    <div className='max-h-[350px] overflow-y-auto'>
                      {allNofication?.map((notification, index) =>
                        <div
                          key={index}
                          className='mb-4  pb-4 last:mb-0 last:pb-0'>
                          <div className='space-y-1'>
                            <p className='text-sm font-medium capitalize leading-none'>
                              {notification?.log_text?.slice(17, 500)}
                            </p>

                            <p className='text-sm text-muted-foreground'>
                              {timeAgo(notification?.log_text?.slice(0, 17))}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                }

                {parseInt(thisUser?.metadata?.unread_log) > 0 &&
                  <CardFooter>
                    <Button onClick={readAllNofication} className='w-full'>
                      <Check className='mr-2 h-4 w-4' /> Mark all as read
                    </Button>
                  </CardFooter>
                }
              </Card>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='rounded-full  relative'>
                <HiMiniBars3 className='w-5 h-5' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56 absolute -right-[10px]'>
              <DropdownMenuLabel className='text-main'>
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href='/dashboard/billing'>
                  <DropdownMenuItem className=' cursor-pointer'>
                    <CreditCard color='#171717' className='mr-2 h-4 w-4' />
                    <span className='text-main'>Billing</span>
                    {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                </Link>
                <Link href='/dashboard/account'>
                  <DropdownMenuItem className=' cursor-pointer'>
                    <Settings color='#171717' className='mr-2 h-4 w-4' />
                    <span className='text-main'>Account Settings</span>
                    {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                </Link>
                <Link href='/dashboard/support'>
                  <DropdownMenuItem className=' cursor-pointer'>
                    <CreditCard color='#171717' className='mr-2 h-4 w-4' />
                    <span className='text-main'>Support</span>
                    <DropdownMenuShortcut>
                      {' '}
                      <ChevronRight color='#171717' className='mr-2 h-4 w-4' />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href='/legal'>
                  <DropdownMenuItem className=' cursor-pointer'>
                    <FileText color='#171717' className='mr-2 h-4 w-4' />
                    <span className='text-main'>Terms & Conditions</span>
                  </DropdownMenuItem>
                </Link>
                <Link href='/legal#privacy'>
                  <DropdownMenuItem className=' cursor-pointer'>
                    <Shield color='#171717' className='mr-2 h-4 w-4' />
                    <span className='text-main'>Privacy Policy</span>
                    {/* <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() =>
                  signOut(() => {
                    shutdown()
                    router.push('/')
                  })
                }
                className=' cursor-pointer'>
                <LogOut color='#171717' className='mr-2 h-4 w-4' />
                <span className='text-main'>Log out</span>
                {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  )
}

export default Header
