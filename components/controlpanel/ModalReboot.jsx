import { useRef, useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { MyContext } from '../../pages/_app'
import { rebootServer } from '@/datawagon'

import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog'
import { IoCloseSharp } from 'react-icons/io5'
import { postNotificaiton } from '@/lib/postNofication'

import { useUser } from '@clerk/nextjs'
export default function ModalReboot({ open, setOpen, setLoading, loading }) {
  const { user } = useUser()
  const [step, setstep] = useState(1)
  const cancelButtonRef = useRef(null)
  const { currentServer, thisUser, getCurrentUser } = useContext(MyContext)
  const [second, setSecond] = useState(0)

  useEffect(() => {
    let intervalId

    if (loading) {
      // Start the timer if loading is true
      intervalId = setInterval(() => {
        setSecond(prevSecond => prevSecond + 1)
      }, 1000)
    } else {
      // Clear the interval if loading becomes false
      clearInterval(intervalId)
    }

    // Cleanup function to clear interval on component unmount or when loading changes
    return () => clearInterval(intervalId)
  }, [loading])

  const reboot = async () => {
    setLoading(true)
    setOpen(false)
    const rebootResult = await rebootServer(
      currentServer?.dataWagan?.id,
      currentServer.dedicated
    )
    // const rebootNotificaton = await postNotificaiton(
    //   `reboot ${currentServer?.dataWagan?.domain} (server #${currentServer?.custom_id})`,
    //   thisUser?.id
    // )
    await getCurrentUser(user.id)
    if (rebootResult) {
      // && rebootNotificaton) {
      setLoading(false)
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        {step === 1 &&
          <div className='sm:w-full sm:max-w-lg'>
            <div className='bg-white rounded-[12px] px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div className='text-left'>
                  <h1 className='text-[24px] pb-4 font-semibold leading-6 text-gray-900'>
                    Reboot Server
                  </h1>

                  <div className='mt-2'>
                    <p className='text-[14px] text-main pb-5'>
                      Please confirm that you would like to reboot{' '}
                      <span className=' font-semibold underline '>
                        {' '}
                        {currentServer?.dataWagan?.domain} #
                        {currentServer?.custom_id}
                      </span>
                    </p>
                    <p className='text-[14px] pb-4 text-main'>
                      After continuing, your server will not be accessible for
                      30 minutes. Any unsaved files will be lost.
                    </p>
                  </div>
                  <div className='text-[14px] bg-[#FFEBEB] rounded-[10px] px-3 py-2 mt-2'>
                    <span className=' font-medium text-main'>Warning:</span>{' '}
                    <span className='text-[#CB2A2F]'>
                      This action is not reversible. Please be certain.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 rounded-[12px] px-4 py-3 flex items-center justify-between sm:px-6'>
              <button
                type='button'
                className=' inline-flex justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                onClick={() => {
                  setOpen(false)
                  setstep(1)
                  setSecond(0)
                }}
                ref={cancelButtonRef}>
                Cancel
              </button>
              <button
                type='button'
                className='inline-flex  justify-center rounded-md bg-[#DA2F35] px-4 py-2 text-[14px]  text-white'
                onClick={() => reboot()}>
                Reboot
              </button>
            </div>
          </div>
        }
        {step === 2 &&
          <div className='relative'>
            <div
              onClick={() => {
                setOpen(false)
                setstep(1)
                setSecond(0)
              }}
              className='
          absolute top-2 right-2 z-50 cursor-pointer'>
              <IoCloseSharp className='w-7 h-7 text-gray-400' />
            </div>
            <div className='bg-white max-w-[800px] px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div className='text-left'>
                  <h1 className='text-[20px] font-semibold leading-6 text-gray-900'>
                    {' '}
                    Reboot System
                  </h1>

                  <div className='mt-2'>
                    <p className='text-[14px] text-main pb-5'>
                      If you are having issues with your server, you can reboot
                      your server here remotely. Reboots can take up to 30
                      minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='py-[13px] bg-[#FFF0F0] px-[24px] border-t border-b border-[#FDD8D8] flex items-center justify-between
'>
              <p className='text-[#9B3434] text-[14px]'>
                Reboots start immediately and can take up to 30 minutes.
              </p>

              {/* <button

                        className="bg-[#DA2F35] px-[16px] py-[8px] text-[14px] font-semibold rounded-[8px] text-white flex items-center gap-2"
                      >
                        Reboot
                        <div className="w-[14px] cursor-pointer">
                          <Image
                            width={300}
                            height={300}
                            src={"/reboot.svg"}
                            className="object-cover"
                          />
                        </div>
                      </button> */}
            </div>
            <div className='py-[30px] px-[35px] bg-[#FFF0F0] grid grid-cols-2'>
              <div>
                <p className='text-[14px] f_bold'>
                  {' '}
                  {currentServer?.dataWagan?.domain} #{currentServer?.custom_id}
                  .
                </p>
                <p className='text-[#666666] text-[14px]'>Reboot</p>
              </div>
              <div>
                <div className='flex items-center gap-2 '>
                  {loading === true ?
                    <div className='bg-[#F5A623]  w-[10px] h-[10px] rounded-full'></div>
                    :
                    <div className='bg-[#50E3C2]  w-[10px] h-[10px] rounded-full'></div>
                  }
                  {loading ?
                    <p className='text-[#666666] text-[14px] font-semibold'>
                      Rebooting
                    </p>
                    :
                    <p className='text-[#666666] text-[14px] font-semibold'>
                      Ready
                    </p>
                  }
                </div>
                <div className='-ml-[1.5px]'>
                  <div className='flex items-center gap-2'>
                    {loading ?
                      <div className='w-[13px] animate-spin duration-100 ease-linear cursor-pointer'>
                        <Image
                          alt='loading'
                          width={300}
                          height={300}
                          src={'/loading.png'}
                          className='object-cover'
                        />
                      </div>
                      :
                      <div className='w-[13px]  duration-100 ease-linear cursor-pointer'>
                        <Image
                          alt='loading'
                          width={300}
                          height={300}
                          src={'/loading.png'}
                          className='object-cover'
                        />
                      </div>
                    }
                    <p className=' text-[#666] text-[14px]'>{second}s</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </AlertDialogContent>
    </AlertDialog>
  )
}
