import React from 'react'
import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog'
import Link from 'next/link'
const GlobPaymentAlert = ({ open, setOpen }) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <div className=' w-[380px] bg-white rounded-[12px] p-5 lg:w-[512px]'>
          <h1 className='text-[18px] font-semibold text-main'>
            Add a payment method
          </h1>
          <p className='text-[#64748B] mt-2 text-[14px] leading-[20px]'>
            To begin deploying servers, you must add a payment method <br />{' '}
            under the <span className=' font-semibold'>billing</span> tab.{' '}
          </p>
          <div className='flex mt-5 items-center justify-end gap-2'>
            <button
              type='button'
              className=' inline-flex justify-center border rounded-md bg-white px-4 py-3 text-[14px] font-semibold text-gray-900 shadow-sm  '
              onClick={() => {
                setOpen(false)
              }}>
              Cancel
            </button>
            <Link onClick={() => setOpen(false)} href='/dashboard/billing'>
              <button
                type='button'
                className='inline-flex  justify-center rounded-md bg-[#0F172A] px-4 py-3 text-[14px]  text-white'>
                Go to Billing
              </button>
            </Link>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default GlobPaymentAlert
