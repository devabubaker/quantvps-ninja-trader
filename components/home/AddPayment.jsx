import { useContext, useState } from 'react'
import Image from 'next/image'
// import { addUserInfo } from "@/lib/addUserInfo";
import { useUser } from '@clerk/nextjs'
import { useToast } from '@/components/ui/use-toast'

import { IoClose } from 'react-icons/io5'
import { useSignUp } from '@clerk/nextjs'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '@/components/ui/input-otp'
import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { MdError } from 'react-icons/md'
import { MyContext } from '../../pages/_app'
import { testPassword } from '@/lib/tests'

export default function AddPayment({ open, setOpen, setOpen1 }) {
  const { toast } = useToast()

  const { signUp, setActive } = useSignUp()
  const { user, isLoaded, isSignedIn } = useUser()
  const [step, setStep] = useState(1)
  const [errorMessage, setErrorMessage] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [input1Value, setInput1Value] = useState('')
  const [input2Value, setInput2Value] = useState('')
  const [cvc, setCvc] = useState('')
  const [zip, setZip] = useState('')
  const [address, setaddress] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

  const [name, setName] = useState('')

  const handleFormSubmit = async userid => {
    const card_info = {
      card_number: cardNumber,
      expirationDate: input1Value,
      expirationYear: input2Value,
      cvc: cvc,
      zip: zip,
      address: address
    }
    let userdata = null // TODO await addUserInfo(name, email, userid, card_info);
    toast({
      title: 'Payment card added.',
      description: 'Successfully Added Payment Card Info.'
    })

    // Perform form submission logic here, including additional validation if needed
  }

  const [message, setMessage] = useState({
    success: false,
    text: ''
  })

  const blurTest = pass => {
    if (testPassword(pass)) {
      setPassword(pass)
      setMessage({
        success: true,
        text: 'Your password meets all the necessary requirements.'
      })
    } else {
      setPassword(pass)
      setMessage({
        success: false,
        text: 'Your password must contain 8 or more characters. '
      })
    }
  }
  const [loading, setLoading] = useState(false)
  const handleSubmit = async e => {
    e.preventDefault()
    if (!isLoaded) {
      return
    }
    setLoading(true)
    try {
      await signUp.create({
        emailAddress: email,
        password: password
      })

      // send the email.
      await signUp.prepareEmailAddressVerification({
        strategy: 'email_code'
      })
      setLoading(false)
      setStep(3)
      setMessage({
        success: true,
        text: 'Your password meets all the necessary requirements.'
      })
    } catch (err) {
      setMessage({
        success: false,
        text: err?.errors?.[0]?.message
      })
      setLoading(false)
      console.error(JSON.stringify(err, null, 2))
    }
  }
  const [code, setcode] = useState('')
  const [codeMsg, setCodeMsg] = useState('')
  const onPressVerify = async e => {
    e.preventDefault()
    if (!isLoaded) {
      return
    }

    try {
      setLoading(true)
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code
      })

      if (completeSignUp.status !== 'complete') {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        setCodeMsg('Incorrect Code.')

        console.log(JSON.stringify(completeSignUp, null, 2))
      }
      if (completeSignUp.status === 'complete') {
        setCodeMsg('')
        await setActive({ session: completeSignUp.createdSessionId })
        // change the UI to our pending section.
        await handleFormSubmit(completeSignUp.createdUserId)
        getCurrentUser(completeSignUp.createdUserId)
        setOpen(false)
        setOpen1(true)
        setStep(1)
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setCodeMsg('Incorrect Code.')
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <div className='w-full min-w-[512px] max-w-[512px] rounded-[20px] bg-white'>
          <div className=' bg_radial relative w-full border-b border-[#E5E7EB] py-5'>
            <div className='absolute z-20 top-2 right-3'>
              <IoClose
                onClick={() => {
                  setOpen(false)
                  //   setStep(1);
                }}
                className='w-7 h-7 text-gray-500 cursor-pointer'
              />
            </div>
            <div className='max-w-[382px]  mx-auto'>
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

              {step === 1 &&
                <h1 className='text-[24px] pt-4 leading-[32px] font-semibold text-main '>
                  Deploy Server <br />
                  <span className='text-body font-normal'>
                    Please Add Payment Method
                  </span>
                </h1>
              }
              {step === 2 &&
                <h1 className='text-[24px] pt-4 leading-[32px] font-semibold text-main '>
                  Deploy Server <br />
                  <span className='text-body font-normal'>
                    Create A New Account
                  </span>
                </h1>
              }
              {step === 3 &&
                <h1 className='text-[24px] pt-4 leading-[32px] font-semibold text-main '>
                  Verify your email <br />
                  <span className='text-body font-normal'>
                    To Continue To QuantVPS
                  </span>
                </h1>
              }
            </div>
          </div>
          <div className='bg-[#F9FAFB] w-full py-5'>
            {step === 1 &&
              <form
                onSubmit={e => {
                  e.preventDefault()
                  setStep(2)
                }}
                className='max-w-[382px] mx-auto'>
                <div>
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

                <p className='text-[#52525A] pt-2 text-[16px] pb-2'>
                  Card Number
                </p>
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
                          alt='card cvc'
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
                <div className='pt-4 '>
                  <p className='text-[#52525A] text-[16px] pb-1'>Address</p>
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
                {errorMessage !== '' &&
                  <p className='text-red-500 py-3'>{errorMessage}</p>
                }
                <button
                  type='submit'
                  className='mt-4 w-full bg-main flex items-center justify-center py-[10px] rounded-[8px] text-white '>
                  Next
                </button>
              </form>
            }
            {step === 2 &&
              <form onSubmit={handleSubmit} className='max-w-[382px] mx-auto'>
                <div className='pt-4 '>
                  <p className='text-[#52525A] text-[16px] pb-1'>Email</p>
                  <div className='flex items-center gap-2 pr-2 overflow-hidden border rounded-[8px] bg-white'>
                    <input
                      type='email'
                      required
                      onChange={e => setEmail(e.target.value)}
                      className='w-full outline-none font-light border-none py-[8px] px-[10px] text-[14px]'
                      placeholder='ken@gmail.com'
                    />
                  </div>
                </div>
                <div className='pt-4 pb-4'>
                  <p className='text-[#52525A] text-[16px] pb-1'>Password</p>
                  <div className='flex items-center gap-2 pr-2 overflow-hidden border rounded-[8px] bg-white'>
                    <input
                      type='text'
                      required
                      onChange={e => blurTest(e.target.value)}
                      className='w-full outline-none font-light border-none py-[8px] px-[10px] text-[14px]'
                      placeholder='********'
                    />
                  </div>
                </div>
                {message.text !== '' &&
                  <>
                    {message.success ?
                      <p className='flex items-center gap-1 text-[14px] text-body'>
                        {' '}
                        <IoCheckmarkCircleSharp className='text-green-500 w-5 h-5' />{' '}
                        {message.text}
                      </p>
                      :
                      <p className='flex items-center gap-1 text-[14px] text-red-500'>
                        <MdError className='w-5 h-5' />
                        {message.text}
                      </p>
                    }
                  </>
                }
                {!loading ?
                  <button
                    type='submit'
                    className='mt-4 w-full bg-main flex items-center justify-center py-[10px] rounded-[8px] text-white '>
                    Create an Account
                  </button>
                  :
                  <button
                    type='submit'
                    className='mt-4 w-full bg-main flex items-center gap-2 justify-center py-[10px] rounded-[8px] text-white '>
                    <div className='w-[13px] animate-spin duration-100 ease-linear cursor-pointer'>
                      <Image
                        alt='loading'
                        width={300}
                        height={300}
                        src={'/loading.png'}
                        className='object-cover'
                      />
                    </div>{' '}
                    Sending Code To Your Email...
                  </button>
                }
              </form>
            }
            {step === 3 &&
              <div className='px-[40px]'>
                <div className='flex'>
                  <div className='border text-[14px] mt-5 flex items-center gap-2 text-body px-[20px] py-[8px] rounded-[23px]'>
                    <MdOutlineMarkEmailRead className='w-5 h-5' /> {email}
                  </div>
                </div>
                <p className='text-main text-[14px] mt-4'>Verfication code</p>
                <p className='text-[12px] text-body'>
                  Enter the verification code sent to your email address
                </p>

                <div className='py-3'>
                  <InputOTP onChange={value => setcode(value)} maxLength={6}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                {codeMsg !== '' &&
                  <p className='flex mb-3 items-center gap-1 text-[14px] text-red-500'>
                    <MdError className='w-5 h-5' />
                    {codeMsg}
                  </p>
                }

                {code.length >= 6 ?
                  <>
                    {!loading ?
                      <button
                        onClick={onPressVerify}
                        className='mt-4 w-full bg-main flex items-center justify-center py-[10px] rounded-[8px] text-white '>
                        Verify Email
                      </button>
                      :
                      <button className='mt-4 w-full opacity-50 bg-main flex items-center gap-2 justify-center py-[10px] rounded-[8px] text-white '>
                        <div className='w-[13px] animate-spin duration-100 ease-linear cursor-pointer'>
                          <Image
                            alt='loading'
                            width={300}
                            height={300}
                            src={'/loading.png'}
                            className='object-cover'
                          />
                        </div>{' '}
                        Verifing...
                      </button>
                    }
                  </>
                  :
                  <button className='mt-4 w-full bg-main opacity-30 flex items-center justify-center py-[10px] rounded-[8px] text-white '>
                    Verify Email
                  </button>
                }
              </div>
            }
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
