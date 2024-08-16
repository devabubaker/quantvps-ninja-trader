import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useClerk, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import { shutdown } from '@intercom/messenger-js-sdk'
import { openChat } from '@/util/intercomProvider'
import StatusWidget from '../global/StatusWidget'

const Footer = () => {
  const { isSignedIn } = useUser()
  const { signOut } = useClerk()
  const router = useRouter()
  return (
    <div className='py-[29px] border-t'>
      <div className='max-w-[1200px] px-4 lg:p-0 mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-[23px]'>
              <Image
                width={300}
                height={300}
                src={'/logof.svg'}
                className='object-cover'
                alt='logoff sign'
              />
            </div>
            <p className='text-[#666666] text-[14px]'>© 2024</p>
            <StatusWidget></StatusWidget>
          </div>
        </div>
        <div className='flex mt-[22px] flex-wrap gap-4 lg:gap-0 items-center justify-between'>
          <div className='flex items-center gap-5'>
            <a
              href='https://twitter.com/QuantVPS'
              target='_blank'
              rel='noopener noreferrer'>
              <div className='w-[16px] cursor-pointer'>
                <Image
                  width={300}
                  height={300}
                  src={'/twitter.svg'}
                  className='object-cover'
                  alt='twitter logo'
                />
              </div>
            </a>
          </div>
          <Link className='text-[#666] text-[14px]' href='/'>
            Home
          </Link>
          <Link className='text-[#666] text-[14px]' href='#pricing'>
            Pricing
          </Link>
          <Link className='text-[#666] text-[14px]' href='#compatibility'>
            Compatibility
          </Link>
          <Link className='text-[#666] text-[14px]' href='#features'>
            Features
          </Link>
          <Link className='text-[#666] text-[14px]' href='#faq'>
            FAQ
          </Link>
          <p
            onClick={openChat}
            className='text-[#666] cursor-pointer text-[14px]'>
            Support
          </p>
          {!isSignedIn ?
            <Link className='text-[#666] text-[14px]' href='/login'>
              Login
            </Link>
            :
            <p
              onClick={() =>
                signOut(() => {
                  shutdown()
                  router.push('/')
                })
              }
              className='text-[#666] text-[14px] cursor-pointer'>
              Log out
            </p>
          }
          <Link className='text-[#666] text-[14px]' href='/legal'>
            Legal
          </Link>
        </div>
        <p className='text-[#666] text-[14px] mt-8'>
          Caution: Trading involves risk (including Futures and Forex) and is
          not suitable for every investor. An investor could potentially lose
          all or more than the initial investment.{' '}
          <Link href='/' className='text-blue-700 cursor-pointer'>
            QuantVPS.com
          </Link>{' '}
          does not guarantee the profitability of trades executed on its
          systems. You are responsible for your financial decisions and we
          assume zero liability for money made or lost as a result of using our
          services. Only risk capital should be used for trading and only those
          with sufficient risk capital should consider trading.
        </p>
      </div>
    </div>
  )
}

export default Footer
