import React, { useCallback, useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import PlanSummary from '@/components/controlpanel/PlanSummary'
import ServerCredentials from '@/components/controlpanel/ServerCredentials'
import RebootSystem from '@/components/controlpanel/RebootSystem'
import Reinstall from '@/components/controlpanel/Reinstall'
import Backups from '@/components/controlpanel/Backups'
import BillingInformation from '@/components/controlpanel/BillingInformation'
import ModalReboot from '@/components/controlpanel/ModalReboot'
import { getProductsData } from '@/datawagon'
import { MyContext } from '../_app'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'

const ControlPanel = () => {
  const router = useRouter()
  const { server } = router.query
  const queryServerId = Number(server)
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const [product, setProduct] = useState(null)
  const { allMySevers, currentServer, globLoading, setCurrentServer } =
    useContext(MyContext)
  const [showTost, setShowTost] = useState(0)

  useEffect(() => {
    if (allMySevers.length > 0 && (queryServerId || currentServer)) {
      const srv = queryServerId
        ? allMySevers.find(v => v.dataWagan.id === queryServerId)
        : currentServer
      setCurrentServer(srv ? srv : allMySevers[0])
    }
  }, [allMySevers, currentServer, queryServerId, setCurrentServer])

  const getProductData = useCallback(
    async id => {
      const productData = await getProductsData(id)
      if (productData?.vps?.data?.status === 'stopped') {
        setRloading(true)
      } else {
        setRloading(false)
      }
      setProduct(productData)
      if (productData?.vps?.data?.status === 'stopped') {
        if (showTost === 0) {
          toast({
            variant: 'destructive',
            duration: 3000,
            title: 'Server is rebuilding.',
            description: 'Control panel is currently unavailable.'
          })
        }
        setShowTost(1)
      } else {
        setShowTost(0)
      }
    },
    [showTost, toast]
  )

  useEffect(() => {
    if (currentServer && !globLoading) {
      getProductData(currentServer?.dataWagan?.id)
    }
  }, [currentServer, getProductData, globLoading])

  const [rloading, setRloading] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Head>
        <title>ControlPanel QuantVPS</title>
      </Head>
      <ModalReboot
        setLoading={setLoading}
        loading={loading}
        open={open}
        setOpen={setOpen}
      />
      <>
        <div className='lg:max-w-[1248px] py-[40px] mx-auto px-4'>
          <h1 className='text-main font-semibold text-[32px]'>
            Server Control Panel
          </h1>
          <div className='text-[14px] flex items-center gap-1 text-[#666666]'>
            Full overview of your server.{' '}
            <Link className='text-[#0068D6] flex items-center ' href={'/'}>
              Learn more{' '}
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
          <div className='max-w-[803px] px-3 lg:p-0 mx-auto'>
            <div className='flex items-center justify-center w-full mb-5'>
              <div className='w-[60px]'>
                <Image
                  alt='filter'
                  width={300}
                  height={300}
                  src={'/filter.png'}
                  className='object-cover'
                />
              </div>
            </div>

            <PlanSummary product={product} />
            <ServerCredentials product={product} />
            <RebootSystem
              setOpen={setOpen}
              product={product}
              rloading={rloading}
              loading={loading}
              setRloading={setRloading}
            />
            <Reinstall
              getProductData={getProductData}
              product={product}
              rloading={rloading}
              setRloading={setRloading}
            />
            <Backups
              product={product}
              rloading={rloading}
              setRloading={setRloading}
            />

            <BillingInformation />

            <div className='py-[13px] mt-[26px] bg-white border rounded-[8px] flex items-center justify-between border-t px-[24px]'>
              <div className='text-[14px] flex items-center gap-1 text-[#666666]'>
                Need help?
              </div>
              <Link href={'/dashboard/support'}>
                <Button variant='outline'>Support</Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default ControlPanel
