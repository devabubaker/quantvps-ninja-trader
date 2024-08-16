import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import { useToast } from '@/components/ui/use-toast'

export default function GlobalPaymentAdd({ open, setOpen }) {
  const { toast } = useToast()

  const cancelButtonRef = useRef(null)
  const [errorMessage, setErrorMessage] = useState([])
  const [cardNumber, setCardNumber] = useState('')
  const [input1Value, setInput1Value] = useState('')
  const [input2Value, setInput2Value] = useState('')
  const [cvc, setCvc] = useState('')
  const [zip, setZip] = useState('')
  const [address, setaddress] = useState('')
  const handleInputChange = event => {
    const { name, value } = event.target
    if (name === 'input1' && value.length >= 2) {
      document.getElementById('input2').focus()
    }
    if (name === 'input2' && value.length >= 2) {
      // You can optionally focus on the next input field here if needed
    }
    // Update the state
    if (name === 'input1') setInput1Value(value)
    if (name === 'input2') setInput2Value(value)
  }
  const handleCardNumberChange = event => {
    const cardNum = event.target.value
    // Regular expression for a valid card number (16 digits)
    const cardNumberRegex = /^\d{16}$/
    if (!cardNumberRegex.test(cardNum)) {
      setErrorMessage('Please enter a valid 16-digit card number.')
    } else {
      setCardNumber(cardNum)
      setErrorMessage('')
    }
  }

  const [name, setName] = useState('')
  const { user, isLoaded, isSignedIn } = useUser()

  const handleFormSubmit = async event => {
    event.preventDefault()
    const card_info = {
      card_number: cardNumber,
      expirationDate: input1Value,
      expirationYear: input2Value,
      cvc: cvc,
      zip: zip,
      address: address
    }
    let userdata = await addUserInfo(
      name,
      user.emailAddresses[0].emailAddress,
      user.id,
      card_info
    )

    setOpen(false)
    toast({
      title: 'Payment card added.',
      description: 'Successfully Added Payment Card Info.'
    })
    // Perform form submission logic here, including additional validation if needed
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={() => setOpen(true)}>
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
                        Add Payment Method.{' '}
                        <span className='text-body font-normal'>
                          Save your card for future payments.
                        </span>
                      </h1>
                    </div>
                  </div>
                  <div className='bg-[#F9FAFB] w-full py-5'>
                    <form
                      onSubmit={handleFormSubmit}
                      className='max-w-[382px] mx-auto'>
                      <p className='text-[#52525A] text-[16px] pb-1'>
                        Card Number
                      </p>

                      <div className='pt-4'>
                        <p className='text-[#52525A] text-[16px] pb-1'>Name</p>
                        <div className='flex items-center gap-2 pr-2 overflow-hidden border rounded-[8px] bg-white'>
                          <input
                            type='text'
                            required
                            onChange={e => setName(e.target.value)}
                            className='w-full outline-none font-light border-none py-[8px] px-[10px] text-[14px]'
                            placeholder='Ken Griffin'
                          />
                        </div>
                      </div>
                      <div className='pt-4'>
                        <p className='text-[#52525A] text-[16px] pb-1'>
                          Address
                        </p>
                        <div className='flex items-center gap-2 pr-2 overflow-hidden border rounded-[8px] bg-white'>
                          <input
                            type='text'
                            required
                            onChange={e => setaddress(e.target.value)}
                            className='w-full outline-none font-light border-none py-[8px] px-[10px] text-[14px]'
                            placeholder='Sentha Street, Canada.'
                          />
                        </div>
                      </div>
                      {errorMessage &&
                        <p className='text-red-500 py-3'>{errorMessage}</p>
                      }
                      <button
                        type='submit'
                        className='mt-6 w-full bg-main flex items-center justify-center py-[10px] rounded-[8px] text-white '>
                        Add Card
                      </button>
                    </form>
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
