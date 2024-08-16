import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCallback, useState } from 'react'
import { HiOutlineEye } from 'react-icons/hi'
import { HiOutlineEyeOff } from 'react-icons/hi'
import { useSignIn, useUser } from '@clerk/nextjs'
import { useRouter, useSearchParams } from 'next/navigation'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { MdError } from 'react-icons/md'
import { useEffect } from 'react'
import Head from 'next/head'

function Login() {
  const router = useRouter()
  const params = useSearchParams()
  const { signIn, setActive } = useSignIn()
  const { isLoaded } = useUser()
  const [message, setMessage] = useState({
    success: false,
    text: ''
  })
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const ticket = params.get('__clerk_ticket')

  // Handle the submission of the sign-in form
  const handleSubmit = async e => {
    e.preventDefault()
    if (!isLoaded) {
      return
    }

    // Start the sign-in process using the email and password provided
    try {
      setLoading(true)
      const completeSignIn = await signIn.create({
        identifier: email,
        password
      })

      if (completeSignIn.status !== 'complete') {
        setLoading(false)
        // The status can also be `needs_factor_on', 'needs_factor_two', or 'needs_identifier'
        // Please see https://clerk.com/docs/references/react/use-sign-in#result-status for  more information
        console.log(completeSignIn)
      }

      if (completeSignIn.status === 'complete') {
        // TODO check this flow
        // If complete, user exists and provided password match -- set session active
        await setActive({ session: completeSignIn.createdSessionId })
        // Redirect the user to a post sign-in route
        router.push('/dashboard')
        // setLoading(false)
      }
    } catch (err) {
      setLoading(false)
      setMessage({
        success: false,
        text: err?.errors?.[0]?.message
      })
      // This can return an array of errors.
      // See https://clerk.com/docs/custom-flows/error-handling to learn about error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  const impersonate = useCallback(async () => {
    if (ticket && router && signIn) {
      const auth = await signIn.create({
        strategy: 'ticket',
        ticket
      })
      if (auth.status === 'complete') {
        await setActive({ session: auth.createdSessionId })
        router.replace('/dashboard')
      }
    }
  }, [router, setActive, signIn, ticket])

  useEffect(() => {
    impersonate()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>QuantVPS Login</title>
      </Head>
      <div className='w-full relative grid grid-cols-1 lg:grid-cols-3 bg-[#131316] min-h-screen'>
        <div className=' min-h-screen flex items-center justify-center w-full lg:col-span-2'>
          <div className='  min-w-[340px] lg:max-w-[480px] lg:min-w-[480px] p-5 lg:p-10 grid rounded-[12px] gap-6'>
            <Link
              href='/'
              className='flex relative mb-4 lg:hidden  items-center gap-[10px]'>
              <div className='w-[36px]'>
                <Image width={137} height={137} alt='' src={'/logo.png'} />
              </div>
              <div>
                <p className='font-semibold tracking-[0px] leading-[18px] text-white text-[16px] f_bold'>
                  Trading Servers
                </p>
                <p className='text-body  pt-[2px]  text-[12px]'>
                  By <span className=' font-semibold'>QuantVPS.com</span>
                </p>
              </div>
            </Link>
            <h1 className='text-2xl font-semibold text-white'>Sign in</h1>
            <form onSubmit={handleSubmit} className='grid gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='email' className='text-white'>
                  Email
                </Label>
                <Input
                  id='email'
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  className='bg-gray-100 text-white bg-opacity-10 border
                  focus:border-blue-600 border-opacity-10  focus:shadow-sh'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <div className='flex items-center'>
                  <Label htmlFor='password' className='text-white'>
                    Password
                  </Label>
                </div>
                <div className='relative'>
                  {!show ?
                    <Input
                      onChange={e => setPassword(e.target.value)}
                      id='password'
                      type='password'
                      className='bg-gray-100 text-white bg-opacity-10 border
                      focus:border-blue-600 border-opacity-10  focus:shadow-sh'
                      required
                    />
                    :
                    <Input
                      onChange={e => setPassword(e.target.value)}
                      id='passwordtext'
                      type='text'
                      className='bg-gray-100 text-white bg-opacity-10 border
                      focus:border-blue-600 border-opacity-10  focus:shadow-sh'
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
              <Link href='/forget-password' className='   text-sm text-body'>
                Forgot your password?
              </Link>
              {!loading ?
                <Button
                  type='submit'
                  className='w-full py-[9px] text-main bg-white hover:bg-white hover:text-main'>
                  Sign in
                </Button>
                :
                <Button
                  type='button'
                  className='w-full py-[9px] flex items-center cursor-default
                  gap-2 text-main bg-white hover:bg-white hover:text-main'>
                  Signing in...
                </Button>
              }
            </form>
            {/*           <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/#pricing" className="underline">
              Sign up
            </Link>
          </div> */}
          </div>
        </div>
        <div
          className=' min-h-screen  relative lg:flex flex-col items-start
        justify-center hidden  border-l border-white border-opacity-10'>
          <Link
            href='/'
            className='flex relative -left-[18px]  items-center gap-[10px]'>
            <div className='w-[36px]'>
              <Image width={137} height={137} alt='' src={'/logo.png'} />
            </div>
            <div>
              <p className='font-semibold tracking-[0px] leading-[18px] text-white text-[16px] f_bold'>
                Trading Servers
              </p>
              <p className='text-body  pt-[2px]  text-[12px]'>
                By <span className=' font-semibold'>QuantVPS.com</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login
