import React, { useState, useEffect, useContext, useCallback } from 'react'
// import GlobLayout from "../components/layout/GlobLayout";
import Image from 'next/image'
import ChartMonitor from '../../components/monitoring/ChartMonitor'
import { getstats, getProductsData } from '@/datawagon' //"../lib/getStats";
import ChartNetwork from '../../components/monitoring/ChartNetwork'
import ChartRam from '../../components/monitoring/ChartRam'
import ChartStorage from '../../components/monitoring/ChartStorage'
import moment from 'moment'
import Link from 'next/link'
import { MyContext } from '../_app'
import Skeleton from '../../components/global/Skeleton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import Head from 'next/head'
const Monitoring = () => {
  const [active, setActive] = useState(1)
  const [statsData, setStatsData] = useState([])
  const [query, setQuery] = useState('hour')
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(true)
  const { currentServer } = useContext(MyContext)

  const getUpdatedStats = useCallback(async () => {
    setLoading(true)
    const stats = await getstats(currentServer.dataWagan.id, query)
    setStatsData([...stats])
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  useEffect(() => {
    if (currentServer?.dataWagan?.id) {
      getUpdatedStats()
    }
    const intervalId = setInterval(getUpdatedStats, 2 * 60 * 1000)
    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [currentServer, getUpdatedStats])

  const [product, setProduct] = useState(null)
  //   get  product
  const getProductData = useCallback(async () => {
    setLoading2(true)
    const productData = await getProductsData(currentServer?.dataWagan?.id)
    setProduct(productData?.vps?.data)
    setLoading2(false)
  }, [currentServer?.dataWagan?.id])

  useEffect(() => {
    if (currentServer?.dataWagan) {
      getProductData()
    }
  }, [currentServer?.dataWagan, getProductData])

  const uptime = time => {
    const uptimeDuration = moment.duration(time, 'seconds')

    // Calculate the start time of the uptime
    const currentTime = moment()

    // Calculate days and hours
    const days = uptimeDuration.days()
    const hours = uptimeDuration.hours()

    // Format the result
    const result = `${days} days, ${hours} hours`
    return result
  }

  return (
    <>
      <Head>
        <title>Monitoring QuantVPS</title>
      </Head>
      <div className='lg:max-w-[1200px] flex items-start gap-2 justify-between flex-wrap py-[40px] mx-auto px-4'>
        <div>
          <h1 className='text-main font-semibold text-[32px]'>Monitoring</h1>
          <div className='text-[14px] mt-2 flex flex-wrap gap-2 items-center lg:gap-1 text-[#666666]'>
            Advanced server monitoring from anywhere in the world
            <Link className='text-[#0068D6] flex items-center ' href={'/'}>
              Learn more
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
        <div className='flex items-center gap-4'>
          {/* <p className="text-body text-[14px]">21 days left in cycle</p> */}
          <Link href='/dashboard/billing'>
            <Button variant='outline'>View Billing</Button>
          </Link>
        </div>
      </div>
      <div className='bg-[#FAFAFA] min-h-screen py-[40px]'>
        <div className='max-w-[922px] px-3 lg:p-0 mx-auto'>
          <div className='flex items-center justify-center w-full mb-5'>
            <div className='w-[60px]'>
              <Image
                alt='oscilogramm'
                width={300}
                height={300}
                src={'/monitor.png'}
                className='object-cover'
              />
            </div>
          </div>
          <div className='mt-5 shadow-sm bg-white border rounded-[6px]'>
            <div className='flex items-center px-5 py-5 border-b w-full justify-between'>
              <div className='flex items-center flex-wrap gap-2'>
                <p className='text-[14px] text-body'>
                  Usage in the current billing cycle is within the resources
                  included in the
                </p>
                <div className='text-[11px] bg-[#EBF5FF] px-3 py-1 rounded-[31px] text-[#0068D6]'>
                  {currentServer?.ourServer?.plan_type}
                </div>
                <p className='text-[14px] text-body'>plan.</p>
              </div>
            </div>
            {!loading2 ?
              <>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                  <div className='border-r p-5'>
                    <div className='text-main flex items-center gap-2 font-semibold'>
                      CPU{' '}
                      <div className='w-[16px] -mt-[2px]'>
                        <Image
                          alt='small right arrow'
                          width={300}
                          height={300}
                          src={'/sar.svg'}
                          className='object-cover'
                        />
                      </div>
                    </div>
                    <p className='text-[14px] text-body pt-2'>
                      {product?.virtualizor_stats?.used_cpu} / {product?.cpus}{' '}
                      {`(${(
                        parseFloat(product?.virtualizor_stats?.used_cpu) /
                          product?.cpus *
                        100
                      ).toFixed(2)}%)`}
                    </p>
                  </div>
                  <div className='border-r p-5'>
                    <div className='text-main flex items-center gap-2 font-semibold'>
                      Bandwidth
                      <div className='w-[16px] -mt-[2px]'>
                        <Image
                          alt='small right arrow'
                          width={300}
                          height={300}
                          src={'/sar.svg'}
                          className='object-cover'
                        />
                      </div>
                    </div>
                    <p className='text-[14px] text-body pt-2'>
                      {product?.virtualizor_stats?.used_bandwidth} GB /{' '}
                      {product?.virtualizor_stats?.bandwidth} GB{' '}
                      {`(${(
                        parseFloat(
                          product?.virtualizor_stats?.used_bandwidth
                        ) /
                          parseInt(product?.virtualizor_stats?.bandwidth) *
                        100
                      ).toFixed(2)}%)`}
                    </p>
                  </div>
                  <div className=' p-5'>
                    <div className='text-main flex items-center gap-2 font-semibold'>
                      RAM
                      <div className='w-[16px] -mt-[2px]'>
                        <Image
                          alt='small right arrow'
                          width={300}
                          height={300}
                          src={'/sar.svg'}
                          className='object-cover'
                        />
                      </div>
                    </div>
                    <p className='text-[14px] text-body pt-2'>
                      {(
                        parseInt(product?.virtualizor_stats?.used_ram) / 1000
                      ).toFixed(2)}{' '}
                      GB /{' '}
                      {(
                        parseInt(product?.virtualizor_stats?.ram) / 1000
                      ).toFixed(2)}{' '}
                      GB{' '}
                      {`(${(
                        parseInt(product?.virtualizor_stats?.used_ram) /
                          parseInt(product?.virtualizor_stats?.ram) *
                        100
                      ).toFixed(2)}%)`}
                    </p>
                  </div>
                </div>
                <div className='grid grid-cols-1 border-t lg:grid-cols-3'>
                  <div className='border-r p-5'>
                    <div className='text-main flex items-center gap-2 font-semibold'>
                      Storage
                      <div className='w-[16px] -mt-[2px]'>
                        <Image
                          alt='small right arrow'
                          width={300}
                          height={300}
                          src={'/sar.svg'}
                          className='object-cover'
                        />
                      </div>
                    </div>
                    <p className='text-[14px] text-body pt-2'>
                      {parseFloat(
                        product?.virtualizor_stats?.used_disk
                      ).toFixed(2)}{' '}
                      GB / {product?.virtualizor_stats?.disk} GB{' '}
                      {`(${(
                        parseInt(product?.virtualizor_stats?.used_disk) /
                          parseInt(product?.virtualizor_stats?.disk) *
                        100
                      ).toFixed(2)}%)`}
                    </p>
                  </div>
                  <div className='border-r p-5'>
                    <div className='text-main flex items-center gap-2 font-semibold'>
                      Uptime
                      <div className='w-[16px] -mt-[2px]'>
                        <Image
                          alt='small right arrow'
                          width={300}
                          height={300}
                          src={'/sar.svg'}
                          className='object-cover'
                        />
                      </div>
                    </div>
                    <p className='text-[14px] text-body pt-2'>
                      {uptime(product?.uptime)}
                    </p>
                  </div>
                  <div className=' p-5'>
                    <div className='text-main flex items-center gap-2 font-semibold'>
                      Operating System
                      <div className='w-[16px] -mt-[2px]'>
                        <Image
                          alt='small right arrow'
                          width={300}
                          height={300}
                          src={'/sar.svg'}
                          className='object-cover'
                        />
                      </div>
                    </div>
                    <p className='text-[14px] text-body pt-2'>
                      {product?.os_name}
                    </p>
                  </div>
                </div>
              </>
              :
              <Skeleton className={'w-full h-[196px] rounded-[0px]'} />
            }
          </div>
          <Tabs
            defaultValue='cpu'
            className='mt-20 w-full  shadow-sm bg-white border rounded-[6px]'>
            <div className='p-5'>
              <div className='px-5 border-b pt-5 pb-3 flex items-center justify-between'>
                <h6 className='text-main font-semibold text-[16px]'>
                  Usage Stats
                </h6>
                <Select value={query} onValueChange={e => setQuery(e)}>
                  <SelectTrigger className='w-[120px]'>
                    <SelectValue placeholder='Filter' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='hour'>1 Hour</SelectItem>
                    <SelectItem value='day'>24 hours</SelectItem>
                    <SelectItem value='week'>7 days</SelectItem>
                    <SelectItem value='month'>1 month</SelectItem>
                  </SelectContent>
                </Select>
                {/* <div className="border rounded-[6px] px-[15px] py-[8px] text-main">
                  <select
                    onChange={(e) => setQuery(e.target.value)}
                    name=""
                    id=""
                  >
                    <option value="hour">1 Hour</option>
                    <option value="day">24 hours</option>
                    <option value="week">7 days</option>
                    <option value="month">1 month</option>
                  </select>
                </div> */}
              </div>

              <div className='py-5 flex items-center flex-wrap gap-2 justify-between'>
                <TabsList className='grid grid-cols-4'>
                  <TabsTrigger value='cpu'>CPU</TabsTrigger>
                  <TabsTrigger value='network'>Network</TabsTrigger>
                  <TabsTrigger value='ram'>RAM</TabsTrigger>
                  <TabsTrigger value='storage'>Storage</TabsTrigger>
                </TabsList>

                <p className='text-body text-[14px]'>Updated just now</p>
              </div>
            </div>
            {!loading &&
              <div className='w-full h-full'>
                <TabsContent value='cpu'>
                  <ChartMonitor statsData={statsData} />
                </TabsContent>
                <TabsContent value='network'>
                  <ChartNetwork statsData={statsData} />
                </TabsContent>
                <TabsContent value='ram'>
                  <ChartRam statsData={statsData} />
                </TabsContent>
                <TabsContent value='storage'>
                  <ChartStorage statsData={statsData} />
                </TabsContent>
              </div>
            }

            {loading &&
              <Skeleton className={'w-full h-[400px] rounded-[0px]'} />
            }
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default Monitoring
