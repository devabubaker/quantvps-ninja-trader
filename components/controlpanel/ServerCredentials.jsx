import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import copy from 'copy-to-clipboard'
import { MyContext } from '../../pages/_app'
import { FiClipboard } from 'react-icons/fi'
import { RiArrowDownSLine } from 'react-icons/ri'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { IoMdCheckmark } from 'react-icons/io'
import { useToast } from '@/components/ui/use-toast'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useState } from 'react'
import { GoEye, GoEyeClosed } from 'react-icons/go'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const ServerCredentials = ({ product }) => {
  const { toast } = useToast()

  const [copyId, setCopyId] = useState(0)
  const copY = text => {
    copy(text)
    toast({
      title: 'Copied to clipboard',
      description: 'Succesfully copied your server credential.'
    })
  }
  const { currentServer } = useContext(MyContext)

  useEffect(() => {
    if (copyId !== 0) {
      setTimeout(() => {
        setCopyId(0)
      }, 2000)
    }
  }, [copyId])
  const [shown, setShown] = useState(0)
  return (
    <div className='border mt-[26px] overflow-hidden rounded-[6px]'>
      <div className='bg-white  px-5 py-[20px]'>
        <h2 className='text-main font-semibold pb-2 text-[20px]'>
          Server Credentials
        </h2>
        {/* <p className='text-[14px] text-main'>Login to your server using the following credentials on Microsoft Remote Desktop</p>
                <p className='text-[14px] text-main opacity-50 mt-1'>*If you are using Linux, please use “root” as your username.</p> */}
        <p className='text-[14px] mt-4'>IP Address:</p>
        <div className='flex items-center mt-1'>
          <div className=' border rounded-[8px] w-[200px] border-black border-opacity-10 px-[16px] py-[7px] flex items-center gap-2'>
            <p className='text-[#8B8B8B] pr-3 text-[13px]'>
              {currentServer?.dataWagan?.dedicatedip}
            </p>
          </div>
          <div className='mx-3 h-[34px] w-[2px] bg-body opacity-10'></div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => {
                    copY(currentServer?.dataWagan?.dedicatedip)
                    setCopyId(1)
                  }}
                  size='icon'
                  variant='outline'>
                  {copyId !== 1 ?
                    <FiClipboard className='w-5 h-5 text-main' />
                    :
                    <IoMdCheckmark className='w-5 h-5 text-gray-400' />
                  }
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy IP address</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className='text-[14px] mt-4'>Username:</p>
        <div className='flex items-center mt-1'>
          <div className=' border w-[200px] rounded-[8px] border-black border-opacity-10 px-[16px] py-[7px] flex justify-between items-center gap-5'>
            <p className={'text-[#8B8B8B] text-[13px] '}>
              {(product?.vps?.data?.os_name?.includes('ubuntu')
                ? 'root'
                : 'Administrator'
              )
                ?.split('')
                .map((item, ind) =>
                  <span key={ind} className='char'>
                    {item}
                  </span>
                )}
            </p>
          </div>
          <div className='mx-3 h-[34px] w-[2px] bg-body opacity-10'></div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => {
                    copY(
                      product?.vps?.data?.os_name?.includes('ubuntu')
                        ? 'root'
                        : 'Administrator'
                    )
                    setCopyId(2)
                  }}
                  size='icon'
                  variant='outline'>
                  {copyId !== 2 ?
                    <FiClipboard className='w-5 h-5 text-main' />
                    :
                    <IoMdCheckmark className='w-5 h-5 text-gray-400' />
                  }
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy username</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* <Button className="ml-3" variant="outline" size="icon" onClick={() => {
            if (shown !== 1) {
              setShown(1)
            }
            else {
              setShown(0)
            }
          }} >
            {shown === 1 ? <GoEyeClosed /> : <GoEye />}
          </Button> */}
        </div>
        <p className='text-[14px] mt-4'>Password:</p>
        <div className='flex items-center mt-1 mb-2'>
          <div className=' border w-[200px] rounded-[8px] border-black border-opacity-10 px-[16px] py-[7px] flex justify-between items-center gap-5'>
            <p className={'text-[#8B8B8B] text-[13px]'}>
              {currentServer?.ourServer?.password
                ?.split('')
                .map((item, ind) =>
                  <span key={ind} className='char'>
                    {item}
                  </span>
                )}
            </p>
          </div>
          <div className='mx-3 h-[34px] w-[2px] bg-body opacity-10'></div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => {
                    copY(currentServer?.ourServer?.password)
                    setCopyId(3)
                  }}
                  size='icon'
                  variant='outline'>
                  {copyId !== 3 ?
                    <FiClipboard className='w-5 h-5 text-main' />
                    :
                    <IoMdCheckmark className='w-5 h-5 text-main' />
                  }
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy password</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className='py-[18px] border-t px-[24px]'>
        <div className='text-[14px] flex-wrap flex items-center gap-1 text-main'>
          Access your server via SSH or Microsoft Remote Desktop:
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                className='text-[#666666]  flex items-center gap-1'>
                View Download Options <RiArrowDownSLine />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link
                  className='text-[#0068D6] flex items-center '
                  href={
                    'https://apps.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12'
                  }
                  target='__blank'>
                  Download for Mac
                  <div className='w-[17px]'>
                    <Image
                      alt='external link'
                      width={300}
                      height={300}
                      src={'/link.svg'}
                      className='object-cover'
                    />
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                {' '}
                <Link
                  className='text-[#0068D6] flex items-center '
                  href={
                    'https://apps.microsoft.com/detail/9wzdncrfj3ps?hl=en-US&gl=US'
                  }
                  target='__blank'>
                  Download for Windows
                  <div className='w-[17px]'>
                    <Image
                      alt='external link'
                      width={300}
                      height={300}
                      src={'/link.svg'}
                      className='object-cover'
                    />
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link
                  className='text-[#0068D6] flex items-center '
                  href={
                    'https://apps.apple.com/us/app/remote-desktop-mobile/id714464092'
                  }
                  target='__blank'>
                  Download for iOS
                  <div className='w-[17px]'>
                    <Image
                      alt='external link'
                      width={300}
                      height={300}
                      src={'/link.svg'}
                      className='object-cover'
                    />
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className='text-[#0068D6] flex items-center '
                  href={
                    'https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en_US&gl=US'
                  }
                  target='__blank'>
                  Download for Android
                  <div className='w-[17px]'>
                    <Image
                      alt='external link'
                      width={300}
                      height={300}
                      src={'/link.svg'}
                      className='object-cover'
                    />
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default ServerCredentials
