import Access from '@/components/home/Access'
import Cloud from '@/components/home/Cloud'
import HomeHero from '@/components/home/HomeHero'
import HomeNavbar from '@/components/home/HomeNavbar'
import HomeTopbar from '@/components/home/HomeTopbar'
import { MdArrowRight } from 'react-icons/md'
import Hosting from '@/components/home/Hosting'
import Professional from '@/components/home/Professional'
import Faq from '@/components/home/FAQ'
import Pricing from '@/components/home/Pricing'
import { useState, useEffect, useContext } from 'react'
import { getOffers } from '@/datawagon'
import { servers } from '@/data/servers'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

import CustomPayment from '@/components/home/CustomPayment'
import ConfettiComponent from '@/components/global/Confetti'
import { MyContext } from './_app'
import { Elements } from '@stripe/react-stripe-js'
// import createProduct from "../stripe/createProduct";
// import { demodedicated } from "../data/demo";
import Head from 'next/head'

export default function Home() {
  // This will prevent rendering SignIn component when the redirection happens
  const { stripePromise, setGlobLoading } = useContext(MyContext)
  const [mainVpServers, setMainVpServers] = useState([])
  const [vpsAll, setVpsAll] = useState([])
  const [selectedServer, setSelectedServer] = useState(null)
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [loading, setLoading] = useState(true)
  const [promoCode, setPromoCode] = useState('Claim Promo')
  const [annualType, setAnnualType] = useState('monthly')
  const [pubKey, setPubKey] = useState('')

  const orderNewServer = async () => {
    setGlobLoading(true) // TODO temp solution, migrate to react-query later
    const productData = (await getOffers(19))?.products || [] //19 cat
    setMainVpServers([...productData])
    let demServers = servers
    servers.forEach((item, ind) => {
      let product = productData?.filter(pro => pro?.pid === item.pid)
      if (product?.length > 0) {
        demServers[ind].stock = product?.[0]?.stocklevel
      }
    })
    setVpsAll([...demServers])
    setGlobLoading(false)
  }
  useEffect(() => {
    orderNewServer()
  }, [])

  const [showConfetti, setshowConfetti] = useState(false)
  useEffect(() => {
    if (showConfetti) {
      setTimeout(() => {
        setshowConfetti(false)
      }, 5000)
    }
  }, [showConfetti])

  useEffect(() => {
    setPubKey(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  }, [])


  return (
    <>
      <Head>
        <title>QuantVPS</title>
      </Head>
      {stripePromise && pubKey &&
        <Elements stripe={stripePromise}>
          <div className=' w-full min-h-screen'>
            {showConfetti && <ConfettiComponent />}
            <div
              className={`min-h-screen relative bg-[#F7F7F8] transition-transform ease-in-out duration-300 ${
                open2
                  ? ' transform scale-x-[97%]  -translate-y-5 '
                  : ' transform scale-x-100 translate-y-0 '
              }`}>
              <HomeTopbar />
              <HomeNavbar
                setOpen={setOpen}
                setOpen2={setOpen2}
                mainVpServers={vpsAll}
                setSelectedServer={setSelectedServer}
              />
              {/* <TestNavbar /> */}
              <div className='flex mt-[16px] mb-[10px] w-full  items-center gap-2 lg:gap-3 justify-center'>
                <p className='text-[11px] lg:text-[12px] text-main'>
                  <span className='text-[#067A6E] bg-[#D4F7F0] px-2 py-2 rounded-[23px] mr-2'>
                    🎉New
                  </span>{' '}
                  {/* Get 2 months free with annual plans! */}
                  New Customers Get 50% OFF
                </p>
                <div
                  onMouseOut={() => setPromoCode('Claim Promotion')}
                  onMouseOver={() => setPromoCode('Quant50')}
                  className='border hidden lg:flex cursor-pointer px-3 py-2 group shadow-md
                  text-[11px]  lg:text-[12px] items-center gap-1 rounded-[23px] text-main'>
                  {promoCode}{' '}
                  <div className='transition group-hover:translate-x-1'>
                    <MdArrowRight className='w-5 h-5' />
                  </div>
                </div>
                <div
                  onMouseOut={() => setPromoCode('Claim')}
                  onMouseOver={() => setPromoCode('Quant50')}
                  className='border flex lg:hidden cursor-pointer pl-2 pr-1 py-1 group shadow-md
                  text-[11px]  lg:text-[12px] items-center  rounded-[23px] text-main'>
                  {promoCode}
                  <MdArrowRight className='w-4 h-4' />
                </div>
              </div>
              <HomeHero
                setOpen={setOpen}
                vpsAll={vpsAll}
                annualType={annualType}
                setAnnualType={setAnnualType}
                setSelectedServer={setSelectedServer}
                setOpen2={setOpen2}
                mainVpServers={mainVpServers}
              />
              {open &&
                <CustomPayment
                  setshowConfetti={setshowConfetti}
                  open={open}
                  mainVpServers={vpsAll}
                  setOpen={setOpen}
                  oneserver={selectedServer}
                  open2={open2}
                  setOpen2={setOpen2}
                  annualType={annualType}
                  setAnnualType={setAnnualType}
                />
              }
              {open2 &&
                <CustomPayment
                  setshowConfetti={setshowConfetti}
                  open={open}
                  mainVpServers={vpsAll}
                  setOpen={setOpen}
                  oneserver={selectedServer}
                  open2={open2}
                  setOpen2={setOpen2}
                  annualType={annualType}
                  setAnnualType={setAnnualType}
                />
              }
              <Hosting />
              <Access />
              <Cloud
                setOpen={setOpen}
                setSelectedServer={setSelectedServer}
                setOpen2={setOpen2}
                mainVpServers={mainVpServers}
              />
              <Professional
                setOpen={setOpen}
                setSelectedServer={setSelectedServer}
                setOpen2={setOpen2}
                mainVpServers={mainVpServers}
              />
              <Faq />
              <Pricing
                setOpen2={setOpen2}
                setOpen={setOpen}
                vpsAll={vpsAll}
                setSelectedServer={setSelectedServer}
                mainVpServers={mainVpServers}
              />
              <Footer />
              {/*
               */}
            </div>
            {!loading &&
              <div className='h-screen w-full   bg-white fixed top-0 left-0 z-[500] '>
                <div className='flex items-center justify-center w-full h-full'>
                  <div className='flex items-center gap-2'>
                    <div className='w-[37px]'>
                      <Image
                        alt='logo'
                        width={300}
                        height={300}
                        src={'/logo.png'}
                        className='w-full object-cover'
                      />
                    </div>
                    <div>
                      <h6 className='text-[#09090B] text-[16px] f_bold'>
                        Trading Servers
                      </h6>
                      <p className='text-[12px] opacity-40 text-[#262626]'>
                        By <span className='f_bold'>QuantVPS.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </Elements>
      }
    </>
  )
}
