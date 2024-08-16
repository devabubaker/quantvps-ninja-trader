import React, { useState, useEffect, useContext, useCallback } from 'react'
// import GlobLayout from "../components/layout/GlobLayout";
import Image from 'next/image'
import {
  backupMade,
  restoreBackup,
  deleteBackup,
  backupToggle,
  checkbackup,
  backupShedule,
  serverBackupData
} from '@/datawagon'
import { MyContext } from '../_app'
import ReverseClock from '@/components/backup/ReverseClock'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { postNotificaiton } from '@/lib/postNofication'
import { BiUpArrowCircle } from 'react-icons/bi'
import Skeleton from '../../components/global/Skeleton'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import Head from 'next/head'
const Backups = () => {
  const { toast } = useToast()
  const { user } = useUser()
  const [active, setActive] = useState(false)
  const [loadAgain, setLoadAgain] = useState(false)
  const { currentServer, getCurrentUser, thisUser } = useContext(MyContext)
  const [loading, setLoading] = useState(true)
  const [allBackupData, setAllBackupData] = useState([])
  const [nextBackupdate, setNextBackupdate] = useState(0)
  const [overfive, setOverfive] = useState(null)
  const [backupLoading, setBackupLoading] = useState(false)

  const checkAutoBackup = useCallback(async id => {
    const data = await checkbackup(id)
    if (data?.isEnabled === 1) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [])

  const checkNextBackup = useCallback(async id => {
    const data = await backupShedule(id)
    let keys = Object.keys(data)
    if (keys.length > 0) {
      // Access the value of the first property using the first key
      let firstValue = data[keys[0]]
      setNextBackupdate(firstValue * 1000)
    } else {
      console.log('Object has no properties')
    }

    // console.log("data", data);
  }, [])

  const checkPreviousBackup = useCallback(
    async id => {
      const data = await serverBackupData(id)
      data.backups.forEach((item, ind) => {
        if (ind === 0) {
          overFiveMin(item?.ctime)
        }
      })
      if (data?.backups) {
        setAllBackupData(data?.backups || [])
        setLoading(false)
      } else {
        toast({
          variant: 'destructive',
          open: true,
          title: 'Issues with Backups',
          description: 'We are working on the issue'
        })
      }
    },
    [toast]
  )

  const overFiveMin = timestamp => {
    var currentTimestamp = Date.now() / 1000
    var differenceInSeconds = currentTimestamp - timestamp
    var differenceInMinutes = differenceInSeconds / 60
    var isOver5Minutes = differenceInMinutes > 5
    setOverfive(isOver5Minutes)
  }

  useEffect(() => {
    if (currentServer) {
      setLoadAgain(false)
      checkPreviousBackup(currentServer?.dataWagan?.id)
      checkAutoBackup(currentServer?.dataWagan?.id)
      checkNextBackup(currentServer?.dataWagan?.id)
    }
  }, [checkAutoBackup, checkNextBackup, checkPreviousBackup, currentServer])

  useEffect(() => {
    if (overfive !== null && !overfive) {
      toast({
        variant: 'destructive',
        open: true,
        title: 'Server is undergoing backup.',

        description: 'Control panel is currently unavailable.'
      })
    }
  }, [overfive, toast])

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  const formateData = timestamp => {
    var date = new Date(timestamp * 1000)
    var formattedDate =
      ('0' + date.getDate()).slice(-2) +
      '/' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '/' +
      date.getFullYear() +
      ', ' +
      ('0' + date.getHours()).slice(-2) +
      ':' +
      ('0' + date.getMinutes()).slice(-2) +
      ':' +
      ('0' + date.getSeconds()).slice(-2)

    return formattedDate
  }

  const takeBackup = async () => {
    const data = await backupToggle(currentServer?.dataWagan?.id)
    if (data) {
      setLoadAgain(true)
      toast({
        title: 'Taking Backup.',
        description: 'Successfully Taking Backup Now.'
      })
    }
  }

  const deleteBackupFunc = async volid => {
    const data = await deleteBackup(currentServer?.dataWagan?.id, volid)
    if (data) {
      setLoadAgain(true)
      toast({
        title: 'Backup Deleted.',
        description: 'Successfully Deleted Backup.'
      })
    }
  }

  const restoreBackupFunc = async volid => {
    const data = await restoreBackup(currentServer?.dataWagan?.id, volid)
    if (data) {
      setLoadAgain(true)
      toast({
        title: 'Restore Backup.',
        description: 'Successfully Restored Backup.'
      })
    }
  }

  const backupmadeToggle = async () => {
    setBackupLoading(true)
    const data = await backupMade(currentServer?.dataWagan?.id)
    if (data) {
      setBackupLoading(false)
      if (!active) {
        setActive(!active)
        toast({
          title: 'Backups Enabled',
          description: 'Successfully Enabled Backup.'
        })

        await postNotificaiton(
          `enabled backups ${currentServer?.dataWagan?.domain} (server #${currentServer?.custom_id})`,
          thisUser?.id
        )
      } else {
        setActive(!active)
        toast({
          title: 'Backups Disabled',
          description: 'Successfully Disabled Backup.'
        })

        await postNotificaiton(
          `disabled backups ${currentServer?.dataWagan?.domain} (server #${currentServer?.custom_id})`,
          thisUser?.id
        )
      }
      getCurrentUser(user.id)
    }
  }

  return (
    <>
      <Head>
        <title>Backups</title>
      </Head>
      <div className='lg:max-w-[1200px] py-[40px] mx-auto px-4'>
        <h1 className='text-main font-semibold text-[32px]'>Backups</h1>
        <div className='text-[14px] mt-2 flex items-center gap-1 text-[#666666]'>
          Never lose your data.
          <Link className='text-[#0068D6] flex items-center ' href={'/'}>
            Learn more
            <div className='w-[17px]'>
              <Image
                alt='external link'
                width={300}
                height={300}
                src={'/link.svg'}
                className='object-cover'
              />
            </div>{' '}
          </Link>
        </div>
      </div>

      <div className='bg-[#FAFAFA] min-h-screen py-[40px]'>
        <div className='max-w-[800px] px-3 lg:p-0 mx-auto'>
          <div className='flex items-center justify-center w-full mb-5'>
            <div className='w-[60px]'>
              <Image
                alt='backup'
                width={300}
                height={300}
                src={'/backup.png'}
                className='object-cover'
              />
            </div>
          </div>
          <>
            {!loading ?
              <div className='mt-5 bg-white overflow-hidden w-full border rounded-[6px]'>
                <div className=' pt-5 px-5'>
                  <h1 className='text-main text-[20px] font-semibold'>
                    Automatic Backups
                  </h1>

                  <div className='flex items-center gap-2 py-4 '>
                    <div
                      onClick={() => backupmadeToggle()}
                      className={` flex items-center transition-all ${
                        active
                          ? ' justify-end bg-[#0070F3] '
                          : 'justify-start bg-[#333536] '
                      } ease-linear duration-75 cursor-pointer w-[40px] p-[1px] rounded-full`}>
                      <div className='w-[22px] h-[22px] bg-white rounded-full'></div>
                    </div>
                    {backupLoading &&
                      <div className='w-[16px] animate-spin duration-100 ease-linear cursor-pointer'>
                        <Image
                          alt='loading'
                          width={300}
                          height={300}
                          src={'/loading.png'}
                          className='object-cover'
                        />
                      </div>
                    }
                    {!backupLoading ?
                      <p className='text-[14px] text-main'>
                        {active ? 'Enabled' : 'Disabled'}
                      </p>
                      :
                      <p className='text-[14px] text-main'>
                        {active ? 'Disabling...' : 'Enabling..'}
                      </p>
                    }
                  </div>
                </div>

                <div className=' px-5 py-4 bg-[#FAFAFA] flex border-t items-center justify-between'>
                  <div className='text-[14px] mt-2 flex items-center gap-1 text-[#666666]'>
                    Learn more about
                    <Link
                      className='text-[#0068D6] flex items-center '
                      href={'/'}>
                      Automatic backups
                      <div className='w-[17px]'>
                        <Image
                          alt='external link'
                          width={300}
                          height={300}
                          src={'/link.svg'}
                          className='object-cover'
                        />
                      </div>{' '}
                    </Link>
                  </div>

                  {/* <button className="px-[15px] py-[8px] text-white text-[14px] bg-main rounded-[8px]">
                    Save
                  </button> */}
                </div>
              </div>
              :
              <Skeleton className={'w-full h-[169px]'} />
            }
            {!loading ?
              <div className='bg-white  mt-5  border rounded-[5px]'>
                <div className='py-4  px-5 flex flex-wrap gap-2 lg:gap-0 items-center border-b justify-between'>
                  <div className='flex items-center gap-5'>
                    <div className='w-[36px]'>
                      <Image
                        alt='backup'
                        width={300}
                        height={300}
                        src={'/bak.png'}
                        className='object-cover'
                      />
                    </div>
                    <div>
                      <div className='flex items-center gap-2'>
                        <h1 className='text-main font-semibold text-[14px]'>
                          {currentServer?.dataWagan?.domain} - Server #
                          {currentServer?.custom_id}{' '}
                        </h1>{' '}
                        <div className='px-2 py-1 flex items-center gap-1 rounded-[31px] bg-opacity-10 bg-[#666666]'>
                          <BiUpArrowCircle className='text-[#666666]' />
                          <p className='font-semibold text-[11px] text-[#666666]'>
                            Current
                          </p>
                        </div>
                      </div>
                      <div className='text-body text-[13px] pt-1 flex items-center gap-1'>
                        Next Backup In:{' '}
                        <ReverseClock targetDate={nextBackupdate} />
                      </div>
                    </div>
                  </div>
                  {overfive ?
                    <button
                      onClick={takeBackup}
                      className='border px-[15px] rounded-[6px] py-[8px] text-[14px] text-main '>
                      Backup Now
                    </button>
                    :
                    <button className='border px-[15px] rounded-[6px] bg-gray-100 py-[8px] text-[14px] text-gray-500 cursor-default '>
                      Backup Now
                    </button>
                  }
                </div>
                {allBackupData?.map((item, ind) =>
                  <div
                    key={ind}
                    className='py-4  px-5 flex flex-wrap gap-2 lg:gap-0 items-center border-b justify-between'>
                    <div className='flex items-center gap-5'>
                      <div className='w-[36px]'>
                        <Image
                          alt='backup'
                          width={300}
                          height={300}
                          src={'/bak.png'}
                          className='object-cover'
                        />
                      </div>
                      <div>
                        <div className='flex items-center gap-2'>
                          <h1 className='text-main font-semibold text-[14px]'>
                            {currentServer?.dataWagan?.domain} - Server #
                            {currentServer?.custom_id}
                          </h1>
                          {ind == 0 &&
                            <div className='px-2 py-1 flex items-center gap-1 rounded-[31px] bg-[#EBF5FF]'>
                              <div className='w-[11px]'>
                                <Image
                                  alt='small arrow up'
                                  width={300}
                                  height={300}
                                  src={'/upa.svg'}
                                  className='object-cover'
                                />
                              </div>
                              <p className='font-semibold text-[11px] text-[#0068D6]'>
                                Latest{' '}
                                <span className='hidden lg:inline-flex'>
                                  Backup
                                </span>
                              </p>
                            </div>
                          }
                        </div>
                        <div className='text-body pt-1 text-[13px] flex items-center gap-1'>
                          Backed up on: {formateData(item?.ctime)}
                        </div>
                      </div>
                    </div>
                    <Menu as='div' className='relative'>
                      <div>
                        <Menu.Button>
                          <span className='border flex items-center gap-2 px-[15px] rounded-[6px] py-[8px] text-[14px] text-main '>
                            Restore
                            <div className='w-[24px]'>
                              <Image
                                alt='three dots'
                                width={300}
                                height={300}
                                src={'/three.svg'}
                                className='object-cover'
                              />
                            </div>
                          </span>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'>
                        <Menu.Items className='absolute right-0 z-10 mt-1 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <Menu.Item>
                            <div
                              onClick={() => restoreBackupFunc(item?.volid)}
                              className='flex items-center cursor-pointer gap-2 px-4 py-2 hover:bg-gray-50'>
                              <p className='text-[#334155] font-medium text-[14px]'>
                                Restore
                              </p>
                            </div>
                          </Menu.Item>
                          <Menu.Item>
                            <div
                              onClick={() => deleteBackupFunc(item?.volid)}
                              className='flex items-center cursor-pointer gap-2 px-4 py-2 hover:bg-gray-50'>
                              <p className='text-[#334155] font-medium text-[14px]'>
                                Delete
                              </p>
                            </div>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                )}
              </div>
              :
              <div className='mt-5  '>
                <Skeleton className={'w-full mb-[2px] h-[78px]'} />
                <Skeleton className={'w-full mb-[2px] h-[78px]'} />
                <Skeleton className={'w-full h-[78px]'} />
              </div>
            }
          </>
        </div>
      </div>
    </>
  )
}

export default Backups
