import React, { useContext, useState, useEffect } from 'react'
import Image from 'next/image'
import { MyContext } from '../_app'
import { useUser } from '@clerk/nextjs'
// import { updateUserData } from "../lib/updateAccount";
import { useToast } from '@/components/ui/use-toast'
import helpStripe from '@/stripe/helpers'
import Head from 'next/head'
// import { Switch } from "@/components/ui/switch"
const Account = () => {
  const { toast } = useToast()
  const { user } = useUser()
  const { thisUser, getCurrentUser } = useContext(MyContext)
  const [name, setName] = useState('')
  const [zip, setZip] = useState('')
  const [address, setaddress] = useState('')
  const updateUser = async () => {
    const card_info = {
      card_number: thisUser?.card_info?.card_number,
      expirationDate: thisUser?.card_info?.expirationDate,
      expirationYear: thisUser?.card_info?.expirationYear,
      cvc: thisUser?.card_info?.cvc,
      zip: zip,
      address: address
    }
    const data = null // await updateUserData(thisUser?.id, card_info, name);
    toast({
      title: 'User updated',
      description: 'Successfully updated user info.'
    })
    await getCurrentUser(user.id)
  }
  useEffect(() => {
    if (thisUser) {
      // console.log(thisUser, 'thisUser')
      setName(thisUser?.name)
      setZip(thisUser?.card_info?.zip)
      setaddress(thisUser?.card_info?.address)
    }
  }, [thisUser])

  const updatenotification = async (key, val) => {
    const customer = await helpStripe.customers.update(thisUser?.id, {
      metadata: {
        [key]: val
      }
    })
    await getCurrentUser(user.id)
  }

  return (
    <>
      <Head>
        <title>Account settings</title>
      </Head>
      <div className='lg:max-w-[1200px] flex items-start justify-between py-[40px] mx-auto px-4'>
        <h1 className='text-main font-semibold text-[32px]'>
          Account Settings
        </h1>
      </div>
      <div className='bg-[#FAFAFA] min-h-screen py-[40px]'>
        <div className='max-w-[922px] px-3 lg:p-0 mx-auto'>
          <div className='flex items-center justify-center w-full mb-5'>
            <div className='w-[60px]'>
              <Image
                alt='settings gear'
                width={300}
                height={300}
                src={'/settings.png'}
                className='object-cover'
              />
            </div>
          </div>
        </div>
        <div className='mt-5 lg:max-w-[936px] overflow-hidden mx-auto bg-white border rounded-[6px]'>
          <div>
            <h1 className='text-[20px]  pt-5 pl-5  text-main font-semibold'>
              Your Email Address
            </h1>
            <p className='text-[14px] pt-2 pl-5 pb-5'>
              Your email address to receive important service and account
              updates.
            </p>
            <p className='text-main   pb-1 pl-5 text-[14px]'>Email</p>
            <div className='flex'>
              <input
                value={thisUser?.email ?? ''}
                className='border ml-5 w-auto mb-5 px-3 py-2 text-[14px] rounded-[6px]'
                type='email'
                readOnly
              />
            </div>
          </div>
        </div>
        <div className='mt-5 lg:max-w-[936px] pb-5 overflow-hidden mx-auto bg-white border rounded-[6px]'>
          <div>
            <h1 className='text-[20px]  pt-5 pl-5  text-main font-semibold'>
              Email Notification
            </h1>
            <p className='text-[14px] pt-2 pl-5 pb-5'>
              Toggle on/off to for email notifications.
            </p>
            <div className='flex items-center pl-5 mt-2 gap-2'>
              <p className='text-main  text-[14px]'>
                Server Reboot Notification
              </p>
              <div
                onClick={() =>
                  updatenotification(
                    'reboot',
                    thisUser?.metadata?.reboot === 'true' ? 'false' : 'true'
                  )
                }
                className={` flex items-center transition-all ${
                  thisUser?.metadata?.reboot === 'true'
                    ? ' justify-end bg-[#0070F3] '
                    : 'justify-start bg-[#333536] '
                } ease-linear duration-75 cursor-pointer w-[40px] p-[1px] rounded-full`}>
                <div className='w-[22px] h-[22px] bg-white rounded-full'></div>
              </div>
            </div>
            <div className='flex items-center pl-5 mt-4 gap-2'>
              <p className='text-main  text-[14px]'>
                Server Rebuild Notification
              </p>
              <div
                onClick={() =>
                  updatenotification(
                    'rebuild',
                    thisUser?.metadata?.rebuild === 'true' ? 'false' : 'true'
                  )
                }
                className={` flex items-center transition-all ${
                  thisUser?.metadata?.rebuild === 'true'
                    ? ' justify-end bg-[#0070F3] '
                    : 'justify-start bg-[#333536] '
                } ease-linear duration-75 cursor-pointer w-[40px] p-[1px] rounded-full`}>
                <div className='w-[22px] h-[22px] bg-white rounded-full'></div>
              </div>
            </div>
            <div className='flex items-center pl-5 mt-4 gap-2'>
              <p className='text-main  text-[14px]'>
                Server Backup Notification
              </p>
              <div
                onClick={() =>
                  updatenotification(
                    'backup',
                    thisUser?.metadata?.backup === 'true' ? 'false' : 'true'
                  )
                }
                className={` flex items-center transition-all ${
                  thisUser?.metadata?.backup === 'true'
                    ? ' justify-end bg-[#0070F3] '
                    : 'justify-start bg-[#333536] '
                } ease-linear duration-75 cursor-pointer w-[40px] p-[1px] rounded-full`}>
                <div className='w-[22px] h-[22px] bg-white rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Account
