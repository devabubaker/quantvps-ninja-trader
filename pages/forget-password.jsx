import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useContext, useState } from 'react'
import { HiOutlineEye } from 'react-icons/hi'
import { HiOutlineEyeOff } from 'react-icons/hi'
import { useSignIn, useSignUp } from '@clerk/nextjs'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { MdError } from 'react-icons/md'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '@/components/ui/input-otp'
import { MyContext } from './_app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { testPassword } from '@/lib/tests'
function ForgetPassword() {
  const { signIn, setActive } = useSignIn()
  const [message, setMessage] = useState({
    success: false,
    text: ''
  })
  const [show, setShow] = useState(false)
  const { isLoaded } = useSignIn()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)

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

  const handleSubmit = async e => {
    e.preventDefault()
    if (!isLoaded) {
      return
    }
    setLoading(true)
    try {
      await signIn?.create({
        strategy: 'reset_password_email_code',
        identifier: email
      })

      setLoading(false)
      setStep(2)
      setMessage({
        success: false,
        text: ''
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
  const router = useRouter()
  const { getCurrentUser } = useContext(MyContext)
  const onPressVerify = async e => {
    e.preventDefault()
    if (!isLoaded) {
      return
    }

    try {
      setLoading(true)
      const completeReset = await signIn?.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code,
        password
      })

      if (completeReset.status !== 'complete') {
        console.log(JSON.stringify(completeReset, null, 2))
      }
      if (completeReset.status === 'complete') {
        // console.log(completeReset., 'complete')
        await setActive({ session: completeReset.createdSessionId })
        // change the UI to our pending section.

        // getCurrentUser(completeReset.createdUserId);
        router.push('/dashboard')
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setMessage({
        success: false,
        text: err?.errors?.[0]?.longMessage
      })
      console.error(JSON.stringify(err, null, 2))
    }
  }
  return (
    <>
      <Head>
        <title>QuantVPS password recovery</title>
      </Head>
      <div className='w-full relative bg-[#131316] min-h-screen'>
        <div className=' p-5 hidden lg:block lg:p-0 left-0 w-full h-full z-20'>
          <div className=' max-w-[1128px]  pt-[330px] relative mx-auto '>
            <div className='w-full lg:w-[701px] mx-auto'>
              <Image
                alt='frame'
                width={2600}
                className=' object-cover '
                height={2000}
                src={'/home/frame.png'}
              />
            </div>
            <div className='absolute -bottom-[90px] -left-[50px] lg:-bottom-[105px]  lg:left-[0px] z-30'>
              <div className='w-[130px] lg:w-[239px]  relative'>
                <Image
                  alt='fan case'
                  width={500}
                  className=' object-cover'
                  height={500}
                  src={'/home/parent.png'}
                />
                <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-20'>
                  <div className='w-[189px]'>
                    <Image
                      alt='fan'
                      width={500}
                      className=' object-cover duration-100 animate-spin'
                      height={500}
                      src={'/home/child.png'}
                    />
                  </div>
                </div>
                <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-30'>
                  <div className='w-[201px]'>
                    <Image
                      alt='logo'
                      width={500}
                      className=' object-cover '
                      height={500}
                      src={'/home/fr.png'}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute bottom-[20px] left-[40px] lg:bottom-[40px] lg:left-[320px] z-30'>
              <div className='w-[130px] lg:w-[239px]  relative'>
                <Image
                  alt='fan case'
                  width={500}
                  className=' object-cover'
                  height={500}
                  src={'/home/parent.png'}
                />
                <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-20'>
                  <div className='w-[189px]'>
                    <Image
                      alt='fan'
                      width={500}
                      className=' object-cover duration-100 animate-spin'
                      height={500}
                      src={'/home/child.png'}
                    />
                  </div>
                </div>
                <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-30'>
                  <div className='w-[201px]'>
                    <Image
                      alt='logo'
                      width={500}
                      className=' object-cover '
                      height={500}
                      src={'/home/fr.png'}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute bottom-[20px] left-[170px] lg:bottom-[40px]  lg:left-[570px] z-30'>
              <div className='w-[130px] lg:w-[239px]  relative'>
                <Image
                  alt='fan case'
                  width={500}
                  className=' object-cover'
                  height={500}
                  src={'/home/parent.png'}
                />
                <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-20'>
                  <div className='w-[189px]'>
                    <Image
                      alt='fan'
                      width={500}
                      className=' object-cover duration-100 animate-spin'
                      height={500}
                      src={'/home/child.png'}
                    />
                  </div>
                </div>
                <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-30'>
                  <div className='w-[201px]'>
                    <Image
                      alt='logo'
                      width={500}
                      className=' object-cover '
                      height={500}
                      src={'/home/fr.png'}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute -bottom-[90px] lg:-bottom-[105px] -right-[50px] lg:right-[0px] z-30'>
              <div className='w-[130px] lg:w-[239px]  relative'>
                <Image
                  alt='fan case'
                  width={500}
                  className=' object-cover'
                  height={500}
                  src={'/home/parent.png'}
                />
                <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-20'>
                  <div className='w-[189px]'>
                    <Image
                      alt='fan'
                      width={500}
                      className=' object-cover duration-100 animate-spin'
                      height={500}
                      src={'/home/child.png'}
                    />
                  </div>
                </div>
                <div className='absolute top-0 flex items-center justify-center left-0 w-full h-full z-30'>
                  <div className='w-[201px]'>
                    <Image
                      alt='logo'
                      width={500}
                      className=' object-cover '
                      height={500}
                      src={'/home/fr.png'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex relative lg:absolute top-0 left-0 w-full min-h-screen h-full z-50 items-center justify-center py-12'>
          <div className=' bg-white min-w-[340px] lg:min-w-[480px] lg:max-w-[480px] p-10 grid rounded-[12px] gap-6'>
            <div className='flex flex-col items-center justify-center gap-2 w-full'>
              <Link href='/' className='flex items-center gap-[10px]'>
                <div className='w-[36px]'>
                  <Image width={137} height={137} alt='' src={'/logo.png'} />
                </div>
                <div>
                  <p className='font-semibold tracking-[0px] leading-[18px] text-main text-[16px] f_bold'>
                    Trading Servers
                  </p>
                  <p className='text-[#262626] opacity-40 pt-[2px]  text-[12px]'>
                    By <span className=' font-semibold'>QuantVPS.com</span>
                  </p>
                </div>
              </Link>
              <p className='text-[14px] text-body'>Forgot Password?</p>
            </div>
            {step === 1 ?
              <form onSubmit={handleSubmit} className='grid gap-4'>
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                    required
                  />
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
                      <p className='flex items-center w-[400px] gap-1 text-[14px] text-red-500'>
                        <div className='w-6'>
                          <MdError className='w-5 h-5' />
                        </div>
                        {message.text}
                      </p>
                    }
                  </>
                }
                {!loading ?
                  <Button type='submit' className='w-full bg-main'>
                    Reset your password
                  </Button>
                  :
                  <Button
                    type='submit'
                    className='w-full flex items-center gap-2 bg-main'>
                    <button className='exampleBtn2'></button>
                    Sending code to email...
                  </Button>
                }
              </form>
              :
              <div>
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
                        <div className='w-6'>
                          <MdError className='w-5 h-5' />
                        </div>
                        {message.text}
                      </p>
                    }
                  </>
                }

                <div className='grid  mt-3 gap-2'>
                  <div className='flex items-center'>
                    <Label htmlFor='password'>Enter your new password</Label>
                  </div>
                  <div className='relative'>
                    {!show ?
                      <Input
                        onChange={e => blurTest(e.target.value)}
                        id='password'
                        type='password'
                        required
                      />
                      :
                      <Input
                        onChange={e => blurTest(e.target.value)}
                        id='passwordtext'
                        type='text'
                        required
                      />
                    }
                    <div className='absolute top-[10px] right-2 z-10 '>
                      {!show ?
                        <HiOutlineEye
                          className='w-4 h-4 text-body cursor-pointer'
                          onClick={() => setShow(!show)}
                        />
                        :
                        <HiOutlineEyeOff
                          onClick={() => setShow(!show)}
                          className='w-4 h-4 text-body cursor-pointer'
                        />
                      }
                    </div>
                  </div>
                </div>

                {code.length >= 6 && password !== '' ?
                  <>
                    {!loading ?
                      <button
                        onClick={onPressVerify}
                        className='mt-4 w-full bg-main flex items-center justify-center py-[10px] rounded-[8px] text-white '>
                        Change Password
                      </button>
                      :
                      <button className='mt-4 w-full opacity-50 bg-main flex items-center gap-2 justify-center py-[10px] rounded-[8px] text-white '>
                        <button className='exampleBtn2'></button>
                        Changing Password...
                      </button>
                    }
                  </>
                  :
                  <button className='mt-4 w-full bg-main opacity-30 flex items-center justify-center py-[10px] rounded-[8px] text-white '>
                    Change Password
                  </button>
                }
              </div>
            }
            <div className='mt-4 text-center text-sm'>
              Already have an account?{' '}
              <Link href='/login' className='underline'>
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword
