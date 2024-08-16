import { useState, useEffect, useContext, useCallback } from 'react'
// import { deployTemplate } from '@/templates/deploytemplate'
import Image from 'next/image'
import { servers } from '../../data/servers'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'
// import { detectCardType } from "../../lib/tests";
import { MdError } from 'react-icons/md'
import { MyContext } from '../../pages/_app'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog'
import { IoCloseSharp } from 'react-icons/io5'
import Skeleton from '../global/Skeleton'
import { useSignUp } from '@clerk/nextjs'
import { generateRandomPassword, testEmail, testPassword } from '@/lib/tests'
// formatCreditCardInput,
// stringReplace,
// validateCVC,
// import { addUserInfo } from "../../lib/addUserInfo";
// import { updateUserCard } from "../../lib/updateCard";

import { Drawer, DrawerContent } from '@/components/ui/drawer'
import Link from 'next/link'
import {
  deployCustomServer,
  stripeUpdateMeta,
  getoneProduct,
  payInvoice,
  getDWConfig
} from '@/datawagon'
// import { fetchCodes, updateCodeEmail } from "../../lib/codes/getcode";
// import { deleteUserByEmail } from "../../lib/user/deleteuser";
// import { getuserwithEmail } from "../../lib/user/getuserwithEmail";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import helpStripe from '../../stripe/helpers'
import createStripeUser from '../../stripe/create-stripe-user'
import createSubscriptionForUser from '../../stripe/create-subscription'
import searchPromo from '../../stripe/validatePromo'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import BorderGlowButton from '../global/GlobButton'
import { sendGTMEvent } from '@next/third-parties/google'

