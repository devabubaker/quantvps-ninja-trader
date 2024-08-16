import React from 'react'
import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog'
import { SignUp } from '@clerk/nextjs'
import { IoCloseSharp } from 'react-icons/io5'
const GlobalSignIn = ({ open, setOpen }) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <div className='pb-5 relative pt-10 rounded-[12px] bg-white'>
          <div
            onClick={() => {
              setOpen(false)
            }}
            className='
          absolute top-2 right-2 z-50 cursor-pointer'>
            <IoCloseSharp className='w-7 h-7 text-gray-400' />
          </div>
          <SignUp />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default GlobalSignIn
