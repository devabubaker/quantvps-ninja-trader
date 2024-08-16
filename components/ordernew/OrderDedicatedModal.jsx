import { Fragment, useRef, useState, useEffect, useContext } from 'react'
// import { Dialog, Transition } from "@headlessui/react";
import Image from 'next/image'
import { Check, Dot } from '@/data/icon'
import { useUser } from '@clerk/nextjs'
import { deployServer } from '@/datawagon'
import { operatingsDedicated } from '@/data/operatingDedicated'
import { MyContext } from '@/pages/_app'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog'
import { IoCloseSharp } from 'react-icons/io5'
import searchProduct from '../../stripe/searchproduct'
import orderWithPmID from '../../stripe/order-with-pmid'
import BorderGlowButton from '../global/GlobButton'
import { testPassword } from '@/lib/tests'

export default function OrderDedicatedModal({
  open,
  setOpen,
  oneserver,
  setPaymentOpen,
  setPaymentNotDoneOpen
}) {
  const [selectedServer, setSelectedServer] = useState('Dedicated')
  const [location, setLocation] = useState(null)
  const [os, setOs] = useState(null)
  const cancelButtonRef = useRef(null)
  const [locationArray, setLocationArray] = useState([])
  const [operatingArray, setOperatingArray] = useState([])
  const [loading, setLoading] = useState(false)
  const [priceId, setPriceId] = useState('')
  useEffect(() => {
    if (oneserver) {
      let serverLocation =
        oneserver?.configoptions?.configoption?.[0]?.options?.option
      setLocationArray([...serverLocation])
      let allOperatingSystem = oneserver?.configoptions?.configoption?.filter(
        (item, ind) => item?.id === 92
      )?.[0]?.options?.option
      setOperatingArray([...allOperatingSystem])
      console.log(serverLocation, allOperatingSystem)
    }
  }, [oneserver])

  const { user } = useUser()
  const [domain, setDomain] = useState('')
  const [rootPass, setRootPass] = useState('')
  const { thisUser, getCurrentUser } = useContext(MyContext)

  const [message, setMessage] = useState('')
  const deployNewServer = async () => {
    if (os !== null && location !== null) {
      console.log('hitting', os, location)
      const configOp = [
        { id: 92, optionid: os },
        { id: 81, optionid: 515 },
        { id: 103, optionid: 605 },
        { id: 181, optionid: 707 },
        { id: 378, optionid: 972 },
        { id: 90, optionid: 568 },
        { id: 90, optionid: 568 },
        { id: 79, optionid: location }
      ]

      if (testPassword(rootPass)) {
        setMessage('')
        const thisProductPrice = Math.ceil(
          parseInt(oneserver?.pricing?.USD?.monthly) * 2
        )
        setLoading(true)
        const buysubscription = await orderWithPmID(
          thisUser.id,
          thisUser?.invoice_settings?.default_payment_method,
          priceId
        )
        if (buysubscription.success) {
          let deployData = await deployServer(
            oneserver?.pid,
            user?.id,
            domain,
            rootPass,
            configOp,
            selectedServer,
            thisProductPrice,
            location,
            thisUser?.email,
            buysubscription.subscription.id,
            'monthly',
            thisUser?.id
          )
          if (deployData.success) {
            getCurrentUser(user.id)
            setLoading(false)
            setOpen(false)
            setPaymentOpen(true)
          } else {
            setLoading(false)
            setOpen(false)
            setPaymentNotDoneOpen(true)
          }
        } else {
          setLoading(false)
          setOpen(false)
          setPaymentNotDoneOpen(true)
        }
      } else {
        setMessage(
          'Password must contain an uppercase character, lower case character, a symbol ($,%,#), and be 8 characters long.'
        )
      }
    } else {
      setMessage('Operating system & location is required.')
    }
  }

  const getPrice = async pid => {
    const pricedata = await searchProduct(pid)
    setPriceId(pricedata?.data?.[0]?.id)
  }
  useEffect(() => {
    if (oneserver) {
      getPrice(oneserver.pid)
    }
  }, [oneserver])

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <div className=' relative w-[512px] lg:min-w-[720px] pt-[50px]'>
          <div
            onClick={() => {
              setOpen(false)
              setMessage('')
            }}
            className='
absolute top-2 right-2 z-50 cursor-pointer'>
            <IoCloseSharp className='w-7 h-7 text-gray-400' />
          </div>
          <div className='flex items-center justify-center w-full'>
            <div className='w-[45px]'>
              <Image
                alt='logo'
                width={300}
                height={300}
                src={'/logo.png'}
                className='w-full object-cover'
              />
            </div>
          </div>
          <h1 className='text-center mt-3 text-[28px] font-semibold'>
            Deploy New Dedicated Server
          </h1>
          <p className='text-body text-[14px] text-center mt-1'>
            Enjoy low latency and ultra-fast processing with QuantVPS
          </p>
        </div>
        <div className=' border-t lg:min-w-[720px] w-full bg-[#F9FAFB] py-[20px] px-[50px]'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            <div className='w-full '>
              <p className='text-[13px] text-body pb-1'>
                Select Operating System:
              </p>
              <Select onValueChange={e => setOs(e)}>
                <SelectTrigger className='w-full capitalize'>
                  <SelectValue placeholder='Operating system' />
                </SelectTrigger>
                <SelectContent>
                  {operatingsDedicated?.map((item, ind) =>
                    <SelectItem key={ind} value={item.id}>
                      {item.name}
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className='w-full'>
              <p className='text-[13px] text-body pb-1'>Select Location:</p>
              <Select onValueChange={e => setLocation(e)}>
                <SelectTrigger className='w-full capitalize'>
                  <SelectValue placeholder='Location' />
                </SelectTrigger>
                <SelectContent>
                  {locationArray?.map((item, ind) =>
                    <SelectItem key={ind} value={item.id}>
                      {item.name}
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='my-5 flex items-center gap-3'>
            <h1 className='text-[16px] uppercase font-semibold text-main'>
              {selectedServer}
            </h1>
            <div className='border text-[14px] border-[#6B7280] text-[#6B7280] px-[10px] py-[5px] rounded-[32px]'>
              ${Math.ceil(parseInt(oneserver?.pricing?.USD?.monthly) * 2)}/month
            </div>
          </div>
          <div>
            <DescriptionComponent description={oneserver?.description} />
            {/* <div className="flex mt-2 items-center text-[14px] text-[#6B7280] gap-2">
                      <Check />
                      {selectedServer?.description?.RAM} RAM
                    </div>
                    <div className="flex mt-2 items-center text-[14px] text-[#6B7280] gap-2">
                      <Check />
                      {selectedServer?.description?.storage} Storage
                    </div> */}
          </div>
          <form
            onSubmit={e => {
              e.preventDefault()
              deployNewServer()
            }}
            className='w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 py-4'>
              <input
                type='text'
                onChange={e => setDomain(e.target.value)}
                className='rounded-md w-full px-[10px] py-[8px] border shadow-sm text-main'
                required
                placeholder='Server Name'
              />
              <input
                type='text'
                onChange={e => setRootPass(e.target.value)}
                className='rounded-md w-full px-[10px] py-[8px] border shadow-sm text-main'
                required
                placeholder='Server Password'
              />
            </div>
            {message !== '' &&
              <p className='text-[14px] text-center px-3 text-red-500 py-2'>
                {message}
              </p>
            }
            {!loading ?
              <BorderGlowButton
                text={'Deploy Dedicated Server'}
                btnType={'submit'}
              />
              :
              <BorderGlowButton
                text={'Deploying...'}
                btnType={'button'}
                isdeploying={true}
                isDisabled={true}
              />
            }
          </form>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

const DescriptionComponent = ({ description }) => {
  // Split the description into an array of lines
  const cleanedDescription = description
    .replace(/\./g, '')
    .replace(/<b>/g, '')
    .replace(/<\/b>/g, '')

  // Split the cleaned description into an array of lines
  const lines = cleanedDescription.split('\r\n')
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div>
        {lines?.slice(0, 4).map((line, index) =>
          <div key={index} className='flex items-center gap-2'>
            <Check />
            <p
              className='text-[14px] py-1  text-[#6B7280] '
              key={index}
              dangerouslySetInnerHTML={{ __html: line?.slice(1, 500) }}></p>
          </div>
        )}
      </div>
      <div>
        {lines?.slice(4, 10).map((line, index) =>
          <div key={index} className='flex items-center gap-2'>
            <Check />
            <p
              className='text-[14px] py-1  text-[#6B7280] '
              key={index}
              dangerouslySetInnerHTML={{ __html: line?.slice(1, 500) }}></p>
          </div>
        )}
      </div>
    </div>
  )
}