const PaymentComponent = ({
  oneserver,
  mainVpServers,
  setOpen,
  setshowConfetti,
  annualType,
  setAnnualType
}) => {
  const elements = useElements()
  const stripe = useStripe()
  const { signUp, setActive, isLoaded } = useSignUp()
  const { thisUser, getCurrentUser } = useContext(MyContext)
  const [selectedServer, setSelectedServer] = useState(null)
  const [location, setLocation] = useState('')
  const [os, setOs] = useState('')
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [dataLoading, setDataLoading] = useState(true)
  const [dynamicOperatings, setDynamicOperatings] = useState([])
  const [dynamicLocations, setDynamicLocations] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [addedMoney, setAddedMoney] = useState(null)
  const [discount, setDiscount] = useState()
  const [amount, setAmount] = useState()
  const [promoCode, setPromoCode] = useState('')
  const [iscorrectPromo, setIscorrectPromo] = useState(null)
  const [promoItem, setPromoItem] = useState(null)
  const [requiredMessage, setRequiredMessage] = useState('')
  const [processStep, setProcessStep] = useState(1)
  const [is__submitted_once, setIs__submitted_once] = useState(false)
  const [message, setMessage] = useState({ success: false, text: '' })
  const [lastMessage, setLastMessage] = useState('')
  const [user, setUser] = useState()
  const [formComplete, setFormComplete] = useState(0)
  const realMode =
    /live/.test(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) &&
    /quantvps\.com/.test(process.env.NEXT_PUBLIC_DOMAIN_NAME)

  const sendTag = (evt, data = {}) => {
    sendGTMEvent({ ecommerce: null, event: null })
    sendGTMEvent({ event: evt, ecommerce: data, currency: 'USD' })
  }

  const getOs = useCallback(() => {
    const id = Number(os)
    return dynamicOperatings.find(item => item.id === id)?.rawName
  }, [dynamicOperatings, os])

  const getLoc = useCallback(() => {
    const id = Number(location)
    return dynamicLocations.find(item => item.id === id)?.name
  }, [dynamicLocations, location])

  useEffect(() => {
    sendTag('deploy_opened', { event: 'Purchase Form Open' })
  }, [])

  useEffect(() => {
    if (!message.success && message.text && (formComplete & 3) === 3)
      sendTag('error', { error: message.text })
  }, [formComplete, message])

  useEffect(() => {
    if (promoCode) {
      searchPromo(promoCode).then(({ success, promo }) => {
        if (success) {
          setPromoItem(promo)
          setIscorrectPromo(1)
        } else {
          setPromoItem(null)
          setIscorrectPromo(0)
        }
      })
    }
  }, [setPromoItem, setIscorrectPromo, promoCode])

  useEffect(() => {
    const code = annualType === 'yearly' ? selectedServer.promo : 'Quant50'
    handlePromoChange(code)
  }, [annualType, selectedServer])

  useEffect(() => {
    if (![selectedServer, annualType, location, os, amount].some(v => !v)) {
      sendTag('select_item', {
        items: [
          {
            item_id: selectedServer.pid,
            item_name: selectedServer.name,
            coupon: promoItem?.id,
            discount,
            item_category: selectedServer.name,
            item_category2: getOs(),
            item_category3: getLoc(),
            item_category4: annualType,
            price: amount - discount
          }
        ]
      })
    }
  }, [amount, annualType, discount, getLoc, getOs, location, os, promoItem, selectedServer])

  const fetchOneProduct = useCallback(async id => {
    setDataLoading(true)
    // TODO memoize this and other
    const response = await getoneProduct(id)
    const getoneData = response?.products || []
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
  }, [])

  useEffect(() => {
    if (oneserver) {
      fetchOneProduct(oneserver)
      let data = servers.filter(item => item.pid === oneserver)?.[0]
      setSelectedServer(data)
    }
  }, [fetchOneProduct, oneserver])

  const changeTypeServer = id => {
    let data = servers.filter(item => item.pid === parseInt(id))?.[0]
    setSelectedServer(data)
  }

  useEffect(() => {
    if (thisUser) {
      setUser(thisUser)
    }
  }, [thisUser])

  const blurTest = pass => {
    if (testPassword(pass)) {
      setPassword(pass)
      setMessage({
        success: true,
        text: 'Your password meets all the necessary requirements.'
      })
      setFormComplete(formComplete | 1)
    } else {
      setPassword(pass)
      setMessage({
        success: false,
        text: 'Your password must contain 8 or more characters. '
      })
      setFormComplete(formComplete & ~1)
    }
  }

  const generatePasswordForUser = () => {
    const passNew = generateRandomPassword()
    blurTest(passNew)
  }

  const handlePromoChange = code => {
    if (code === '') {
      setPromoItem(null)
      setIscorrectPromo(null)
    }
    setPromoCode(code)
  }

  const blurTestEmail = mail => {
    if (testEmail(mail)) {
      setEmail(mail)
      setMessage({
        success: true,
        text: 'Your email meets all the necessary requirements.'
      })
      setFormComplete(formComplete | 2)
    } else {
      setEmail(mail)
      setMessage({
        success: false,
        text: 'Please enter a valid email.'
      })
      setFormComplete(formComplete & ~2)
    }
  }

  useEffect(() => {
    if (selectedServer) {
      setAmount(
        annualType === 'yearly'
          ? selectedServer.pricing * 12
          : selectedServer.pricing
      )
      if (promoItem) {
        setDiscount(
          annualType === 'yearly'
            ? promoItem.amount_off / 100
            : Math.ceil(selectedServer.pricing * promoItem.percent_off / 100)
        )
      } else {
        setDiscount(0)
      }
    }
  }, [annualType, promoItem, selectedServer])

  useEffect(() => {
    if (errorMessage) setLastMessage(errorMessage)
  }, [errorMessage])

  const deployNewServer = async (subscriptionId, customerid) => {
    let configOp = getDWConfig(addedMoney, os, location)
    const invoice = {}
    const passwd = generateRandomPassword()
    if (realMode) {
      Object.assign(
        invoice,
        await deployCustomServer(
          selectedServer.pid,
          user?.id,
          'Server',
          passwd,
          configOp,
          selectedServer.name,
          `${selectedServer.pricing}`,
          `${amount}`,
          location,
          email,
          subscriptionId,
          annualType,
          customerid
        )
      )
    } else {
      Object.assign(invoice, {
        orderid: 10254,
        productids: 10929,
        serviceids: 10929,
        addonids: '',
        domainids: '',
        invoiceid: 30549
      })
    }
    const metadata = {
      subscriptionId: subscriptionId,
      plan_type: selectedServer?.name,
      domain: 'Server',
      password: passwd,
      location: getLoc(),
      invoiceid: invoice.invoiceid,
      os: getOs(),
      orderid: invoice.orderid,
      ip: 'pending',
      serviceid: invoice.serviceids
    }
    let deploydata = await stripeUpdateMeta(metadata)
    metadata.email = email
    const payment = realMode
      ? await payInvoice(invoice.invoiceid)
      : { success: true }
    if (payment?.error) {
      setErrorMessage(payment.error)
      throw new Error(payment.error)
    }
    setshowConfetti(true)
    setProcessStep(2)
    setLoading(false)
    return { metadata, deploydata, payment }
  }

  // create subscription
  const createSubscription = async (customerid, promoId) => {
    const { subscriptionId, clientSecret } = await createSubscriptionForUser(
      annualType === 'monthly'
        ? addedMoney
          ? selectedServer?.monthly_usage_id
          : selectedServer?.monthly_id
        : addedMoney
          ? selectedServer?.annually_usage_id
          : selectedServer?.annually_id,
      customerid,
      promoId
    )

    return { subscriptionId, clientSecret }
  }

  const handleSubmit = async () => {
    setLastMessage('')
    if (!isLoaded) {
      return
    }
    if (os !== null && location !== null) {
      setRequiredMessage('')
      if (message.success) {
        if (errorMessage === '') {
          setLoading(true)
          try {
            const clerkSignup =
              signUp?.emailAddress === email
                ? signUp
                : await signUp.create({
                  emailAddress: email,
                  password: password
                })
            const stripeUser =
              clerkSignup.unsafeMetadata?.customer ||
              (await createStripeUser(email, '')).customer
            if (stripeUser) {
              await clerkSignup.update({
                email,
                unsafeMetadata: { ...clerkSignup.unsafeMetadata, customer: stripeUser }
              })
              setIs__submitted_once(true)
              const subscription = clerkSignup.unsafeMetadata?.subscriptionId
                ? clerkSignup.unsafeMetadata
                : await createSubscription(stripeUser, promoItem?.id)
              await clerkSignup.update({
                unsafeMetadata: {
                  ...clerkSignup.unsafeMetadata,
                  ...subscription
                }
              })
              const cardElement = elements.getElement(CardElement)
              const confirmation = await stripe.confirmCardPayment(
                subscription.clientSecret,
                {
                  payment_method: {
                    card: cardElement,
                    billing_details: {
                      email: email
                    }
                  },
                  receipt_email: email,
                  expand: ['payment_method']
                }
              )
              const { error, paymentIntent } = confirmation
              if (error) {
                setMessage({
                  success: false,
                  text: error.message
                })
              } else {
                const { billing_details: billingDetails } = paymentIntent.payment_method
                await helpStripe.customers.update(stripeUser, {
                  invoice_settings: {
                    default_payment_method: paymentIntent.payment_method.id
                  }
                })
                realMode &&
                  sendTag('purchase', {
                    price: amount,
                    coupon: promoItem.id,
                    currency: 'USD',
                    value: amount,
                    discount,
                    transaction_id: paymentIntent?.id,
                    item_category: selectedServer.name,
                    item_category2: getOs(),
                    item_category3: getLoc(),
                    item_category4: annualType,
                    item_id: selectedServer.pid,
                    item_name: selectedServer.name,
                    quantity: 1,
                    user_properties: {
                      customer_email: billingDetails.email,
                      user_id: stripeUser,
                      customer_first_name: '',
                      customer_last_name: billingDetails.name,
                      customer_phone: billingDetails.phone,
                      customer_city: billingDetails.address?.city,
                      customer_zip: billingDetails.address?.postal_code,
                      customer_address_1: billingDetails.address?.line1,
                      customer_address_2: billingDetails.address?.line2,
                      customer_country: billingDetails.address?.country,
                      customer_province: billingDetails.address?.state
                    }
                  })
                const { metadata } = await deployNewServer(
                  subscription.subscriptionId,
                  stripeUser
                )
                await clerkSignup.update({ unsafeMetadata: {...clerkSignup.unsafeMetadata, ...metadata }})
                await stripeUpdateMeta({ ...clerkSignup.unsafeMetadata, ...metadata })
                // TODO save IP to stripe
                // send the email.
                await signUp.prepareEmailAddressVerification({
                  strategy: 'email_link',
                  redirectUrl: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/dashboard`
                })
                setMessage({
                  success: true,
                  text: ''
                })
              }
            }
            setLoading(false)
          } catch (err) {
            if (err?.clerkError) {
              setMessage({
                success: false,
                text: err.errors.map(v => v.longMessage).join('\n')
              })
            } else {
              setMessage({
                success: false,
                text: err?.message || 'Something Went wrong!'
              })
            }
            setLoading(false)
            console.error(err)
          }
        }
      } else {
        setMessage({
          success: false,
          text: 'Email & Password is required'
        })
      }
    } else {
      setRequiredMessage('Please Select Operating System & Location.')
    }
    setTimeout(() => {
      setMessage({ success: true, text: '' })
      setErrorMessage('')
      setRequiredMessage('')
    }, 5000)
  }
  const handleCardChange = event => {
    if (event.error) {
      setErrorMessage(event.error.message)
      if (event.complete) sendTag('error', { error: event.error.message })
    } else {
      if (event.complete && event.error === undefined) {
        sendTag('add_payment_info', {
          payment_type: event?.elementType,
          brand: event?.brand,
          currency: 'USD',
          value: amount,
          coupon: promoItem?.id,
          items: [
            {
              item_id: selectedServer?.pid,
              item_name: selectedServer?.name,
              coupon: promoItem?.id,
              discount,
              item_category: selectedServer?.name,
              item_category2: getOs(),
              item_category3: getLoc(),
              item_category4: annualType,
              price: amount
            }
          ]
        })
      }
      setErrorMessage('')
    }
  }

  useEffect(() => {
    handlePromoChange('Quant50')
  }, [])

  return (
    <div className=' lg:max-w-[1024px]  mx-auto items-center justify-center
    relative lg:min-w-[1024px] bg-white rounded-[12px]'>
      {!loading &&
        <div className='absolute top-3 hidden lg:block right-3 z-30'>
          <IoCloseSharp
            onClick={() => {
              setOpen(false)
            }}
            className='w-5 h-5 cursor-pointer text-[#6B7280]'
          />
        </div>
      }
      <form
        id='deploy-form'
        readOnly={loading ? 1 : undefined}
        disabled={loading ? 1 : undefined}
        onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}
        className='w-full grid grid-cols-1 lg:h-[680px] lg:grid-cols-2'>
        <div className='w-full flex p-2  border-b items-center justify-center gap-1 lg:gap-3'>
          <div className='w-[40px] '>
            <Image
              alt='logo grey'
              width={100}
              className=' object-cover '
              height={100}
              src={'/depp.png'}
            />
          </div>
          <p className='text-black font-medium text-[18px]'>Deploy VPS</p>
        </div>
        <div className='w-full hidden lg:flex p-2 border-b  items-center justify-center gap-3'>
          <div className='w-[40px] '>
            <Image
              alt='globe'
              width={100}
              className=' object-cover '
              height={100}
              src={'/account.png'}
            />
          </div>
          <p className='text-black font-medium text-[18px]'>Account Details</p>
        </div>
        <div className='px-2 lg:px-[40px] block w-full h-full py-3'>
          <div className='flex items-center lg:mt-0 justify-center gap-1'>
            <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
            <p className='text-[14px] text-nowrap text-[#6B7280]'>
              Configure Server
            </p>
            <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
          </div>
          {dataLoading ?
            <div className='grid mt-2 grid-cols-1'>
              <Skeleton className='w-full py-[18px] rounded-[12px]' />
              <Skeleton className='w-full mt-1 py-[18px] rounded-[12px]' />
              <Skeleton className='w-full mt-1 py-[18px] rounded-[12px]' />
              <Skeleton className='w-full mt-1 py-[18px] rounded-[12px]' />
              <Skeleton className='w-full mt-1 py-[18px] rounded-[12px]' />
            </div>
            :
            <div className='grid relative mt-2 grid-cols-1'>
              {processStep !== 1 &&
                <div className=' absolute top-0 left-0 w-full h-full z-30 bg-transparent'></div>
              }
              <div className='w-full border rounded-[12px] overflow-hidden  grid grid-cols-2 items-center '>
                <div className='w-full px-2 flex items-center justify-start h-full bg-white'>
                  <p className='text-[14px] text-nowrap text-[#b7bcc2] '>
                    Select VPS Plan:
                  </p>
                </div>
                <Select
                  readOnly={loading}
                  defaultValue={`${selectedServer?.pid}`}
                  onValueChange={e => changeTypeServer(e)}>
                  <SelectTrigger
                    className='border border-[#F9FAFB] capitalize'
                    disabled={loading}>
                    <SelectValue placeholder='Plan Type' />
                  </SelectTrigger>
                  <SelectContent>
                    {mainVpServers?.map((item, ind) =>
                      <SelectItem
                        readOnly={item?.stock > 0 === false}
                        key={ind}
                        value={`${item?.pid}`}>
                        {' '}
                        {item.name} (Available: {item?.stock})
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div
                className='w-full border mt-1 rounded-[12px] overflow-hidden
              grid grid-cols-2 items-center lg:col-span-2'>
                <div className='w-full px-2 flex items-center justify-start h-full bg-white'>
                  <p className='text-[14px] text-nowrap text-[#b7bcc2] '>
                    Select Operating System
                  </p>
                </div>
                <Select
                  readOnly={loading}
                  required
                  onValueChange={e => setOs(e)}>
                  <SelectTrigger
                    className='border border-[#F9FAFB] capitalize'
                    disabled={loading}>
                    <SelectValue placeholder='Operating System' />
                  </SelectTrigger>
                  <SelectContent>
                    {dynamicOperatings?.map((item, ind) =>
                      <SelectItem key={ind} value={`${item.id}`}>
                        {' '}
                        {item.name}
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div
                className='w-full border mt-1 rounded-[12px] overflow-hidden
              grid grid-cols-2 items-center lg:col-span-2'>
                <div className='w-full px-2 flex items-center justify-start h-full bg-white'>
                  <p className='text-[14px] text-nowrap text-[#b7bcc2] '>
                    Select Location
                  </p>
                </div>
                <Select
                  readOnly={loading}
                  required
                  onValueChange={e => {
                    setLocation(e)
                  }}>
                  <SelectTrigger
                    className='border border-[#F9FAFB] capitalize'
                    disabled={loading}>
                    <SelectValue placeholder='Location' />
                  </SelectTrigger>
                  <SelectContent>
                    {dynamicLocations.map((item, ind) =>
                      <SelectItem
                        key={ind}
                        disabled={item.hidden === 1}
                        value={`${item.id}`}>
                        {item.name}
                        {item.hidden ? ' (0)' : ''}
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div
                className='w-full border mt-1 rounded-[12px]
                overflow-hidden  grid grid-cols-2 items-center lg:col-span-2'>
                <div className='w-full px-2 flex items-center justify-start h-full bg-white'>
                  <p className='text-[14px] text-nowrap text-[#b7bcc2] '>
                    Plan type
                  </p>
                </div>
                <Select
                  onValueChange={e => {
                    setAnnualType(e)
                  }}
                  readOnly={loading}>
                  <SelectTrigger
                    className='border border-[#F9FAFB] capitalize'
                    disabled={loading}>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='monthly'>Monthly</SelectItem>
                    <SelectItem value='yearly'>Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          }
          <div className='hidden lg:flex mt-2 items-center justify-center gap-1'>
            <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
            <p className='text-[14px] text-nowrap text-[#6B7280]'>
              Order Summary
            </p>
            <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
          </div>
          {!dataLoading ?
            <div
              className='mt-2 hidden lg:block rounded-[12px] relative border
            bg-[#F3F4F6]  p-3 overflow-hidden lg:p-[35px]'>
              <div className='w-[12px] lg:hidden bg-[#F3F4F6] absolute top-0 right-0 h-full z-40'></div>
              <p className='text-[#1A1A1A] font-medium'>Order Details</p>
              <div className='relative'>
                <DotItem />
                <div className='text-[#1A1A1A] relative z-20 flex items-center justify-between font-medium '>
                  <p className=' text-opacity-30 text-[#1A1A1A] bg-[#F3F4F6] '>
                    Plan
                  </p>
                  <p className=' opacity-100 bg-[#F3F4F6] '>
                    {selectedServer?.name}
                  </p>
                </div>
              </div>
              <div className='relative'>
                <DotItem />
                <div className='text-[#1A1A1A] relative z-20 flex items-center justify-between font-medium '>
                  <p className=' text-opacity-30 text-[#1A1A1A] bg-[#F3F4F6] '>
                    CPU
                  </p>
                  <p className=' opacity-100 bg-[#F3F4F6] '>
                    {selectedServer?.description?.CPU}
                  </p>
                </div>
              </div>
              <div className='relative'>
                <DotItem />
                <div className='text-[#1A1A1A] relative z-20 flex items-center justify-between font-medium '>
                  <p className=' text-opacity-30 text-[#1A1A1A] bg-[#F3F4F6] '>
                    {' '}
                    RAM
                  </p>
                  <p className=' opacity-100 bg-[#F3F4F6] '>
                    {selectedServer?.description?.RAM}
                  </p>
                </div>
              </div>
              <div className='relative'>
                <DotItem />
                <div className='text-[#1A1A1A] relative z-20 flex items-center justify-between font-medium '>
                  <p className=' text-opacity-30 text-[#1A1A1A] bg-[#F3F4F6] '>
                    Storage
                  </p>
                  <p className=' opacity-100 bg-[#F3F4F6] '>
                    {' '}
                    {selectedServer?.description?.storage}
                  </p>
                </div>
              </div>
              <div className='relative'>
                <DotItem />
                <div className='text-[#1A1A1A] relative z-20 flex items-center justify-between font-medium '>
                  <p className=' text-opacity-30 text-[#1A1A1A] bg-[#F3F4F6] '>
                    Location
                  </p>
                  <p className=' opacity-100 bg-[#F3F4F6] '>
                    {
                      dynamicLocations?.filter(
                        item => item?.id === parseInt(location)
                      )?.[0]?.name
                    }
                  </p>
                </div>
              </div>
              <div className='relative'>
                <DotItem />
                <div className='text-[#1A1A1A] relative z-20 flex items-center justify-between font-medium '>
                  <p className=' text-opacity-30 text-[#1A1A1A] bg-[#F3F4F6] '>
                    Operating
                  </p>
                  <p className=' opacity-100 bg-[#F3F4F6] '>
                    {dynamicOperatings?.filter(
                      item => item?.id === parseInt(os)
                    )?.[0]?.name || ''}
                  </p>
                </div>
              </div>
              <div
                className={
                  'relative  pb-2 border-b ' +
                  (discount > 0 ? 'visible' : 'collapse')
                }>
                <DotItem />
                <div className='text-[#1A1A1A] relative z-20 flex items-center justify-between font-medium '>
                  <p className=' text-opacity-30 text-[#1A1A1A] bg-[#F3F4F6] '>
                    Promo / Referral discount
                  </p>
                  {iscorrectPromo > 0 &&
                    <p className=' opacity-100 bg-[#F3F4F6] '>
                      {promoItem?.percent_off
                        ? `${promoItem.percent_off}%`
                        : `$${discount}`}
                    </p>
                  }
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <p className='text-[#1A1A1A] text-opacity-50 text-[15px]'>
                  Total
                </p>
                {discount ?
                  <p className='text-[#1A1A1A] text-[14px]  '>
                    First {annualType.replace('ly', '')}{' '}
                    <span className=' font-medium text-[18px]'>
                      ${amount - discount}
                    </span>{' '}
                    then{' '}
                    <span className='font-medium  text-[18px]'>${amount}</span>/
                    {annualType}
                  </p>
                  :
                  <p className='text-[#1A1A1A] text-[18px] font-semibold '>
                    ${amount}
                    <span className='text-[14px] font-base text-[#1A1A1A] text-opacity-50'>
                      /{annualType}
                    </span>
                  </p>
                }
              </div>
              <p
                className={
                  'text-right text-[12px] text-green-600 mt-2 ' +
                  (discount > 0 ? 'visible' : 'collapse')
                }>
                (note: promo only applies to first{' '}
                {annualType.replace('ly', '')})
              </p>
            </div>
            :
            <div className='hidden lg:block' style={{ height: '307px' }}>
              <Skeleton className={'w-full  h-full'} />
            </div>
          }
        </div>
        {processStep === 1 ?
          <div className='relative '>
            <div className='bg-[#F9F9F9]  '>
              <div className=' py-3 lg:px-5'>
                <div className=' w-full bg-[#F9FAFB]  px-[10px]  lg:px-[30px]'>
                  <div className='flex  items-center justify-center gap-1'>
                    <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
                    <p className='text-[14px] text-nowrap text-[#6B7280]'>
                      Create an account
                    </p>
                    <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
                  </div>
                  <div>
                    <p className='text-[#51374e] text-[14px] font-medium pb-1'>
                      Email
                    </p>
                    <div className='flex items-center gap-2 pr-2 overflow-hidden border rounded-[8px] bg-white'>
                      <input
                        type='email'
                        required
                        readOnly={is__submitted_once || loading}
                        onChange={e => blurTestEmail(e.target.value)}
                        className='w-full outline-none font-light border-none py-[8px] px-[10px] text-[14px]'
                      />
                    </div>
                  </div>
                  <div className='pt-2 pb-2'>
                    <div className='flex items-center justify-between'>
                      <p className='text-[374151] text-[14px] font-medium pb-1'>
                        Password
                      </p>
                      {!is__submitted_once &&
                        <div
                          onClick={generatePasswordForUser}
                          className='flex cursor-pointer items-center gap-1'>
                          <div className='w-[12px] '>
                            <Image
                              alt='random'
                              width={100}
                              className=' object-cover '
                              height={100}
                              src={'/random.png'}
                            />
                          </div>
                          <p className='text-[#6B7280] text-[14px]'>
                            Generate Password
                          </p>
                        </div>
                      }
                    </div>
                    <div className='flex items-center gap-2 pr-2 overflow-hidden border rounded-[8px] bg-white'>
                      <input
                        type='text'
                        required
                        value={password}
                        readOnly={is__submitted_once || loading}
                        onChange={e => blurTest(e.target.value)}
                        className='w-full outline-none font-light border-none py-[8px] px-[10px] text-[14px]'
                      />
                    </div>
                  </div>
                  {message.text !== '' ?
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
                    :
                    <p className='flex items-center opacity-0 gap-1 text-[14px] text-body'>
                      {' '}
                      <IoCheckmarkCircleSharp className='text-green-500 w-5 h-5' />{' '}
                      Hello hello hello
                    </p>
                  }
                  {annualType === 'monthly' &&
                    <>
                      <div className='flex items-center justify-center gap-1'>
                        <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
                        <p className='text-[14px] text-nowrap text-[#6B7280]'>
                          Add Promotion or Referral Code
                        </p>
                        <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
                      </div>

                      <div>
                        <p className='text-[374151] text-[14px] font-medium pb-1'>
                          Code
                        </p>
                        <div
                          className='flex relative items-center gap-2 pr-2
                           overflow-hidden border rounded-[8px] bg-white'>
                          <input
                            type='text'
                            readOnly={loading}
                            onChange={({ target }) =>
                              handlePromoChange(target.value)
                            }
                            className='w-full outline-none font-light border-none py-[8px] px-[10px] text-[14px]'
                            value={promoCode}
                          />
                          {iscorrectPromo !== null && promoCode !== '' &&
                            <>
                              {iscorrectPromo > 0 ?
                                <IoCheckmarkCircleSharp
                                  className='text-green-500 absolute
                                  right-3 top-[8px] w-5 h-5'
                                />
                                :
                                <IoMdClose className='w-5 h-5 absolute right-3 top-[8px] text-red-500' />
                              }
                            </>
                          }
                        </div>
                      </div>
                    </>
                  }

                  <div className='flex items-center pt-2 justify-center gap-1'>
                    <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
                    <p className='text-[14px] text-nowrap text-[#6B7280]'>
                      Pay with credit card
                    </p>
                    <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
                  </div>

                  <div className='relative'>
                    <CardElement onChange={handleCardChange} />
                    {loading &&
                      <div className=' w-full h-full bg-transparent absolute top-0 left-0 z-30'></div>
                    }
                  </div>
                  {errorMessage !== '' || lastMessage !== '' ?
                    <p className='text-red-500 text-[14px] pt-1'>
                      {errorMessage || lastMessage}
                    </p>
                    :
                    <p className='text-red-500 opacity-0  text-[14px] pt-1'>
                      Error message will show here
                    </p>
                  }
                </div>
              </div>

              <div className=' hidden lg:block w-full bg-[#F9FAFB] shadow-md custom-shadow px-[30px] py-[30px]'>
                {!loading ?
                  <>
                    {selectedServer?.stock > 0 && errorMessage === '' ?
                      <BorderGlowButton
                        btnType={'submit'}
                        text={'Pay and Deploy Now'}
                      />
                      :
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <BorderGlowButton
                              btnType={'button'}
                              text={
                                selectedServer?.stock > 0
                                  ? 'Pay and Deploy Now'
                                  : 'Out of Stock'
                              }
                              isDisabled={true}
                            />
                          </TooltipTrigger>
                          {selectedServer?.stock <= 0 &&
                            <TooltipContent>
                              <p>Unavailable. We will be back soon.</p>
                            </TooltipContent>
                          }
                        </Tooltip>
                      </TooltipProvider>
                    }
                  </>
                  :
                  <BorderGlowButton
                    btnType={'button'}
                    text={'Deploying..'}
                    isDisabled={true}
                    isdeploying={true}
                  />
                }
                <p className='mt-1 text-center text-[10px] text-body'>
                  By submitting this form, I confirm that I have read and
                  understood the QuantVPS{' '}
                  <Link href={'/legal'} className='text-[#8A63D2] font-medium'>
                    Terms.
                  </Link>
                </p>
              </div>
            </div>

            {!dataLoading ?
              <div className='px-3  lg:hidden pt-3 pb-3'>
                <div className='flex items-center justify-center gap-1'>
                  <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
                  <p className='text-[14px] text-nowrap text-[#6B7280]'>
                    Order Summary
                  </p>
                  <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
                </div>
                <div className='mt-3 rounded-[12px] relative border bg-[#F3F4F6]  p-3 overflow-hidden lg:p-[30px]'>
                  <div className='w-[12px] lg:hidden bg-[#F3F4F6] absolute top-0 right-0 h-full z-40'></div>
                  <p className='text-[#1A1A1A] font-medium'>Order Details</p>
                  <div className='relative'>
                    <div className='absolute text-[#1A1A1A] z-10 font-light  opacity-20'>
                      .....................................................................................................................
                    </div>
                    <div className='text-[#1A1A1A] relative z-20 flex items-center justify-between font-medium '>
                      <p className=' text-opacity-30 text-[#1A1A1A] bg-[#F3F4F6] '>
                        Plan
                      </p>
                      <p className=' opacity-100 bg-[#F3F4F6] '>
                        {selectedServer?.name}
                      </p>
                    </div>
                  </div>
                  <div className='relative'>
                    <div className='absolute text-[#1A1A1A] z-10 font-light  opacity-20'>
                      .....................................................................................................................
                    </div>
                    <div className='text-[#1A1A1A] relative z-20 flex items-center justify-between font-medium '>
                      <p className=' text-opacity-30 text-[#1A1A1A] bg-[#F3F4F6] '>
                        CPU
                      </p>
                      <p className=' opacity-100 bg-[#F3F4F6] '>
                        {selectedServer?.description?.CPU}
                      </p>
                    </div>
                  </div>
                  <div className='relative'>
                    <div className='absolute text-[#1A1A1A] z-10 font-light  opacity-20'>
                      .....................................................................................................................{' '}
                    </div>
                    <div className='text-[#1A1A1A] relative z-20 flex items-center justify-between font-medium '>
                      <p className=' text-opacity-30 text-[#1A1A1A] bg-[#F3F4F6] '>
                        {' '}
                        RAM
                      </p>
                      <p className=' opacity-100 bg-[#F3F4F6] '>
                        {selectedServer?.description?.RAM}
                      </p>
                    </div>
                  </div>
                  <div className='relative'>
                    <div className='absolute text-[#1A1A1A] z-10 font-light  opacity-20'>
                      .....................................................................................................................
                    </div>
                    <div className='text-[#1A1A1A] relative z-20 flex items-center justify-between font-medium '>
                      <p className=' text-opacity-30 text-[#1A1A1A] bg-[#F3F4F6] '>
                        Storage
                      </p>
                      <p className=' opacity-100 bg-[#F3F4F6] '>
                        {' '}
                        {selectedServer?.description?.storage}
                      </p>
                    </div>
                  </div>
                  <div className='relative'>
                    <div className='absolute text-[#1A1A1A] z-10 font-light  opacity-20'>
                      .....................................................................................................................
                    </div>
                    <div className='text-[#1A1A1A] relative z-20 flex items-center justify-between font-medium '>
                      <p className=' text-opacity-30 text-[#1A1A1A] bg-[#F3F4F6] '>
                        Location
                      </p>
                      <p className=' opacity-100 bg-[#F3F4F6] '>
                        {' '}
                        {
                          dynamicLocations?.filter(
                            item => item?.id === parseInt(location)
                          )?.[0]?.name
                        }
                      </p>
                    </div>
                  </div>
                  <div className='relative'>
                    <div className='absolute text-[#1A1A1A] z-10 font-light  opacity-20'>
                      .....................................................................................................................
                    </div>
                    <div className='text-[#1A1A1A] relative z-20 flex items-center justify-between font-medium '>
                      <p className=' text-opacity-30 text-[#1A1A1A] bg-[#F3F4F6] '>
                        Operating
                      </p>
                      <p className=' opacity-100 bg-[#F3F4F6] '>
                        {
                          dynamicOperatings?.filter(
                            item => item?.id === parseInt(os)
                          )?.[0]?.name
                        }
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      'relative pb-2 border-b' +
                      (discount > 0 ? 'visible' : ' collapse')
                    }>
                    <div className='absolute text-[#1A1A1A] z-10 font-light  opacity-20'>
                      {'.'.repeat(117)}
                    </div>
                    <div className='text-[#1A1A1A] relative z-20 flex items-center justify-between font-medium '>
                      <p className=' text-opacity-30 text-[#1A1A1A] bg-[#F3F4F6] '>
                        Promo / Referral discount
                      </p>
                      {discount > 0 &&
                        <p className=' opacity-100 bg-[#F3F4F6] '>
                          {promoItem?.percent_off
                            ? `${promoItem.percent_off}%`
                            : `$${discount}`}
                        </p>
                      }
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <p className='text-[#1A1A1A] text-opacity-50 text-[15px]'>
                      Total
                    </p>
                    {discount ?
                      <p className='text-[#1A1A1A] text-[14px]  '>
                        First {annualType.replace('ly', '')}
                        <span className=' font-semibold text-[18px]'>
                          {' '}
                          ${amount - discount}
                        </span>{' '}
                        then{' '}
                        <span className='font-semibold  text-[18px]'>
                          ${amount}
                        </span>
                        /{annualType}
                      </p>
                      :
                      <p className='text-[#1A1A1A] text-[14px] font-semibold '>
                        ${amount}
                        <span className='text-[14px] font-base text-[#1A1A1A] text-opacity-50'>
                          / {annualType}
                        </span>
                      </p>
                    }
                  </div>
                  <p
                    className={
                      'text-right text-[11px] text-green-600 ' +
                      (discount > 0 ? 'visible' : 'collapse')
                    }>
                    (note: promo only applies to first{' '}
                    {annualType.replace('ly', '')})
                  </p>
                </div>
              </div>
              :
              <div className='px-3'>
                <Skeleton className={'w-full lg:hidden  h-[271px] mt-3'} />
              </div>
            }
            <div className='  lg:hidden    left-0 w-full bg-[#F9FAFB] shadow-md custom-shadow px-[30px] py-[16px]'>
              {!loading ?
                <>
                  {selectedServer?.stock > 0 ?
                    <BorderGlowButton
                      btnType={'submit'}
                      text={'Pay and Deploy Now'}
                    />
                    :
                    <BorderGlowButton
                      btnType={'button'}
                      text={'Pay and Deploy Now'}
                      isDisabled={true}
                    />
                  }
                </>
                :
                <BorderGlowButton
                  btnType={'button'}
                  text={'Deploying...'}
                  isdeploying={true}
                  isDisabled={true}
                />
              }
              <p className='mt-1 text-center text-[10px] text-body'>
                By submitting this form, I confirm that I have read and
                understood the QuantVPS{' '}
                <Link href={'/legal'} className='text-[#8A63D2] font-medium'>
                  Terms.
                </Link>
              </p>
            </div>
          </div>
          :
          <>
            <div className='relative'>
              <div className='h-full flex items-center flex-col gap-2 justify-center'>
                <div className='w-[50px] '>
                  <Image
                    alt='success'
                    width={200}
                    className=' object-cover '
                    height={200}
                    src={'/home/success.png'}
                  />
                </div>
                <h1 className=' font-semibold text-[24px] leading-[28px] pt-2 text-main'>
                  Welcome to QuantVPS!
                </h1>
                <p className='text-center text-[16px] leading-[24px] text-[#333333]'>
                  Your server is deploying. Please activate your <br /> account
                  by clicking the link sent to your email:
                </p>

                <div className='mt-3 flex items-center justify-center'>
                  <div className='px-3 text-[16px] font-semibold text-main bg-[#F6F6F6] py-1'>
                    {email}
                  </div>
                </div>
              </div>
              <div className=' mt-[10px]  absolute bottom-0 z-50 left-0 w-full bg-[#F9FAFB] shadow-md custom-shadow px-[30px] py-[16px]'>
                <button
                  onClick={() => setOpen(false)}
                  className='mt-2 w-full bg-main rounded-[6px] font-semibold text-center text-[14px] text-white py-[12px] cursor-pointer'>
                  Back to home
                </button>
              </div>
            </div>
          </>
        }
      </form>
    </div>
  )
}

const CustomPayment = ({
  open,
  setOpen,
  oneserver,
  mainVpServers,
  setOpen2,
  open2,
  setshowConfetti,
  annualType,
  setAnnualType
}) => {
  return (
    <div className=' max-h-screen relative min-h-screen'>
      {!open2 ?
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent className='transform scale-90'>
            <PaymentComponent
              setOpen={setOpen}
              oneserver={oneserver}
              setshowConfetti={setshowConfetti}
              mainVpServers={mainVpServers}
              annualType={annualType}
              setAnnualType={setAnnualType}
            />
          </AlertDialogContent>
        </AlertDialog>
        :
        <>
          <Drawer open={open2} onOpenChange={setOpen2}>
            <DrawerContent>
              <PaymentComponent
                setOpen={setOpen2}
                oneserver={oneserver}
                setshowConfetti={setshowConfetti}
                mainVpServers={mainVpServers}
                annualType={annualType}
                setAnnualType={setAnnualType}
              />
            </DrawerContent>
          </Drawer>
        </>
      }
    </div>
  )
}

const DotItem = () => {
  return (
    <div className='absolute text-[#1A1A1A] z-10 font-light  opacity-20'>
      .........................................................................................................
    </div>
  )
}

export default CustomPayment
