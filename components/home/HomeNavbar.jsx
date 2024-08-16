import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useUser } from '@clerk/nextjs'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import Skeleton from '../global/Skeleton'
import { openChat } from '@/util/intercomProvider'

const HomeNavbar = ({
  setOpen,
  setOpen2,
  mainVpServers,
  setSelectedServer
}) => {
  const { isSignedIn } = useUser()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const openDeploy = fn => {
    setSelectedServer(mainVpServers[0].pid)
    fn === 2 ? setOpen2(true) : setOpen(true)
  }

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <>
      {mobileMenuOpen &&
        <div className=' sticky w-full min-h-screen  lg:hidden top-0 left-0  z-[8489] bg-white p-5'>
          <div className='w-full flex items-center justify-end'>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}>
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <NavigationMenu>
            <NavigationMenuList className='flex flex-col lg:hidden '>
              <NavigationMenuItem>
                <span onClick={() => setMobileMenuOpen(false)}>
                  <NavigationMenuLink
                    href='#pricing'
                    className={`text-[#09090B] text-opacity-60 text-[14px] ${navigationMenuTriggerStyle()}`}>
                    Pricing
                  </NavigationMenuLink>
                </span>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <span onClick={() => setMobileMenuOpen(false)}>
                  <NavigationMenuLink
                    href='#compatibility'
                    className={`text-[#09090B] text-opacity-60 text-[14px] ${navigationMenuTriggerStyle()}`}>
                    Compatibility
                  </NavigationMenuLink>
                </span>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <span onClick={() => setMobileMenuOpen(false)}>
                  <NavigationMenuLink
                    href='#features'
                    className={`text-[#09090B] text-opacity-60 text-[14px] ${navigationMenuTriggerStyle()}`}>
                    Features
                  </NavigationMenuLink>
                </span>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <span onClick={() => setMobileMenuOpen(false)}>
                  <NavigationMenuLink
                    href='#faq'
                    className={`text-[#09090B] text-opacity-60 text-[14px] ${navigationMenuTriggerStyle()}`}>
                    FAQ
                  </NavigationMenuLink>
                </span>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => {
                    setMobileMenuOpen(false)
                    openChat()
                  }}
                  className={`text-[#09090B] text-opacity-60 text-[14px] ${navigationMenuTriggerStyle()}`}>
                  Support
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className='flex gap-2 items-center justify-center'>
            <div className='flex py-[6px] px-3 border border-[#E4E4E7] rounded-[6px] items-center gap-[12px]'>
              {isSignedIn ?
                <Link className='text-[14px] text-main' href='/dashboard'>
                  Client Portal
                </Link>
                :
                <Link className='text-[14px] text-main' href='/login'>
                  Login
                </Link>
              }
              {mainVpServers?.length > 0 ?
                <>
                  {isSignedIn ?
                    <Link href='/dashboard/order-new-server'>
                      <button className='text-[13px] animate-buttonheartbeat flex items-center gap-2 bg-[#131316] font-medium text-white py-[5px] px-5 rounded-[8px] relative'>
                        <div className='w-[16px]'>
                          <Image
                            width={166}
                            height={126}
                            alt=''
                            src={'/deploy.png'}
                          />
                        </div>
                        Deploy Server
                      </button>
                    </Link>
                    :
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false)
                        openDeploy(2)
                      }}
                      className='text-[13px] animate-buttonheartbeat flex items-center gap-2 bg-[#131316] font-medium text-white py-[5px] px-5 rounded-[8px] relative'>
                      <div className='w-[16px]'>
                        <Image
                          width={166}
                          height={126}
                          alt='deploy server'
                          src={'/deploy.png'}
                        />
                      </div>
                      Deploy Server
                    </button>
                  }
                </>
                :
                <Skeleton className={'w-[140px] h-[29px]'} />
              }
            </div>
          </div>
        </div>
      }
      <NavigationMenu
        className={` w-full ${
          visible
            ? 'sticky backdrop-blur-sm bg-white/50  top-0 z-50'
            : 'bg-white relative'
        }     flex px-[10px] items-center justify-between py-3 lg:px-8`}>
        <div className='flex items-center gap-[45px]'>
          <div className='flex lg:flex-1'>
            <Link href='/' className='flex items-center gap-[10px]'>
              <div className='w-[36px]'>
                <Image width={137} height={137} alt='' src={'/logo.png'} />
              </div>
              <div>
                <p className='font-semibold tracking-[0px] leading-[18px] text-[16px] f_bold'>
                  Trading Servers
                </p>
                <p className='text-[#262626] opacity-40 pt-[2px]  text-[12px]'>
                  By <span className=' font-semibold'>QuantVPS.com</span>
                </p>
              </div>
            </Link>
          </div>
          <NavigationMenuList className='hidden lg:flex '>
            <NavigationMenuItem>
              <NavigationMenuLink
                href='#pricing'
                className={`text-[#09090B] text-opacity-60 text-[14px] ${navigationMenuTriggerStyle()}`}>
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href='#compatibility'
                className={`text-[#09090B] text-opacity-60 text-[14px] ${navigationMenuTriggerStyle()}`}>
                Compatibility
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href='#features'
                className={`text-[#09090B] text-opacity-60 text-[14px] ${navigationMenuTriggerStyle()}`}>
                Features
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href='#faq'
                className={`text-[#09090B] text-opacity-60 text-[14px] ${navigationMenuTriggerStyle()}`}>
                FAQ
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className='cursor-pointer'>
              <NavigationMenuLink
                onClick={openChat}
                className={`text-[#09090B] text-opacity-60 text-[14px] ${navigationMenuTriggerStyle()}`}>
                Support
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
        <NavigationMenuList className='hidden lg:flex '>
          <div className='hidden lg:flex gap-2 items-center justify-end'>
            {/* <NavigationMenuItem>
              {isSignedIn ? <Link href="/overview" legacyBehavior passHref>
                <NavigationMenuLink className={`text-[#09090B] text-opacity-60 text-[14px] ${navigationMenuTriggerStyle()}`}>
                  Client Portal
                </NavigationMenuLink>
              </Link> :
                <Link href="/login" legacyBehavior passHref>
                  <NavigationMenuLink className={`text-[#09090B] text-opacity-60 text-[14px] ${navigationMenuTriggerStyle()}`}>
                    Login
                  </NavigationMenuLink>
                </Link>
              }
            </NavigationMenuItem> */}

            <div className='flex py-[6px] px-3 border border-[#E4E4E7] rounded-[6px] items-center gap-[12px]'>
              {isSignedIn ?
                <Link className='text-[14px] text-main' href='/dashboard'>
                  Client Portal
                </Link>
                :
                <Link className='text-[14px] text-main' href='/login'>
                  Login
                </Link>
              }
              {mainVpServers ?
                <>
                  {mainVpServers?.length > 0 ?
                    <>
                      {isSignedIn ?
                        <Link href='/dashboard/order-new-server'>
                          <button className='text-[13px]  flex animate-buttonheartbeat items-center gap-2 bg-[#131316] font-medium text-white py-[5px] px-5 rounded-[8px] relative'>
                            <div className='w-[16px] '>
                              <Image
                                width={166}
                                height={126}
                                alt=''
                                src={'/deploy.png'}
                              />
                            </div>
                            Deploy Server
                          </button>
                        </Link>
                        :
                        <button
                          onClick={openDeploy}
                          className='text-[13px]  flex animate-buttonheartbeat items-center gap-2 bg-[#131316] font-medium text-white py-[5px] px-5 rounded-[8px] relative'>
                          <div className='w-[16px] '>
                            <Image
                              width={166}
                              height={126}
                              alt=''
                              src={'/deploy.png'}
                            />
                          </div>
                          Deploy Server
                        </button>
                      }
                    </>
                    :
                    <Skeleton className={'w-[140px] h-[29px]'} />
                  }
                </>
                :
                <Link href='#pricing'>
                  <button className='text-[13px]  flex animate-buttonheartbeat items-center gap-2 bg-[#131316] font-medium text-white py-[5px] px-5 rounded-[8px] relative'>
                    <div className='w-[16px] '>
                      <Image
                        width={166}
                        height={126}
                        alt=''
                        src={'/deploy.png'}
                      />
                    </div>
                    Deploy Server
                  </button>
                </Link>
              }
            </div>
          </div>
        </NavigationMenuList>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className=' inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
      </NavigationMenu>
    </>
  )
}

const ListItem = ({ className, ref, title, children, props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}>
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

export default HomeNavbar
