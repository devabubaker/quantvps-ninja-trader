import { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { Check } from '@/data/icon'
import { servers } from '@/data/servers'
import { useUser } from '@clerk/nextjs'
import {
  getoneProduct,
  deployCustomServer,
  stripeUpdateMeta,
  getDWConfig,
  payInvoice
} from '@/datawagon'
import { MyContext } from '../../pages/_app'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { IoCloseSharp } from 'react-icons/io5'
import orderWithPmID from '../../stripe/order-with-pmid'
import BorderGlowButton from '../global/GlobButton'
import { testPassword } from '@/lib/tests'

export default function ModalBuyServer({
  open,
  setOpen,
  oneserver,
  setPaymentOpen,
  setPaymentNotDoneOpen,
  mainVpServers
}) {
  const { thisUser, getCurrentUser } = useContext(MyContext)
  const { user } = useUser()
  const [selectedServer, setSelectedServer] = useState(null)
  const [location, setLocation] = useState(null)
  const [os, setOs] = useState(null)
  const [domain, setDomain] = useState('')
  const [loading, setLoading] = useState(false)
  const [rootPass, setRootPass] = useState('')
  const [dataLoading, setDataLoading] = useState(true)
  const [dynamicOperatings, setDynamicOperatings] = useState([])
  const [dynamicLocations, setDynamicLocations] = useState([])
  const [message, setMessage] = useState('')
  const [addedMoney, setAddedMoney] = useState(false)
  const [pricing, setPricing] = useState()
  const [allVPS, setAllVPS] = useState([])
  const realMode =
    /live/.test(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) &&
    /quantvps\.com/.test(process.env.NEXT_PUBLIC_DOMAIN_NAME)

  const fetchOneProduct = async id => {
    setDataLoading(true)
    const getoneData = (await getoneProduct(id))?.products || []

    if (getoneData?.product?.length > 0) {
      const filterOperatings =
        getoneData?.product?.[0]?.configoptions?.configoption?.[0]?.options?.option?.filter(
          item =>
            item?.name?.includes('ubuntu') || item?.name?.includes('windows')
        )
      setDynamicOperatings([...filterOperatings])
      const filterLocation =
        getoneData?.product?.[0]?.configoptions?.configoption?.[3]?.options
          ?.option
      setDynamicLocations([...filterLocation])
    }
    setDataLoading(false)
  }
  useEffect(() => {
    if (oneserver) {
      fetchOneProduct(oneserver)
      let data = servers.filter(item => item.pid === oneserver)?.[0]

      setSelectedServer(data)
    }
  }, [oneserver])

  const changeTypeServer = id => {
    let data = servers.filter(item => item.pid === Number(id))?.[0]
    setSelectedServer(data)
  }

  useEffect(() => {
    setPricing(Number(selectedServer?.pricing))
  }, [selectedServer])

  const deployNewServer = async () => {
    try {
      if (os !== null && location !== null) {
        const configOp = getDWConfig(addedMoney, os, location)
        if (testPassword(rootPass)) {
          setMessage('')
          setLoading(true)
          const metadata = {
            domain,
            password: rootPass,
            userid: thisUser.clerk_id,
            email: thisUser.email,
            customer: thisUser.id,
            ip: 'pending',
            location: dynamicLocations.find(v => v.id == location).name,
            os: dynamicOperatings.find(v => v.id == os).name,
            plan_type: selectedServer.name,
            orderid: 'pending',
            serviceid: 'pending',
            invoiceid: 'pending'
          }
          const buysubscription = await orderWithPmID(
            thisUser.id,
            thisUser?.invoice_settings?.default_payment_method,
            selectedServer?.monthly_id,
            metadata
          )
          if (buysubscription.success) {
            metadata.subscriptionId = buysubscription.subscription.id
            const invoice = realMode
              ? await deployCustomServer(
                selectedServer.pid,
                thisUser.clerk_id,
                domain,
                rootPass,
                configOp
              )
              : {
                orderid: 10254,
                productids: 10929,
                serviceids: 10929,
                addonids: '',
                domainids: '',
                invoiceid: 30549
              }
            Object.assign(metadata, {
              orderid: invoice.orderid,
              serviceid: invoice.serviceids,
              invoiceid: invoice.invoiceid
            })
            await stripeUpdateMeta(metadata)
            // TODO move to webhook
            const payment = realMode
              ? await payInvoice(metadata.invoiceid)
              : { success: true }
            getCurrentUser(user.id)
            setOpen(false)
            setPaymentOpen(true)
          } else {
            setOpen(false)
            setPaymentNotDoneOpen(true)
          }
        } else {
          setMessage(
            `Password must contain an uppercase character, lower case character,
           a symbol ($,%,#), and be 8 characters long.`
          )
        }
      } else {
        setMessage('Operating system & location is required.')
      }
      setLoading(false)
    } catch (e) {
      setMessage(e.message)
    }
  }

  useEffect(() => {
    if (mainVpServers) {
      let filterStock = mainVpServers
      setAllVPS([...filterStock])
    }
  }, [mainVpServers])

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <div className='lg:min-w-[720px] min-w-[340px]  lg:max-w-[720px] pt-2 lg:pt-[50px] relative'>
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
          <AlertDialogTitle className='text-center mt-1 text-[28px] font-semibold'>
            Deploy New VPS
          </AlertDialogTitle>
          <p className='text-body text-[14px] text-center mt-1'>
            Enjoy low latency and ultra-fast processing with QuantVPS
          </p>
        </div>
        {!dataLoading ?
          <div
            className=' border-t lg:min-w-[720px]   lg:max-w-[720px] max-h-[400px]
          lg:max-h-[420px] pb-0 lg:pb-4 overflow-y-auto lg:overflow-y-visible min-h-[327px]
          w-full bg-[#F9FAFB] py-[20px] px-[18px] lg:px-[50px]'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
              <div className='w-full'>
                <p className='text-[13px] text-body pb-1'>Select VPS Plan:</p>
                <Select
                  defaultValue={`${selectedServer?.pid}`}
                  onValueChange={e => changeTypeServer(e)}>
                  <SelectTrigger className='w-full capitalize'>
                    <SelectValue placeholder='Plan Type' />
                  </SelectTrigger>
                  <SelectContent>
                    {allVPS?.map((item, ind) =>
                      <SelectItem
                        disabled={item?.stock > 0 === false}
                        key={ind}
                        value={`${item?.pid}`}>
                        {' '}
                        {item.name} (Available: {item?.stock})
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <p className='text-[13px] text-body pb-1'>
                  Select Operating System:
                </p>
                <Select onValueChange={e => setOs(e)}>
                  <SelectTrigger className='w-full capitalize'>
                    <SelectValue placeholder='Operating System' />
                  </SelectTrigger>
                  <SelectContent>
                    {dynamicOperatings?.map((item, ind) =>
                      <SelectItem key={ind} value={item.id}>
                        {' '}
                        {item.name}
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <p className='text-[13px] text-body pb-1'>Select Location:</p>

                <Select onValueChange={e => setLocation(e)}>
                  <SelectTrigger className='w-full capitalize'>
                    <SelectValue placeholder='Location' />
                  </SelectTrigger>
                  <SelectContent>
                    {dynamicLocations.map((item, ind) =>
                      <SelectItem
                        key={ind}
                        disabled={item.hidden === 1}
                        value={item.id}>
                        {item.name}
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='my-5 flex items-center gap-3'>
              <h1 className='text-[16px] font-semibold text-main'>
                {selectedServer?.name}
              </h1>
              <div className='border text-[14px] border-[#6B7280] text-[#6B7280] px-[10px] py-[5px] rounded-[32px]'>
                ${pricing}/month
              </div>
            </div>
            <div>
              <div className='flex items-center text-[14px] text-[#6B7280] gap-2'>
                <Check />
                {selectedServer?.description?.CPU} Epyc Cores
              </div>
              <div className='flex mt-2 items-center text-[14px] text-[#6B7280] gap-2'>
                <Check />
                {selectedServer?.description?.RAM} RAM
              </div>
              <div className='flex mt-2 items-center text-[14px] text-[#6B7280] gap-2'>
                <Check />
                {selectedServer?.description?.storage} Storage
              </div>
            </div>
            <form
              onSubmit={e => {
                e.preventDefault()
                deployNewServer()
              }}
              className='w-full mt-3'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 pb-4'>
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
                  btnType={'submit'}
                  text={`Deploy  ${selectedServer?.name}`}
                />
                :
                <BorderGlowButton
                  isDisabled={true}
                  btnType={'button'}
                  text={'Deploying..'}
                  isdeploying={true}
                />
              }
            </form>
          </div>
          :
          <div className='flex w-full lg:min-h-[337px] py-[20px]  items-center gap-1 justify-center '>
            <div className='w-[18px] animate-spin duration-100 ease-linear cursor-pointer'>
              <Image
                alt='loading'
                width={300}
                height={300}
                src={'/loading.png'}
                className='object-cover'
              />
            </div>{' '}
            Loading...
          </div>
        }
      </AlertDialogContent>
    </AlertDialog>
  )
}
