import '@/styles/globals.scss'
import '@/styles/style.css'
import { ClerkProvider } from '@clerk/nextjs'
// import schedule from "node-schedule";
import { getHash, IntercomProvider } from '../util/intercomProvider'
import { useState } from 'react'
import { createContext } from 'react'
import { fetchUser } from '@/lib/getuser'
// Create the context
import { getActiveServers } from '@/datawagon'
export const MyContext = createContext()
// import { sheduleTaskEveryDay } from "../lib/ScheduleServerEveryday";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import GlobLayout from '@/components/layout/GlobLayout'
// import { GeistSans } from "geist/font/sans";
import { Toaster } from '@/components/ui/toaster'
import { loadStripe } from '@stripe/stripe-js'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import TagMan from '@/lib/GoogleTagManager'
// import { Elements } from "@stripe/react-stripe-js";

export default function App({ Component, pageProps }) {
  const pubKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  const [thisUser, setThisUser] = useState(null)
  const [currentServer, setCurrentServer] = useState(null)
  const [allMySevers, setAllMySevers] = useState([])
  const [globLoading, setGlobLoading] = useState(true)
  const router = useRouter()
  const [openPaymentAdd, setOpenPaymentAdd] = useState(false)

  const getCurrentUser = async (userid, email) => {
    const userdata = await fetchUser(userid, email)
    if (!userdata?.length) {
      setGlobLoading(false)
    } else {
      Object.assign(userdata[0], await getHash(), { clerk_id: userid })
      setThisUser(userdata[0])
      if (!userdata[0]?.invoice_settings?.default_payment_method) {
        setOpenPaymentAdd(true)
      }
      const stripeServerList = [...new Map(userdata[0]?.servers.map(item => [item.orderid, item])).values()]
      if (stripeServerList.length > 0) {
        const dwServerList = await getActiveServers({
          orders: Array.from(
            new Set(userdata[0].servers.map(v => v.orderid))
          ).filter(v => v)
        })
        const crossJoinServerList = []
        stripeServerList.forEach((item, ind) => {
          let findServer = dwServerList?.find(v => v.orderid === item.orderid)
          if (findServer) {
            crossJoinServerList.push({
              custom_id: ind + 1,
              ourServer: item,
              dataWagan: findServer
            })
          }
        })
        if (crossJoinServerList?.length > 0) {
          let sortfilter = crossJoinServerList.filter(
            item => item?.dataWagan?.status === 'Active' && item.ourServer.status === 'active'
          )
          let sortfilter2 = crossJoinServerList.filter(
            item => item?.dataWagan?.status !== 'Active' || item.ourServer.status !== 'active'
          )
          // console.log(sortfilter, 'sort')
          const let_fix = [...sortfilter, ...sortfilter2].map(item => {
            const params = {
              dedicated: item.dataWagan.name.indexOf('DW') === -1
            }
            const optionid = params.dedicated ? 79 : 284
            params.geo =
              item.dataWagan?.configoptions?.configoption?.find(
                v => v.id === optionid
              )?.value ?? 'Unknown'
            return { ...item, ...params }
          })
          setAllMySevers([...let_fix])
          setCurrentServer(let_fix[0])
        }
        setGlobLoading(false)
      }
      setGlobLoading(false)
    }
  }

  const { pathname } = router
  const [stripePromise, setStripePromise] = useState(null)

  useEffect(() => {
    if (pubKey) setStripePromise(loadStripe(pubKey))
  }, [pubKey])

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />
      </Head>
      <TagMan />
      <MyContext.Provider
        value={{
          thisUser,
          getCurrentUser,
          setCurrentServer,
          currentServer,
          allMySevers,
          setAllMySevers,
          globLoading,
          setGlobLoading,
          openPaymentAdd,
          setOpenPaymentAdd,
          stripePromise
        }}>
        <ClerkProvider {...pageProps}>
          <IntercomProvider>
            <Analytics debug={false}/>
            <Toaster />
            <GlobLayout>
              <Component {...pageProps} />
            </GlobLayout>
          </IntercomProvider>
        </ClerkProvider>
      </MyContext.Provider>
    </>
  )
}
