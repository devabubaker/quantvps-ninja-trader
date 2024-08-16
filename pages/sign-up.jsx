import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useContext, useState, useEffect } from 'react'
import { HiOutlineEye } from 'react-icons/hi'
import { HiOutlineEyeOff } from 'react-icons/hi'
import { useClerk, useSignIn, useSignUp, useUser } from '@clerk/nextjs'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { MdError } from 'react-icons/md'

import { Checkbox } from '@/components/ui/checkbox'
// import { addUserInfo } from "../lib/addUserInfo";
// import { getuserwithEmail } from "../lib/user/getuserwithEmail";
import createStripeUser from '../stripe/create-stripe-user'
import Head from 'next/head'
import { testPassword } from '@/lib/tests'

function Signup() {
  const { signUp, setActive } = useSignUp()
  const [message, setMessage] = useState({
    success: false,
    text: ''
  })
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const { isLoaded, isSignedIn } = useUser()
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
      const completeSignUp = await signUp.create({
        emailAddress: email,
        password: password
      })

      const maticLick = await signUp.prepareEmailAddressVerification({
        strategy: 'email_link',
        redirectUrl: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/overview`
      })

      const response = await createStripeUser(email, name)
      // const responseData = await response.json();
      // if (completeSignUp.status && responseData.customer) {
      //   const getuser = await getuserwithEmail(email)
      //   // if (getuser?.length === 0) {
      //   //   await addUserInfo(name, email, "", null, responseData.customer);
      //   // }
      // }

      setLoading(false)
      setStep(2)
      setMessage({
        success: true,
        text: 'Your password meets all the necessary requirements.'
      })

      // router.push("/dashboard");
    } catch (err) {
      setMessage({
        success: false,
        text: 'Something went wrong!'
      })
      setLoading(false)

      console.error(JSON.stringify(err, null, 2))
    }
  }
  const { signOut } = useClerk()
  useEffect(() => {
    if (isLoaded) {
      signOut()
    }
  }, [isLoaded, signOut])
  return (
    <>
      <Head>
        <title>Sign-up QuantVPS</title>
      </Head>
      <div className='w-full relative bg-[#131316] min-h-screen'>
        <div className=' p-5 hidden lg:block transform scale-90 lg:p-0 left-0 w-full h-full z-20'>
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
          <div className=' bg-white min-w-[340px] max-w-[370px] lg:max-w-[480px] lg:min-w-[480px] p-5 lg:p-10 grid rounded-[12px] gap-6'>
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
              <p className='text-[14px] text-body'>Create a new account.</p>
            </div>
            {step === 1 ?
              <form onSubmit={handleSubmit} className='grid gap-4'>
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Name</Label>
                  <Input
                    id='name'
                    onChange={e => setName(e.target.value)}
                    type='text'
                    required
                  />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                    required
                  />
                </div>
                <div className='grid gap-2'>
                  <div className='flex items-center'>
                    <Label htmlFor='password'>Password</Label>
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
                <div className='flex items-center space-x-2'>
                  <Checkbox required id='terms' />
                  <label
                    htmlFor='terms'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                    By signing up, I agree to the QuantVPS terms.
                  </label>
                </div>
                {message.text !== '' ?
                  <>
                    {message.success ?
                      <p className='flex items-center gap-1 text-[12px] lg:text-[14px] text-body'>
                        {' '}
                        <IoCheckmarkCircleSharp className='text-green-500 w-5 h-5' />{' '}
                        {message.text}
                      </p>
                      :
                      <p className='flex items-center gap-1 text-[12px] lg:text-[14px] text-red-500'>
                        <div className='w-6'>
                          <MdError className='w-5 h-5' />
                        </div>
                        {message.text}
                      </p>
                    }
                  </>
                  :
                  <>
                    <p className='flex opacity-0  items-center gap-1 text-[12px] lg:text-[14px] text-body'>
                      Hello hello hlelo
                    </p>
                  </>
                }
                {!loading ?
                  <Button type='submit' className='w-full bg-main'>
                    Sign up
                  </Button>
                  :
                  <Button
                    type='submit'
                    className='w-full flex items-center gap-2 bg-main'>
                    <div className='w-[13px] animate-spin duration-100 ease-linear cursor-pointer'>
                      <Image
                        alt='loading'
                        width={300}
                        height={300}
                        src={'/loading.png'}
                        className='object-cover'
                      />
                    </div>{' '}
                    Creating an account...
                  </Button>
                }
              </form>
              :
              <div className='px-[40px]'>
                <div className='flex'>
                  <div className='border text-[14px] mt-5 flex items-center gap-2 text-body px-[20px] py-[8px] rounded-[23px]'>
                    <MdOutlineMarkEmailRead className='w-5 h-5' /> {email}
                  </div>
                </div>
                <p className='text-main text-[14px] mt-4'>Verfication Link</p>
                <p className='text-[12px] text-body'>
                  A verification link has been sent to your email address.
                </p>

                <Link href='/'>
                  <button className='mt-4 w-full bg-main flex items-center justify-center py-[10px] rounded-[8px] text-white '>
                    Back to home
                  </button>
                </Link>
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

export default Signup
