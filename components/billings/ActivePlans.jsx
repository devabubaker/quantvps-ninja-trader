import Link from 'next/link'
import React, { useContext, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { MyContext } from '../../pages/_app'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from '@/components/ui/table'
import helpStripe from '../../stripe/helpers'
import moment from 'moment'
import Skeleton from '../global/Skeleton'
import { Button } from '../ui/button'
const ActivePlans = () => {
  const [loading, setLoading] = useState(true)
  const [activeServers, setActiveServers] = useState([])
  const { allMySevers, thisUser } = useContext(MyContext)
  const [total, setTotal] = useState(0)
  const [closeItem, setCloseItem] = useState(null)
  const returndate = timedate => {
    const timestamp = timedate * 1000
    // Create a moment object using the timestamp and format it as MM/DD/YYYY
    const formattedDate = moment(timestamp).format('MM/DD/YYYY')
    return formattedDate
  }
  const findClosestDate = useCallback(
    async dates => {
      if (thisUser?.id) {
        const upcomingInvoice = await helpStripe.invoices.retrieveUpcoming({
          customer: thisUser.id
        })
        setLoading(false)
        // console.log("upcoming", upcomingInvoice?.total);
        setCloseItem(upcomingInvoice)
      }
    },
    [thisUser?.id]
  )

  useEffect(() => {
    if (allMySevers?.length > 0) {
      let filterItems = allMySevers?.filter(
        item => item?.ourServer?.status === 'active'
      )
      filterItems?.forEach(item => {
        setTotal(total + parseInt(item?.ourServer?.price))
      })
      setActiveServers([...filterItems])
      findClosestDate(filterItems)
    } else {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allMySevers, findClosestDate])
  const scrollDown = () => {
    window.scrollTo(0, 2000)
  }
  return (
    <div className='mt-5 lg:max-w-[936px] overflow-hidden mx-auto bg-white border rounded-[6px]'>
      <>
        {!loading ?
          <>
            {allMySevers?.length > 0 ?
              <div className=' p-5'>
                <h1 className='text-[20px] text-main font-semibold'>
                  Active Plans
                </h1>

                {closeItem?.total && <p className='text-[14px] mt-2 text-main'>
                  The next payment of{' '}
                  <span className='font-semibold'>
                    ${closeItem?.total / 100}
                  </span>{' '}
                  will be charged to your card on{' '}
                  <span className='font-semibold'>
                    {returndate(closeItem?.next_payment_attempt)}
                  </span>
                </p>}
                <div className='h-[13px] bg-[#EAEAEA] w-full mt-5'></div>
                <div className='my-5 flex items-center justify-end'>
                  <Link href={'/dashboard'}>
                    <button className='border rounded-[6px] px-[15px] py-[8px] text-[14px] text-main'>
                      View Active Servers
                    </button>
                  </Link>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='text-[12px]'>Item</TableHead>
                      <TableHead className='text-[12px]'>
                        {' '}
                        Next Due Date
                      </TableHead>
                      <TableHead className='text-[12px] text-end'>
                        Amount
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeServers.map((item, ind) =>
                      <TableRow key={ind}>
                        <TableCell className='flex flex-wrap items-center gap-1 text-main text-[13px]'>
                          {item?.ourServer?.plan_type} - Server #
                          {item?.custom_id}
                          {item.dataWagan.status === 'Active' ?
                            <Link
                              href={`/dashboard/control-panel?server=${item?.dataWagan?.id}`}>
                              <span className='text-[#0070F3]'>Manage</span>
                            </Link>
                            :
                            <span className='text-red-600'>
                              {item.dataWagan.status}
                            </span>
                          }
                        </TableCell>
                        <TableCell className='text-[13px]'>
                          {item?.ourServer?.next_due}
                        </TableCell>
                        <TableCell className='text-[13px] text-end'>
                          {' '}
                          ${item?.ourServer?.price}
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell>Total Active Services</TableCell>
                      <TableCell></TableCell>
                      <TableCell className='text-right'>${total}</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>

                {/* <div className='mt-5 border cursor-pointer rounded-[6px] p-5'>
                    <h1 className='text-[20px] text-main font-semibold'>History</h1>
                    <p className='mt-4 text-[#52525A] text-[14px]'>You can refer to all your past payments below.</p>
                </div> */}
              </div>
              :
              <div className='h-[200px] w-full text-[16px] text-main font-medium flex items-center justify-center'>
                You don&apos;t have any active plans.
              </div>
            }
          </>
          :
          <>
            <Skeleton className={'w-full h-[324px]'} />
          </>
        }
        <div className='bg-[#FAFAFA] flex-col lg:flex-row w-full gap-3 border-t flex items-center justify-between px-5 py-3'>
          <div className='flex items-center gap-2'>
            <button
              onClick={scrollDown}
              className='border bg-white text-main text-[14px] px-[10px] py-[6px] rounded-[6px]'>
              View Payments
            </button>
            <p className='text-body  block lg:hidden text-[14px]'>
              Custom needs?
            </p>
          </div>
          <div className='lg:flex items-center w-full lg:w-auto gap-3'>
            <p className='text-body hidden lg:block text-[14px]'>
              Custom needs?
            </p>
            <Link href={'/dashboard/support'}>
              <Button className='border w-full lg:w-auto bg-main text-white text-[14px] px-[10px] py-[6px] rounded-[6px]'>
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </>
    </div>
  )
}

export default ActivePlans
