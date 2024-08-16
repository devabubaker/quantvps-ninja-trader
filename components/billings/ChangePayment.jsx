import { useState, useContext } from 'react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import { useToast } from '@/components/ui/use-toast'

// import { updateUserCard } from "../../lib/updateCard";
import { MyContext } from '@/pages/_app'
// import { refundTestCard } from "../../lib/refundTestCard";
// import {
//   formatCreditCardInput,
//   stringReplace,
//   validateCVC,
// } from "../../lib/tests";

import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog'
import { IoCloseSharp } from 'react-icons/io5'
import addPayment from '@/stripe/AddPayment'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
export default function ChangePaymentMethod({ open, setOpen }) {
  const elements = useElements()
  const stripe = useStripe()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState([])

  const { getCurrentUser, thisUser } = useContext(MyContext)

  const { user } = useUser()

  const handleFormSubmit = async event => {
    event.preventDefault()
    if (errorMessage === '') {
      try {
        setLoading(true)
        const cardElement = elements.getElement(CardElement)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement
        })

        if (error) {
          console.log(error)
          setLoading(false)
          setErrorMessage('please provide a valid card.')
        } else {
          const getPayment = await addPayment(thisUser.id, paymentMethod.id)
          console.log(getPayment)
          getCurrentUser(user.id)
          setOpen(false)
          setLoading(false)
          toast({
            title: 'Payment Method',
            description: 'Successfully Updated Payment Info.'
          })
        }
        setLoading(false)
      } catch (error) {
        setErrorMessage('please provide a valid card.')
      }
    }

    // Perform form submission logic here, including additional validation if needed
  }
  const handleCardChange = event => {
    if (event.error) {
      setErrorMessage(event.error.message)
    } else {
      setErrorMessage('')
    }
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <div className='w-full relative max-w-[325px] min-w-[320px] lg:min-w-[512px] lg:max-w-[512px] bg-white'>
          <div className='absolute top-3 right-3 z-40'>
            <IoCloseSharp
              onClick={() => setOpen(false)}
              className='w-6 h-6 cursor-pointer text-body'
            />
          </div>
          <div className=' bg_radial w-full border-b flex items-center justify-center border-[#E5E7EB] py-5'>
            <div className='min-w-[310px]  ml-[9px] lg:ml-0 lg:min-w-[382px] lg:max-w-[382px] '>
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
                Billing <br />
                <span className='text-body text-[18px] font-normal'>
                  Set your default payment method.
                </span>
              </h1>
            </div>
          </div>
          <div className='bg-[#F9FAFB] w-full py-5 flex items-center justify-center'>
            <form
              onSubmit={handleFormSubmit}
              className='min-w-[310px] lg:min-w-[382px] ml-[9px] lg:ml-0 lg:max-w-[382px] '>
              <p className='text-[#52525A] text-[16px] pb-1'>Card info</p>

              <CardElement onChange={handleCardChange} />
              {errorMessage ?
                <p className='text-red-500 pt-1'>{errorMessage}</p>
                :
                <p className='text-red-500 opacity-0 pt-1'>Helo</p>
              }
              {!loading ?
                <button
                  type='submit'
                  className='mt-3 w-full bg-main flex items-center justify-center py-[10px] rounded-[8px] text-white '>
                  Update Payment Method
                </button>
                :
                <button
                  type='submit'
                  className='mt-3 w-full bg-main flex gap-2 items-center justify-center py-[10px] rounded-[8px] text-white '>
                  <div className='w-[13px] animate-spin duration-100 ease-linear cursor-pointer'>
                    <Image
                      alt='loading'
                      width={300}
                      height={300}
                      src={'/loading.png'}
                      className='object-cover'
                    />
                  </div>{' '}
                  Updating card...
                </button>
              }
            </form>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
