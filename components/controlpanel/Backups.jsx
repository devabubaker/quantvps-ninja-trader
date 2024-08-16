import React, { useCallback, useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { checkbackup, backupMade } from '@/datawagon'
import { MyContext } from '@/pages/_app'
import { useToast } from '@/components/ui/use-toast'
import Link from 'next/link'
import { postNotificaiton } from '@/lib/postNofication'
import Skeleton from '../global/Skeleton'
import { useUser } from '@clerk/nextjs'

const Backups = ({ rloading }) => {
  const { user } = useUser()
  const { toast } = useToast()
  const [active, setActive] = useState(false)
  const { currentServer, thisUser, getCurrentUser } = useContext(MyContext)
  const [loading, setLoading] = useState(true)

  const checkAutoBackup = useCallback(async id => {
    setLoading(true)
    const data = await checkbackup(id)
    if (data?.isEnabled === 1) {
      setActive(true)
    } else {
      setActive(false)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (currentServer) {
      checkAutoBackup(currentServer?.dataWagan?.id)
    }
  }, [checkAutoBackup, currentServer])

  const [backupLoading, setBackupLoading] = useState(false)

  const backupmadeToggle = useCallback(async () => {
    setBackupLoading(true)
    const data = await backupMade(currentServer?.dataWagan?.id)
    if (data) {
      setBackupLoading(false)

      if (!active) {
        setActive(!active)
        toast({
          title: 'Backups Enabled',
          description: 'Successfully Enabled Backups.'
        })
        await postNotificaiton(
          `enabled backups ${currentServer?.dataWagan?.domain} (server #${currentServer?.custom_id})`,
          thisUser?.id
        )
      } else {
        setActive(!active)
        toast({
          title: 'Backups Disabled',
          description: 'Successfully Disabled Backups.'
        })
        await postNotificaiton(
          `disabled backups ${currentServer?.dataWagan?.domain} (server #${currentServer?.custom_id})`,
          thisUser?.id
        )
      }
      await getCurrentUser(user.id)
    }
  }, [active, currentServer, getCurrentUser, thisUser, toast, user])

  return (
    <>
      <div className='mt-[26px] border overflow-hidden  rounded-[6px]'>
        <div className=' p-[20px] bg-white'>
          <h2 className='text-main font-semibold pb-2 text-[20px]'>Backups</h2>
          {/* <p className='text-[14px] text-main leading-[22px] pb-4 '>Enable automatic Backups for $10 / month</p> */}
          {!loading ?
            <div className='border flex flex-wrap gap-4 lg:gap-0 items-center justify-between rounded-[8px] p-[16px]'>
              <div>
                <p className='f_bold text-[14px] text-main'>
                  Automatic Backups are {active ? 'Enabled' : 'Disabled'}
                </p>
                <p className=' text-[#666666] text-[14px]'>
                  Automatic backups ensure rapid access to past installations.
                </p>
              </div>
              {!rloading &&
                <div className='flex items-center gap-2'>
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
                  <div
                    onClick={() => backupmadeToggle()}
                    className={` flex items-center transition-all ${
                      active
                        ? ' justify-end bg-[#0070F3] '
                        : 'justify-start bg-[#333536] '
                    } ease-linear duration-75 cursor-pointer w-[40px] p-[1px] rounded-full`}>
                    <div className='w-[22px] h-[22px] bg-white rounded-full'></div>
                  </div>
                </div>
              }
            </div>
            :
            <Skeleton className={'h-[75px]'} />
          }
        </div>
        <div className='py-[18px] border-t px-[24px]'>
          <div className='text-[14px] flex items-center gap-1 text-[#666666]'>
            Learn more about
            <Link
              className='text-[#0068D6] flex items-center '
              href={'/#'}
              target='__blank'>
              Automatic Backups
              <div className='w-[17px]'>
                <Image
                  width={300}
                  height={300}
                  src={'/link.svg'}
                  className='object-cover'
                  alt='external link'
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Backups
