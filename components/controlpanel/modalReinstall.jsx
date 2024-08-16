import { Fragment, useRef, useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { MyContext } from '@/pages/_app'
import { reinstallServer, stripeUpdateMeta } from '@/datawagon'
import { useUser } from '@clerk/nextjs'
import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog'

// import { postNotificaiton } from '@/lib/postNofication'
import Link from 'next/link'
import { HoldToConfirmFinal } from '../custom/CustomButton'
import { testPassword } from '@/lib/tests'
export default function ModalReinstall({
  open,
  setOpen,
  osID,
  allOS,
  getProductData,
  setRloading
}) {
  const [step, setstep] = useState(1)
  const [loading, setLoading] = useState(false)
  const cancelButtonRef = useRef(null)
  const { currentServer, getCurrentUser, thisUser } = useContext(MyContext)
  const [operatingSystem, setOperatingSystem] = useState(null)
  const { user } = useUser()

  useEffect(() => {
    if (osID) {
      const filterItem = allOS?.filter(
        item => parseInt(item.osid) === parseInt(osID)
      )?.[0]
      setOperatingSystem(filterItem)
    }
  }, [allOS, osID])

  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const submitReinstall = async () => {
    if (testPassword(password)) {
      setMessage('')
      setLoading(true)
      const getDomainItem = allOS.filter(item => item.osid === osID)?.[0]
      const getDomain = getDomainItem?.name?.includes('ubuntu')
        ? 'root'
        : 'Administrator'
      const params = {
        osid: Number(osID),
        id: currentServer.dataWagan.id,
        password,
        password_confirm: password,
        custom: false
      }
      const data = await reinstallServer(params)
      const metadata = {
        subscriptionId: currentServer.ourServer.sub_id,
        login: getDomain,
        password,
        os: getDomainItem.name,
        geo: currentServer?.geo,
        userid: user.id
      }
      await stripeUpdateMeta(metadata)
      setRloading(true)
      // await postNotificaiton(
      //   `reinstall ${currentServer?.dataWagan?.domain} (server #${currentServer?.custom_id})`,
      //   thisUser?.id
      // )
      await getCurrentUser(user.id)
      await getProductData(currentServer?.dataWagan?.id)
      setOpen(false)
      setLoading(false)
    } else {
      setMessage(
        'Password must contain an uppercase character, lower case character, a symbol ($,%,#), and be 8 characters long.'
      )
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        {step === 1 &&
          <div className='max-w-[520px]'>
            <div className='bg-white rounded-[12px] px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div className='text-left'>
                  <h1 className='text-[24px] pb-4 font-semibold leading-6 text-gray-900'>
                    Confirm Server Rebuild
                  </h1>

                  <div className='mt-2'>
                    <p className='text-[14px] text-main pb-5'>
                      Please confirm that you would like to reinstall <br />{' '}
                      <span className=' font-semibold underline '>
                        {operatingSystem?.name}
                      </span>{' '}
                      on{' '}
                      <span className=' font-semibold underline '>
                        {currentServer?.ourServer?.domain} #
                        {currentServer?.custom_id}
                      </span>
                      <br />
                      <br />
                      After continuing, your server may not be accessible for up
                      to 90 minutes while the new operating system is installed.
                      All data will be destroyed. You may restore from a backup
                      once the reinstall is complete.
                    </p>

                    <div className='text-[14px] flex items-center flex-wrap gap-1 text-[#666666]'>
                      *Make sure your data is backed up by visiting
                      <Link
                        className='text-[#0068D6] flex items-center '
                        href={'/dashboard/backups'}>
                        Backups
                        <div className='w-[17px]'>
                          <Image
                            alt='external link'
                            width={300}
                            height={300}
                            src={'/link.svg'}
                            className='object-cover'
                          />
                        </div>
                      </Link>
                    </div>
                    <div className='text-[14px] bg-[#FFEBEB] rounded-[10px] px-3 py-2 mt-3'>
                      <span className=' font-medium text-main'>Warning:</span>{' '}
                      <span className='text-[#CB2A2F]'>
                        This action is not reversible. Please be certain.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form
              onSubmit={e => {
                e.preventDefault()
              }}
              className='px-6'>
              <p className='text-[14px] text-body pb-2'>
                To verify, type{' '}
                <span className=' font-medium'>
                  enter a new server login password
                </span>{' '}
                below:
              </p>
              <div className='relative'>
                <input
                  onChange={e => setPassword(e.target.value)}
                  type='text'
                  required
                  className='border w-full outline-none px-2 rounded-[6px] bg-white py-2 text-[14px]'
                  placeholder='password'
                />
                <div className=' absolute top-3 right-3 z-10'>
                  <div className='w-[12px]'>
                    <Image
                      alt='locker sign'
                      width={300}
                      height={300}
                      src={'/home/lock.svg'}
                      className='object-cover'
                    />
                  </div>
                </div>
              </div>
              {message !== '' &&
                <p className='text-[14px] text-center px-3 text-red-500 py-2'>
                  {message}
                </p>
              }
              <div className='bg-gray-50 w-full py-3 mt-3 flex items-center justify-between '>
                {!loading ?
                  <button
                    type='button'
                    className=' inline-flex  justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={() => {
                      setOpen(false)
                      setMessage('')
                    }}
                    ref={cancelButtonRef}>
                    Cancel
                  </button>
                  :
                  <div></div>
                }
                {!loading ?
                  <>
                    <HoldToConfirmFinal
                      text='Reinstall'
                      onConfirm={() => submitReinstall()}
                    />
                    {/* <button
                    type="submit"

                    className=""

                  >
                    Reinstall    <div className='w-[14px] cursor-pointer'>
                      <Image width={300} height={300} src={'/reboot.svg'} className='object-cover' />
                    </div>
                  </button> */}
                  </>
                  :
                  <button
                    type='submit'
                    className='flex items-center gap-1  justify-center rounded-md bg-[#DA2F35] px-4 py-2 text-[14px]  text-white'>
                    <div className='w-[13px]  duration-100 ease-linear animate-spin  cursor-pointer'>
                      <Image
                        alt='loading'
                        width={300}
                        height={300}
                        src={'/loading.png'}
                        className='object-cover'
                      />
                    </div>
                    Reinstalling...
                  </button>
                }
              </div>
            </form>
          </div>
        }
      </AlertDialogContent>
    </AlertDialog>
  )
}
