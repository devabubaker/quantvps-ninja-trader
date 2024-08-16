import React, { useContext, useState, useEffect } from 'react'
import { MyContext } from '@/pages/_app'
import { getpaymentHistory } from '@/lib/getPaymentHistory'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from '@/components/ui/table'
import moment from 'moment'
import Skeleton from '../global/Skeleton'
const PaymentHistory = () => {
  const { thisUser } = useContext(MyContext)
  const [allPaymentHistory, setAllPaymentHistory] = useState([])
  const [loading, setLoading] = useState(false)
  const getAllHistoryPayment = async id => {
    setLoading(true)
    const data = await getpaymentHistory(id)
    setLoading(false)
    setAllPaymentHistory([...data])
  }

  useEffect(() => {
    if (thisUser) {
      getAllHistoryPayment(thisUser?.id)
    }
  }, [thisUser])
  const returndate = timedate => {
    const timestamp = timedate * 1000

    // Create a moment object using the timestamp and format it as MM/DD/YYYY
    const formattedDate = moment(timestamp).format('MM/DD/YYYY')
    return formattedDate
  }
  return (
    <div className='mt-5 lg:max-w-[936px] overflow-hidden mx-auto bg-white border rounded-[6px]'>
      <div className=' p-5'>
        <h1 className='text-[20px] pb-5 text-main font-semibold'>
          Payment History
        </h1>
        {!loading ?
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='text-[12px]'>Item Name</TableHead>
                <TableHead className='text-[12px]'>Server</TableHead>
                <TableHead className='text-[12px]'>Billing Date</TableHead>
                <TableHead className='text-[12px]'>Price</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {allPaymentHistory.map((item, ind) =>
                <TableRow key={ind}>
                  <TableCell className='text-[13px]'>
                    {' '}
                    {item?.lines?.data?.[0]?.description}
                  </TableCell>
                  <TableCell className='text-[13px]'>
                    {' '}
                    {item?.lines?.data?.[0]?.metadata?.domain}
                  </TableCell>
                  <TableCell className='text-[13px]'>
                    {' '}
                    {returndate(item?.created)}
                  </TableCell>
                  <TableCell className='text-[13px]'>
                    {' '}
                    ${item?.amount_paid / 100}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          :
          <div className='w-full'>
            <Skeleton className={'w-full h-[36px] '} />
            <Skeleton className={'w-full h-[36px] mt-1'} />
            <Skeleton className={'w-full h-[36px] mt-1'} />
          </div>
        }
      </div>
    </div>
  )
}

export default PaymentHistory
