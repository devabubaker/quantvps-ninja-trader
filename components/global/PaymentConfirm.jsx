import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function PaymentConfirm({ open, setOpen, data }) {
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'>
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white border text-left shadow-xl transition-all sm:my-8 '>
                <div className='w-full min-w-[512px] max-w-[512px] bg-white'>
                  <div className=' bg_radial w-full border-b border-[#E5E7EB] py-5'>
                    <div className='max-w-[382px] mx-auto'>
                      <div className='flex items-center gap-2'>
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
                          <h6 className='text-[#09090B] text-[16px] f_bold'>
                            Trading Servers
                          </h6>
                          <p className='text-[12px] opacity-40 text-[#262626]'>
                            By <span className='f_bold'>QuantVPS.com</span>
                          </p>
                        </div>
                      </div>
                      <h1 className='text-[24px] pt-4 leading-[32px] font-semibold text-main '>
                        Payment Successful. <br />
                        <span className='text-body font-normal'>
                          Check your email for instructions.
                        </span>
                      </h1>
                    </div>
                  </div>
                  <div className='bg-[#F9FAFB] w-full py-5'>
                    {data &&
                      <h1 className='text-[20px] text-main pb-4 font-semibold text-center'>
                        Order Confirmation: {data}
                      </h1>
                    }
                    <div className='max-w-[382px] mt-5 mx-auto'>
                      <div className='flex items-center gap-2'>
                        <div className='w-[20px]'>
                          <Image
                            alt='success'
                            width={300}
                            height={300}
                            src={'/tik.svg'}
                            className='w-full object-cover'
                          />
                        </div>
                        <p className='text-[14px] text-main'>
                          Payment succesful
                        </p>
                      </div>
                      <div className='flex items-center mt-3 gap-2'>
                        <div className='w-[20px]'>
                          <Image
                            alt='success'
                            width={300}
                            height={300}
                            src={'/tik.svg'}
                            className='w-full object-cover'
                          />
                        </div>
                        <p className='text-[14px] text-main'>
                          Instructions sent to your email
                        </p>
                      </div>
                      <div className='flex items-center mt-3 gap-2'>
                        <div className='w-[20px]'>
                          <Image
                            alt='success'
                            width={300}
                            height={300}
                            src={'/tik.svg'}
                            className='w-full object-cover'
                          />
                        </div>
                        <p className='text-[14px] text-main'>
                          Your server is being activated
                        </p>
                      </div>
                      <div className='flex items-center mt-3 gap-2'>
                        <div className='w-[20px]'>
                          <Image
                            alt='success'
                            width={300}
                            height={300}
                            src={'/tik.svg'}
                            className='w-full object-cover'
                          />
                        </div>
                        <p className='text-[14px] text-main'>
                          Open a support ticket with any questions
                        </p>
                      </div>
                      <Link href={'/dashboard'}>
                        <button className='mt-5 w-full bg-main flex items-center justify-center gap-2 rounded-[6px] py-[12px] text-white text-[14px] font-semibold'>
                          Proceed to Dashboard{' '}
                          <div className='w-[16px]'>
                            <Image
                              alt='arrow right'
                              width={300}
                              height={300}
                              src={'/arroright.svg'}
                              className='w-full object-cover'
                            />
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
