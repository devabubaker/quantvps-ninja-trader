import { useRef, useState, useContext } from 'react'
import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import { useToast } from '@/components/ui/use-toast'

import { MyContext } from '@/pages/_app'
// import { updateUserCard } from "@/datawagon/updateCard";
import Link from 'next/link'

export default function PaymentNotDone({ open, setOpen, setOpen1 }) {
  const { toast } = useToast()

  const [initState, setInitState] = useState(1)
  const [errorMessage, setErrorMessage] = useState([])
  const [cardNumber, setCardNumber] = useState('')
  const [input1Value, setInput1Value] = useState('')
  const [input2Value, setInput2Value] = useState('')
  const [cvc, setCvc] = useState('')
  const [zip, setZip] = useState('')
  const [address, setAddress] = useState('')
  const { getCurrentUser } = useContext(MyContext)
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

  const { user } = useUser()

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
    let userdata = null // TODO implement this // await updateUserCard(user.id, card_info);
    console.log('update, card', userdata)
    getCurrentUser(user.id)
    setOpen(false)
    toast({
      title: 'Updated Payment info.',
      description: 'Successfully Updated Payment card Info.'
    })
    setOpen1(true)
    // Perform form submission logic here, including additional validation if needed
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        {initState === 1 ?
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
                  Payment <span className='text-red-500'>unsuccessfull.</span>
                </h1>
              </div>
            </div>
            <div className='bg-[#F9FAFB] w-full py-5'>
              <div className='max-w-[382px] mt-5 mx-auto'>
                <p className='text-[14px] pb-5 text-main'>
                  Here Is some steps you can follow:
                </p>
                <div className='flex items-center gap-2'>
                  <div className='w-[20px]'>
                    <Image
                      alt='correct'
                      width={300}
                      height={300}
                      src={'/tik.svg'}
                      className='w-full object-cover'
                    />
                  </div>
                  <p className='text-[14px] text-main'>
                    Ensure Card Info In Billing Page Is Correct.
                  </p>
                </div>
                <div className='flex items-center mt-3 gap-2'>
                  <div className='w-[20px]'>
                    <Image
                      alt='correct'
                      width={300}
                      height={300}
                      src={'/tik.svg'}
                      className='w-full object-cover'
                    />
                  </div>
                  <p className='text-[14px] text-main'>
                    Check Your Account Balance
                  </p>
                </div>

                <div className='grid grid-cols-1 gap-3'>
                  <Link href={'/dashboard/billing'}>
                    <button className='mt-5 w-full bg-main flex items-center justify-center gap-2 rounded-[6px] py-[12px] text-white text-[14px] font-semibold'>
                      Change Card
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
          </div>
          :
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
                  Change Payment Method. <br />
                  <span className='text-body text-[18px] font-normal'>
                    Save your card for future payments.
                  </span>
                </h1>
              </div>
            </div>
            <div className='bg-[#F9FAFB] w-full py-5'>
              <form
                onSubmit={handleFormSubmit}
                className='max-w-[382px] mx-auto'>
                <p className='text-[#52525A] text-[16px] pb-1'>Card Number</p>
                <div className='flex items-center gap-2 pr-2 overflow-hidden border rounded-[8px] bg-white'>
                  <input
                    type='text'
                    maxLength={16}
                    onChange={handleCardNumberChange}
                    className='w-full outline-none font-light border-none py-[8px] px-[10px] text-[14px]'
                    placeholder='1234 1234 1234 1234'
                  />
                  <div className='w-[153px]'>
                    <Image
                      alt='visa logo'
                      width={300}
                      height={300}
                      src={'/visa.png'}
                      className='w-full object-cover'
                    />
                  </div>
                </div>
                <div className='pt-4 grid grid-cols-2 gap-3'>
                  <div>
                    <p className='text-[#52525A] text-[16px] pb-1'>
                      Expiration
                    </p>
                    <div className='flex items-center gap-2 pr-2 px-[10px] overflow-hidden border rounded-[8px] bg-white'>
                      <input
                        id='input1'
                        name='input1'
                        className=' w-[50px] outline-none font-light border-none py-[8px]  text-[14px]'
                        type='text'
                        placeholder='MM /'
                        maxLength={2}
                        value={input1Value}
                        onChange={handleInputChange}
                      />

                      <input
                        id='input2'
                        name='input2'
                        className=' w-[50px] outline-none font-light border-none py-[8px]  text-[14px]'
                        type='text'
                        placeholder='YY'
                        maxLength={2}
                        value={input2Value}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <p className='text-[#52525A] text-[16px] pb-1'>CVC</p>
                    <div className='flex items-center gap-2 pr-2 overflow-hidden border rounded-[8px] bg-white'>
                      <input
                        type='text'
                        required
                        onChange={e => setCvc(e.target.value)}
                        className='w-full outline-none font-light border-none py-[8px] px-[10px] text-[14px]'
                        placeholder='CVC'
                      />
                      <div className='w-[28px]'>
                        <Image
                          alt='cvc'
                          width={300}
                          height={300}
                          src={'/cvc.png'}
                          className='w-full object-cover'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pt-4'>
                  <p className='text-[#52525A] text-[16px] pb-1'>Zip</p>
                  <div className='flex items-center gap-2 pr-2 overflow-hidden border rounded-[8px] bg-white'>
                    <input
                      type='text'
                      required
                      onChange={e => setZip(e.target.value)}
                      className='w-full outline-none font-light border-none py-[8px] px-[10px] text-[14px]'
                      placeholder='12345'
                    />
                  </div>
                </div>
                <div className='pt-4'>
                  <p className='text-[#52525A] text-[16px] pb-1'>Adress</p>
                  <div className='flex items-center gap-2 pr-2 overflow-hidden border rounded-[8px] bg-white'>
                    <input
                      type='text'
                      required
                      onChange={e => setAddress(e.target.value)}
                      className='w-full outline-none font-light border-none py-[8px] px-[10px] text-[14px]'
                      placeholder='Stan Sreet, Canada'
                    />
                  </div>
                </div>

                {errorMessage &&
                  <p className='text-red-500 py-3'>{errorMessage}</p>
                }
                <button
                  type='submit'
                  className='mt-6 w-full bg-main flex items-center justify-center py-[10px] rounded-[8px] text-white '>
                  Change Card
                </button>
              </form>
            </div>
          </div>
        }
      </AlertDialogContent>
    </AlertDialog>
  )
}
