import { Fragment, useRef, useState, useEffect, useContext } from 'react'

import { MyContext } from '../../pages/_app'

import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog'
import { postNotificaiton } from '@/lib/postNofication'
import { request_cancel } from '@/datawagon'
import Image from 'next/image'
import { useToast } from '@/components/ui/use-toast'

import { useUser } from '@clerk/nextjs'
export default function ModalRequestCancel({ open, setOpen }) {
  const { user } = useUser()
  const { toast } = useToast()

  const [step, setstep] = useState(1)
  const [loading, setLoading] = useState(false)
  const { currentServer, thisUser, getCurrentUser } = useContext(MyContext)

  const requestCancel = async () => {
    setLoading(true)

    const rebootResult = await request_cancel(
      currentServer?.dataWagan?.id,
      'End of Billing Period',
      'I don\'t want this service anymore'
    )

    if (rebootResult) {
      if (rebootResult?.result === 'error') {
        setLoading(false)
        toast({
          variant: 'destructive',
          title: 'Request cancel denied.',
          description: rebootResult?.message
        })
      } else {
        const rebootNotificaton = await postNotificaiton(
          `Requested cancellation ${currentServer?.dataWagan?.domain} (server #${currentServer?.custom_id})`,
          thisUser?.id
        )
        await getCurrentUser(user.id)
        setLoading(false)
        setOpen(false)
        toast({
          title: 'Requested Cancellation.',
          description: 'Successfully requested for cancellation.'
        })
      }
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        {step === 1 &&
          <div className=' min-w-[320px]'>
            <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div className='text-left'>
                  <h1 className='text-[24px] pb-4 font-semibold leading-6 text-gray-900'>
                    Request Cancellation
                  </h1>

                  <div className='mt-2'>
                    <p className='text-[14px] text-main pb-2'>
                      Confirm that you would like to cancel billing for{' '}
                      <span className=' font-semibold underline '>
                        {currentServer?.dataWagan?.domain} #
                        {currentServer?.custom_id}
                      </span>{' '}
                      at the end of the current billing cycle.
                    </p>
                    {/* <p className="text-[14px] pb-4 text-main">
                                            After continuing, your server will be canceled at the end of billing cycle.
                                        </p> */}
                  </div>
                  <div className='text-[14px] bg-[#FFEBEB] rounded-[10px] px-3 py-2 mt-2'>
                    <span className=' font-medium text-main'>Warning:</span>{' '}
                    <span className='text-[#CB2A2F]'>
                      This action is not reversible. All data will be destroyed.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 flex items-center justify-between sm:px-6'>
              <button
                type='button'
                className=' inline-flex justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                onClick={() => {
                  setOpen(false)
                }}>
                Cancel
              </button>
              <button
                type='button'
                className='inline-flex items-center  justify-center gap-1 rounded-md bg-[#DA2F35] px-4 py-2 text-[14px]  text-white'
                onClick={() => requestCancel()}>
                {loading &&
                  <div className='w-[16px] animate-spin duration-100 ease-linear cursor-pointer'>
                    <Image
                      alt='loading'
                      width={300}
                      height={300}
                      src={'/loading.png'}
                      className='object-cover'
                    />
                  </div>
                }
                {!loading ? 'Confirm' : 'Confirming...'}
              </button>
            </div>
          </div>
        }
      </AlertDialogContent>
    </AlertDialog>
  )
}
