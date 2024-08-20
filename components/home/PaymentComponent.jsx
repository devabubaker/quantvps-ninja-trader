import React, { useState, useEffect, useContext, useCallback, useRef } from 'react'
import { useSignUp, useClerk } from '@clerk/nextjs'
// import { deployTemplate } from '@/templates/deploytemplate'
import Image from 'next/image'
import { servers } from '../../data/servers'
// import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { IoMdSync } from 'react-icons/io'
// import { detectCardType } from "../../lib/tests";
import { MyContext } from '../../pages/_app'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { IoCloseSharp } from 'react-icons/io5'
import Skeleton from '../global/Skeleton'
import { generateRandomPassword, testEmail } from '@/lib/tests'
import Link from 'next/link'
import {
  deployCustomServer,
  stripeUpdateMeta,
  getoneProduct,
  payInvoice,
  getDWConfig
} from '@/datawagon'
import { useStripe, useElements, PaymentElement, ExpressCheckoutElement } from '@stripe/react-stripe-js'
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
import { Input } from '../ui/input'
import { DotItem } from './CustomPayment'

const payOptions =  { layout: { type: 'tabs' }, business: { name: 'QuantVPS' },
  defaultValues: { billingDetails: { email: '@' } }
}

const expressOptions =  { layout: { maxRows: 1 }, paymentMethodOrder: ['apple_pay', 'google_pay', 'paypal', 'link'] }

