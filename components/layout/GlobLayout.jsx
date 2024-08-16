import React, { useState, useEffect, useContext } from 'react'
import Header from './Header'
import Tabs from '../global/Tabs'
import Footer from './Footer'
import { useUser } from '@clerk/nextjs'
import { MyContext } from '@/pages/_app'
import GlobPaymentAlert from './GlobPaymentAlert'
import { useRouter } from 'next/router'
import Skeleton from '../global/Skeleton'

const GlobLayout = ({ children }) => {
  const { user, isLoaded, isSignedIn } = useUser()
  const {
    getCurrentUser,
    globLoading,
    thisUser,
    openPaymentAdd,
    setOpenPaymentAdd
  } = useContext(MyContext)
  useEffect(() => {
    if (isLoaded && isSignedIn && thisUser === null && user) {
      const { emailAddresses, id: userId } = user
      getCurrentUser(userId, emailAddresses[0].emailAddress)
    }
  }, [getCurrentUser, isLoaded, isSignedIn, thisUser, user])

  const router = useRouter()
  const { pathname } = router
  const isDashboard = pathname.indexOf('/dashboard') > -1

  useEffect(() => {
    if (thisUser && router.pathname !== '/dashboard/billing') {
      if (!thisUser?.invoice_settings?.default_payment_method) {
        setOpenPaymentAdd(true)
      }
    }
  }, [router, setOpenPaymentAdd, thisUser])

  return (
    <>
      {isLoaded ?
        <>
          {isSignedIn && isDashboard ?
            <>
              <div className=' min-h-screen w-full relative'>
                <Header />
                <Tabs />
                <GlobPaymentAlert
                  open={openPaymentAdd}
                  setOpen={setOpenPaymentAdd}
                />
                {children}
                <Footer />
              </div>
            </>
            :
            <>{children}</>
          }
        </>
        :
        <Skeleton className={' h-screen min-h-screen w-full'} />
      }
    </>
  )
}

export default GlobLayout
