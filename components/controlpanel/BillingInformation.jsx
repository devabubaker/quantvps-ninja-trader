import Link from 'next/link'
import React, { useContext } from 'react'
import ModalRequestCancel from './ModalCancel'
import { useState } from 'react'
import { MyContext } from '@/pages/_app'
import Skeleton from '../global/Skeleton'
import { Button } from '../ui/button'

const BillingInformation = () => {
  const [open1, setOpen1] = useState(false)
  const { currentServer, globLoading } = useContext(MyContext)
  return (
    <div className='mt-[26px] border overflow-hidden  rounded-[6px]'>
      <ModalRequestCancel open={open1} setOpen={setOpen1} />
      <div className=' p-[20px] bg-white'>
        <h2 className='text-main font-semibold  text-[20px]'>Billing</h2>
      </div>
      {!globLoading ?
        <div className='py-[13px] flex items-center justify-between border-t px-[24px]'>
          <div className='text-[14px] flex items-center gap-1 text-[#666666]'>
            Cancel{' '}
            <span className='font-semibold'>
              {currentServer?.ourServer?.domain} #{currentServer?.custom_id}
            </span>{' '}
            at the end of current billing cycle.
          </div>
          <Button
            onClick={() => setOpen1(true)}
            className='bg-main rounded-[8px] text-[14px] px-[12px] py-[8px] text-white font-semibold'>
            Request Cancellation
          </Button>
        </div>
        :
        <Skeleton className={'h-[63px] w-full rounded-[0px]'} />
      }
    </div>
  )
}

export default BillingInformation