const PaymentComponent = ({
  mainVpServers,
  setOpen,
  setshowConfetti,
  annualType,
  setAnnualType,
  setSelectedServer,
  selectedServer
}) => {
  const elements = useElements()
  const { signUp, isLoaded } = useSignUp()
  const { thisUser } = useContext(MyContext)
  const [location, setLocation] = useState('')
  const [os, setOs] = useState('')
  const [loading, setLoading] = useState(false)
  const [dataLoading, setDataLoading] = useState(true)
  const [dynamicOperatings, setDynamicOperatings] = useState([])
  const [dynamicLocations, setDynamicLocations] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [addedMoney] = useState(null)
  const [discount, setDiscount] = useState()
  const [amount, setAmount] = useState()
  const [promoCode, setPromoCode] = useState('')
  const [iscorrectPromo, setIscorrectPromo] = useState(null)
  const [promoItem, setPromoItem] = useState(null)
  const [processStep, setProcessStep] = useState(1)
  const [user, setUser] = useState()
  const [formComplete, setFormComplete] = useState(false)
  const [stripeLoading, setStripeLoading] = useState({express: true, payment: true})
  const [email, setEmail] = useState(null)
  const [accountPassword, setAccountPassword] = useState(null)
  const emailInput = useRef()
  const paymentArea = useRef()
  const expressArea = useRef()
  const clerk = useClerk()
  const stripe = useStripe()

  const realMode =
    /live/.test(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) &&
    /quantvps\.com/.test(process.env.NEXT_PUBLIC_DOMAIN_NAME)

  const collapse = () => {
    elements.getElement(PaymentElement)?.collapse()
  }

  const stripeReady = evt => {
    if (evt?.elementType === 'expressCheckout') {
      setStripeLoading({...stripeLoading, express: false})
    } else {
      setStripeLoading({...stripeLoading, payment: false})
    }
    if (amount) elements.update({ mode:'subscription', amount: (amount - discount) * 100 })
  }

  useEffect(() => {
    if (testEmail(email)) {
      const args = { email, defaultValues: { billingDetails: { email } } }
      elements.getElement(PaymentElement)?.update(args)
    }
  }, [elements, email])


  useEffect(() => {
    if (amount) elements.update({ mode:'subscription', amount: 100 * (amount - discount) })
  },[amount, discount, elements])

  const handleErr = e =>{
    setErrorMessage((e.errors ? e.errors[0].long_message
      ?? e.errors[0].message : e.long_message ?? e.message) ?? 'Something went wrong')
  }

  const stripeConfirm = async params => {
    elements.getElement(PaymentElement)?.unmount()
    setEmail(params.billingDetails.email)
    await handlePaymentSubmit(params)
  }

  const stripeCancel = () => {
    setLoading(false)
    setErrorMessage('Payment has canceled by user')
  }

  const hideExpress = () => {
    elements.getElement(ExpressCheckoutElement)?.unmount()
    expressArea.current.classList.add('hidden')
  }

  const stripeClick = params => {
    collapse()
    paymentArea.current.classList.add('hidden')
    if (validate(false) && selectedServer.stock > 0) {
      params.resolve({ business: {name: 'QuantVPS'}, emailRequired: true })
      setLoading(true)
    } else if (selectedServer.stock < 1) {
      setErrorMessage('Selected plan out of stock')
    }
  }

  const sendTag = (evt, data = {}) => {
    if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.indexOf('test') === -1) {
      sendGTMEvent({ ecommerce: null, event: null })
      sendGTMEvent({ event: evt, ecommerce: data, currency: 'USD' })
    }
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
    if (signUp.emailAddress) setEmail(signUp.emailAddress)
  }, [])

  useEffect(() => {
    if (errorMessage !== '' && formComplete)
      sendTag('error', { error: errorMessage })
  }, [formComplete, errorMessage])

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

  const refreshSelected = useCallback(async id => {
    setDataLoading(true)
    const response = await getoneProduct(id)
    const data = response?.products || []
    if (data?.product?.length > 0) {
      const filterOs =
        data?.product?.[0]?.configoptions?.configoption?.[0]?.options?.option?.filter(
          item =>
            item?.name?.includes('ubuntu') || item?.name?.includes('windows')
        )
      setDynamicOperatings([...filterOs])
      const filterGeo =
        data?.product?.[0]?.configoptions?.configoption?.[3]?.options
          ?.option
      setDynamicLocations([...filterGeo])
    }
    setDataLoading(false)
  }, [])

  const changeTypeServer = id => {
    let data = servers.filter(item => item.pid === parseInt(id))?.[0]
    setSelectedServer(data)
  }

  useEffect(() => {
    if (thisUser) {
      setUser(thisUser)
    }
  }, [thisUser])


  const handlePromoChange = code => {
    if (code === '') {
      setPromoItem(null)
      setIscorrectPromo(null)
    }
    setPromoCode(code)
  }

  const validateEmail = () => {
    const target = emailInput.current
    const result = testEmail(target.value)
    if (result) {
      target.classList.remove('invalid')
    } else {
      setFormComplete(false)
      target.classList.add('invalid')
    }
    setEmail(target.value)
    return result
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

  const deployNewServer = async (subscriptionId, customerid) => {
    let configOp = getDWConfig(addedMoney, os, location)
    const invoice = {}
    const passwd = generateRandomPassword()
    if (realMode) {
      Object.assign(
        invoice,
        await deployCustomServer(
          selectedServer.pid,
          'Server',
          passwd,
          configOp
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
      customer: customerid,
      subscriptionId,
      plan_type: selectedServer.name,
      domain: 'Server',
      password: passwd,
      location: getLoc(),
      invoiceid: invoice.invoiceid,
      os: getOs(),
      orderid: invoice.orderid,
      ip: 'pending',
      serviceid: invoice.serviceids
    }
    return metadata
  }

  const validate = ({target}) => {
    setErrorMessage('')
    if (!target) {
      target = document.querySelector('#deploy-form')
    }
    const data = Object.fromEntries(new FormData(target))
    Object.entries(data).forEach(entry => {
      if (entry[1]) {
        target[entry[0]].parentElement.classList.remove('invalid')
      } else {
        target[entry[0]].parentElement.classList.add('invalid')
      }
    })
    const state = Object.values(data).some(v => !v) ? false : data
    setFormComplete(!!state && validateEmail())
    if (!state) setErrorMessage('Please complete the highlighted fields.')
    return state
  }

  const sendPurchaseTag = (transactionId, billingDetails, stripeUser) => {
    realMode && sendTag('purchase', {
      price: amount,
      coupon: promoItem.id,
      currency: 'USD',
      value: amount,
      discount,
      transaction_id: transactionId,
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
  }

  const submitForm = evt => {
    evt.preventDefault()
    elements.getElement(ExpressCheckoutElement)?.unmount()
    expressArea.current.classList.add('hidden')
    const formData = validate(evt)
    handlePaymentSubmit(formData).then()
  }

  const handlePaymentSubmit = async params => {
    try {
      const result = await elements.submit()
      const billingEmail = params.billingDetails?.email || email
      elements.update({defaultValues: params.billingDetails ?? {billingDetails: email }})
      if (!result.error) {
        setLoading(true)
        elements.getElement(params?.elementType === 'expressCheckout'
          ? PaymentElement : ExpressCheckoutElement)?.unmount()
        const password = generateRandomPassword()
        setAccountPassword(password)
        const clerkSignUp = billingEmail && signUp.emailAddress === billingEmail ? signUp
          : await signUp.create({emailAddress: billingEmail, password })
        const stripeData = clerkSignUp.unsafeMetadata.stripeData ?? {}
        collapse()
        if (!stripeData?.customer) {
          stripeData.customer  = await createStripeUser(clerkSignUp.emailAddress)
          if (stripeData.customer.error) throw stripeData.customer.error
          clerkSignUp.update({ unsafeMetadata: stripeData })
        }
        if (!stripeData.subscriptionId) {
          const key = `${annualType}_id`
          const subscription = await createSubscriptionForUser(
            billingEmail, selectedServer[key], stripeData.customer, promoItem.id)
          if (subscription.error) throw subscription.error
          Object.assign(stripeData, subscription)
          clerkSignUp.update({unsafeMetadata: { ...clerkSignUp.unsafeMetadata, stripeData } })
        }
        const result = elements.update({ clientSecret: stripeData.clientSecret })
        if (result?.error) throw result.error
        await elements.fetchUpdates()
        const confirmation = await stripe.confirmPayment({
          elements, clientSecret: stripeData.clientSecret, redirect: 'if_required', confirmParams: {
            receipt_email: billingEmail, return_url: window.location.origin
          }, expand: ['latest_charge', 'payment_method']
        })
        if (confirmation.error) {
          if (confirmation.error.payment_intent?.status === 'succeeded') {
            Object.assign(confirmation, confirmation.error)
          } else {
            throw confirmation.error
          }
        }
        sendPurchaseTag(confirmation.id, confirmation.billing_details, stripeData.customer)
        const paymentMethod = confirmation.paymentIntent
          ? confirmation.paymentIntent.payment_method
          : confirmation.payment_intent.payment_method
        await helpStripe.customers.update(stripeData.customer, { invoice_settings:
          { default_payment_method: paymentMethod }})
        clerkSignUp.update({unsafeMetadata: {...clerkSignUp.unsafeMetadata,
          payment: paymentMethod }})
        const prepare = await clerkSignUp.prepareVerification(
          {strategy: 'email_link', redirectUrl: clerk.buildSignInUrl(),
            actionCompleteRedirectUrl: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/dashboard`  })
        if (prepare.error) throw prepare.error
        if (!clerkSignUp.unsafeMetadata.orderid) {
          const metaData = await deployNewServer(stripeData.subscriptionId, stripeData.customer)
          let deploydata = await stripeUpdateMeta(metaData)
          const payment = realMode
            ? await payInvoice(deploydata.invoiceid)
            : { success: true }
          if (payment?.error) {
            throw new payment.error
          }
          setshowConfetti(true)
          setProcessStep(2)
          setLoading(false)
          await clerkSignUp.update({unsafeMetadata: {...clerkSignUp.unsafeMetadata, ...metaData }})
        }
      } else {
        throw new Error(result.error.message)
      }
    } catch (e) {
      handleErr(e)
    }
    setLoading(false)
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
    refreshSelected(selectedServer.pid)
  }, [])

  return (
    <div
      className=' lg:max-w-[1024px]  mx-auto items-center justify-center
    relative lg:min-w-[1024px] bg-white rounded-xl py-0 text-sm'>
      {!loading && <>
        <div className='absolute top-3 hidden lg:block right-10 z-30'>
          <ResetFab />
        </div>
        <div className='absolute top-3 hidden lg:block right-3 z-30'>
          <IoCloseSharp
            onClick={() => {
              setOpen(false)
            }}
            className='w-5 h-5 cursor-pointer text-[#6B7280]'
          />
        </div>
      </>
      }
      <form
        noValidate
        id='deploy-form'
        readOnly={loading ? 1 : undefined}
        disabled={loading ? 1 : undefined}
        onSubmit={submitForm}
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
          <p className='text-black font-medium text-lg'>Deploy VPS</p>
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
          <p className='text-black font-medium text-lg'>Account Details</p>
        </div>
        <div className='px-2 lg:px-[40px] block w-full h-full py-1'>
          <div className='flex items-center lg:mt-0 justify-center gap-1'>
            <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
            <p className='text-nowrap text-[#6B7280]'>Configure Server</p>
            <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
          </div>
          <div className='grid relative mt-2 grid-cols-1'>
            {processStep !== 1 &&
              <div className=' absolute top-0 left-0 w-full h-full z-30 bg-transparent'></div>
            }
            {loading && <div className='overflow-clip w-full h-full top-0 left-0 z-30
              backdrop-blur-sm absolute bg-transparent block'></div>
            }
            <div className='w-full border rounded-xl overflow-hidden grid grid-cols-2 items-center'>
              <div className='w-full px-2 flex items-center justify-start h-full bg-white'>
                <p className=' text-nowrap text-[#b7bcc2] '>
                  Select VPS Plan:
                </p>
              </div>
              <Select
                name='pid'
                readOnly={loading}
                defaultValue={`${selectedServer?.pid}`}
                onValueChange={changeTypeServer}>
                <SelectTrigger
                  className='border border-[#F9FAFB] capitalize'
                  disabled={loading}>
                  <SelectValue placeholder='Plan Type' />
                </SelectTrigger>
                <SelectContent>
                  {mainVpServers?.map((item, ind) =>
                    <SelectItem
                      key={ind}
                      disabled={item.stock > 0 === false}
                      value={`${item.pid}`}>
                      {' '}
                      {item.name} (Available: {item.stock})
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
            <div
              className='w-full border mt-1 rounded-xl overflow-hidden
              grid grid-cols-2 items-center lg:col-span-2'>
              <div className='w-full px-2 flex items-center justify-start h-full bg-white'>
                <p className=' text-nowrap text-[#b7bcc2] '>
                  Select Operating System
                </p>
              </div>
              <Select
                name='os'
                readOnly={loading}
                required
                onValueChange={val => {
                  setOs(val)
                  validate(false)
                }}>
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
              className='w-full border mt-1 rounded-xl overflow-hidden
              grid grid-cols-2 items-center lg:col-span-2'>
              <div className='w-full px-2 flex items-center justify-start h-full bg-white'>
                <p className=' text-nowrap text-[#b7bcc2] '>
                  Select Location
                </p>
              </div>
              <Select
                name='geo'
                readOnly={loading}
                required
                onValueChange={val => {
                  setLocation(val)
                  validate(false)
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
              className='w-full border mt-1 rounded-xl
                overflow-hidden  grid grid-cols-2 items-center lg:col-span-2'>
              <div className='w-full px-2 flex items-center justify-start h-full bg-white'>
                <p className='text-nowrap text-[#b7bcc2] '>Plan type</p>
              </div>
              <Select
                name='annual'
                onValueChange={e => {
                  setAnnualType(e)
                }}
                defaultValue={annualType}
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
            {annualType === 'monthly' &&
              <>
                <div>
                  <div
                    className='w-full border mt-1 rounded-xl
                    overflow-hidden  grid grid-cols-2 items-center lg:col-span-2'>
                    <div className='w-full px-2 flex items-center justify-start h-full bg-white'>
                      <p className='text-nowrap text-[#b7bcc2] '>Promo code</p>
                    </div>
                    <input
                      type='text'
                      readOnly={loading}
                      placeholder='Promo code'
                      onChange={({ target }) =>
                        handlePromoChange(target.value)
                      }
                      className={`w-full rounded-md border-l border-gray-100 font-light
                        py-2 px-3 shadow-sm placeholder:text-gray-500 focus:outline-none
                        ring-offset-white 
                        ${iscorrectPromo > 0 ? 'bg-green-200': 'bg-red-200'}`}
                      value={promoCode}
                    />
                    {/* {iscorrectPromo !== null && promoCode !== '' &&
                    <>
                      {iscorrectPromo > 0 ?
                        <IoCheckmarkCircleSharp
                          className='text-green-500 absolute
                            safari-fix right-3 w-5 h-5'
                        />
                        :
                        <IoMdClose className='w-5 h-5 absolute right-3 text-red-500' />
                      }
                    </>
                    } */}
                  </div>
                </div>
              </>
            }
          </div>
          <div className='hidden lg:flex mt-2 items-center justify-center gap-1'>
            <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
            <p className='text-nowrap text-[#6B7280]'>Order Summary</p>
            <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
          </div>
          <div
            className='mt-2 hidden lg:block rounded-xl relative border
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
              <p className='text-[#1A1A1A] text-opacity-50 text-base'>
                Total
              </p>
              {discount ?
                <p className='text-[#1A1A1A]   '>
                  First {annualType.replace('ly', '')}{' '}
                  <span className=' font-medium text-base'>
                    ${amount - discount}
                  </span>{' '}
                  then{' '}
                  <span className='font-medium  text-base'>${amount}</span>/
                  {annualType}
                </p>
                :
                <p className='text-[#1A1A1A] text-base font-semibold '>
                  ${amount}
                  <span className='font-base text-[#1A1A1A] text-opacity-50'>
                    /{annualType}
                  </span>
                </p>
              }
            </div>
            <p
              className={
                'text-right  text-green-600 mt-2 ' +
                  (discount > 0 ? 'visible' : 'collapse')
              }>
              (note: promo only applies to first{' '}
              {annualType.replace('ly', '')})
            </p>
          </div>
        </div>
        {processStep === 1 ?
          <div className='relative overflow-y-scroll text-xs'>
            <div className='bg-[#F9F9F9]  '>
              <div className=' py-1 lg:px-0'>
                <div className=' w-full bg-[#F9FAFB] px-1 lg:px-2'>
                  <div ref={expressArea}>
                    <div className='flex items-center pt-2 justify-center gap-1'>
                      <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
                      <p className='text-nowrap text-[#6B7280]'>
                        Express stripe checkout
                      </p>
                      <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
                    </div>
                    <div id='expressElement' className='relative pt-2 min-h-[52px]'>
                      {stripeLoading.express && <div className='grid grid-cols-2 gap-2'>
                        <Skeleton className={'min-h-10'} />
                        <Skeleton className={'min-h-10'} />
                      </div>}
                      <ExpressCheckoutElement
                        disabled={true}
                        className={stripeLoading.express ? 'hidden' : ''}
                        onConfirm={stripeConfirm}
                        onReady={stripeReady}
                        onClick={stripeClick}
                        onCancel={stripeCancel}
                        onLoadError={err => setErrorMessage(err.message)}
                        options={{...expressOptions }}
                      />
                      <p className={`text-red-500 text-sm font-semibold left-4 ${errorMessage ? '' : 'opacity-0'}`}>
                        {errorMessage}{' '}
                      </p>
                    </div>
                  </div>
                  <div ref={paymentArea}>
                    <div className='flex items-center pt-2 justify-center gap-1'>
                      <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
                      <p className=' text-nowrap text-[#6B7280]'>
                        Or pay another way
                      </p>
                      <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
                    </div>
                    <label className='block pb-1 text-[#6B7280]'>Email
                      <div className='mb-1 flex items-center gap-2 pr-2 overflow-hidden border rounded-[8px] bg-white'>
                        <Input
                          ref={emailInput}
                          type='email'
                          defaultValue={email}
                          placeholder='Enter valid email'
                          required
                          disabled={loading}
                          onChange={validateEmail}
                          onFocus={hideExpress}
                          onBlur={validateEmail}
                          className='w-full outline-none font-light border-none py-1 px-[10px] text-xs'
                        />
                      </div>
                    </label>
                    <div className='relative py-0 my-0 min-h-[337px]' id='stripeElement'>
                      <PaymentElement
                        className='py-0 my-0'
                        onLoadError={err => setErrorMessage(err.message)}
                        onChange={handleCardChange}
                        onFocus={hideExpress}
                        onReady={stripeReady}
                        options={payOptions}
                      />
                    </div>
                    <p className={`text-red-500 text-sm font-semibold left-4 ${errorMessage ? '' : 'opacity-0'}`}>
                      {errorMessage}{' '}
                    </p>
                    <div className='hidden lg:block w-full bg-[#F9FAFB] shadow-md custom-shadow px-[30px] py-1 -mt-2'>
                      {!loading ?
                        <>
                          {formComplete && selectedServer?.stock > 0 ?
                            <BorderGlowButton
                              type={'submit'}
                              text={'Pay and Deploy Now'}
                            />
                            :
                            <TooltipProvider delayDuration={0}>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <BorderGlowButton
                                    className='w-full'
                                    type={'button'}
                                    disabled={selectedServer?.stock < 1}
                                    text={
                                      selectedServer?.stock > 0
                                        ? 'Pay and Deploy Now'
                                        : 'Out of Stock'
                                    }
                                    onClick={() => validate(false)}
                                  />
                                </TooltipTrigger>
                                {selectedServer?.stock < 1?
                                  <TooltipContent>
                                    <p>Selected plan unavailable. We will be back soon.</p>
                                  </TooltipContent>
                                  :
                                  <TooltipContent>
                                    <p>Please complete the highlighted fields.</p>
                                  </TooltipContent>
                                }
                              </Tooltip>
                            </TooltipProvider>
                          }
                        </>
                        :
                        <BorderGlowButton
                          type={'button'}
                          text={'Deploying..'}
                          disabled={true}
                          isdeploying='true'
                        />
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='px-3  lg:hidden pt-3 pb-3'>
              <div className='flex items-center justify-center gap-1'>
                <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
                <p className=' text-nowrap text-[#6B7280]'>Order Summary</p>
                <div className='w-full h-[1px] bg-opacity-30 bg-[#6B7280]'></div>
              </div>
              <div className='mt-3 rounded-xl relative border bg-[#F3F4F6] p-3 overflow-hidden lg:p-[30px]'>
                <div className='w-[12px] lg:hidden bg-[#F3F4F6] absolute top-0 right-0 h-full z-40'></div>
                <p className='text-[#1A1A1A] font-medium'>Order Details</p>
                <div className='relative'>
                  <div className='absolute text-[#1A1A1A] z-10 font-light  opacity-20'>
                    {'.'.repeat(117)}
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
                    {'.'.repeat(117)}
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
                    {'.'.repeat(117)}
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
                    {'.'.repeat(117)}
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
                    {'.'.repeat(117)}
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
                    {'.'.repeat(117)}
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
                    <p className='text-[#1A1A1A]   '>
                      First {annualType.replace('ly', '')}
                      <span className=' font-semibold text-base'>
                        {' '}
                        ${amount - discount}
                      </span>{' '}
                      then{' '}
                      <span className='font-semibold  text-base'>
                        ${amount}
                      </span>
                      /{annualType}
                    </p>
                    :
                    <p className='text-[#1A1A1A]  font-semibold '>
                      ${amount}
                      <span className=' font-base text-[#1A1A1A] text-opacity-50'>
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
            <div className='lg:hidden left-0 w-full bg-[#F9FAFB] shadow-md custom-shadow px-[30px] py-[16px]'>
              {!loading ?
                <>
                  {formComplete && selectedServer?.stock > 0 ?
                    <BorderGlowButton
                      type={'submit'}
                      text={'Pay and Deploy Now'}
                    />
                    :
                    <BorderGlowButton
                      type={'button'}
                      text={
                        formComplete ? 'Out of stock' : 'Pay and Deploy Now'
                      }
                      onClick={() => validate(false)}
                    />
                  }
                </>
                :
                <BorderGlowButton
                  type={'button'}
                  text={'Deploying...'}
                  isdeploying='true'
                  disabled={true}
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
                <div>Your account password is
                  <input type='text' value={accountPassword} readOnly={true}
                    className='block bg-green-400 font-semibold text-xl text-center rounded mx-0 px-0'/>
                  It will show only once (now).</div>
                <p className='text-center text-base leading-[24px] text-[#333333]'>
                  Your server is deploying. Please activate your <br /> account
                  by clicking the link sent to your email:
                </p>
                <div className='mt-3 flex items-center justify-center'>
                  <div className='px-3 text-base font-semibold text-main bg-[#F6F6F6] py-1'>
                    {email}
                  </div>
                </div>
              </div>
              <div
                className=' mt-[10px]  absolute bottom-0 z-50 left-0 w-full
                bg-[#F9FAFB] shadow-mdcustom-shadow px-[30px] py-[16px]'>
                <button
                  onClick={() => setOpen(false)}
                  className='mt-2 w-full bg-main rounded-[6px] font-semibold
                  text-center  text-white py-[12px] cursor-pointer'>
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

export const ResetFab = () => {
  const elements = useElements()
  const reset = () => {
    const items = { '#expressElement': ExpressCheckoutElement, '#stripeElement': PaymentElement }
    document.querySelectorAll('#deploy-form .hidden').forEach(v => v.classList.remove('hidden'))
    Object.entries(items).forEach(v => {
      const el = elements.getElement(v[1])
      try {
        el?.unmount()
      } catch (e) {
        console.log(e)
      }
      finally {
        el?.mount(v[0])
        el.update(v[1] === ExpressCheckoutElement ? expressOptions : payOptions)
      }
    })
  }

  return <TooltipProvider delayDuration={0}>
    <Tooltip>
      <TooltipTrigger>
        <IoMdSync className='w-6 h-6' onClick={reset} />
      </TooltipTrigger>
      <TooltipContent side='left'>
        <p>Reset payment methods</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
}

export default PaymentComponent
