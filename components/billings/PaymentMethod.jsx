import React, { useContext, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { MyContext } from '@/pages/_app'
import ChangePaymentMethod from './ChangePayment'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuGroup,
  DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  // DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
  // TableFooter,
} from '@/components/ui/table'
import { Elements } from '@stripe/react-stripe-js'
import helpStripe from '@/stripe/helpers'
import { useToast } from '@/components/ui/use-toast'
import { useUser } from '@clerk/nextjs'
import { Button } from '../ui/button'

const PaymentMethod = () => {
  const { toast } = useToast()
  const { thisUser, stripePromise, getCurrentUser } = useContext(MyContext)
  const { user } = useUser()
  const [open, setOpen] = useState(false)
  // const [clientSecret, setClientSecret] = useState("");
  const [allPaymentMethods, setAllPaymentMethods] = useState([])

  const getAllcards = useCallback(async () => {
    const paymentMethods = await helpStripe.paymentMethods.list({
      customer: thisUser?.id
    })
    setAllPaymentMethods(paymentMethods?.data || [])
  }, [thisUser?.id])

  useEffect(() => {
    if (thisUser) {
      getAllcards()
    }
  }, [getAllcards, thisUser])

  const deletePayment = async pmid => {
    if (allPaymentMethods.length > 1) {
      await helpStripe.customers.update(thisUser?.id, {
        invoice_settings: {
          default_payment_method: allPaymentMethods[1]?.id // Remove the default payment method if needed
        }
      })
    }
    const removePayment = await helpStripe.paymentMethods.detach(pmid)
    toast({
      title: 'Payment Method Deleted.',
      description: 'Successfully deleted Payment Method'
    })
    await getCurrentUser(user?.id)
  }

  const makeDefault = async id => {
    await helpStripe.customers.update(thisUser?.id, {
      invoice_settings: {
        default_payment_method: id // Remove the default payment method if needed
      }
    })
    toast({
      title: 'Default Payment Updated.',
      description: 'Successfully updated default payment.'
    })
    await getCurrentUser(user?.id)
  }

  return (
    <div className='mt-5 lg:max-w-[936px] overflow-hidden mx-auto bg-white border rounded-[6px]'>
      {stripePromise &&
        <Elements stripe={stripePromise}>
          <ChangePaymentMethod open={open} setOpen={setOpen} />
        </Elements>
      }
      <div className=' p-5'>
        <h1 className='text-[20px] text-main font-semibold'>Payment Method</h1>
        <p className='text-[14px] mt-2 mb-5 text-main'>
          Your charges will be deducted from the default card shown below. This
          can be changed by adding a new card and making it the default using
          the menu on the right.
        </p>

        {allPaymentMethods?.length > 0 &&
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='text-[12px] text-start'>
                  Card Type
                </TableHead>
                <TableHead className='text-[12px]'>Default</TableHead>
                <TableHead className='text-[12px] '>Number (Last 4)</TableHead>
                <TableHead className='text-[12px] '>Exp. Date</TableHead>
                <TableHead className='text-[12px] '></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allPaymentMethods.map((item, ind) =>
                <TableRow key={ind}>
                  <TableCell className='text-[14px] capitalize'>
                    {item?.card?.brand}
                  </TableCell>
                  <TableCell className='text-[13px]'>
                    {item?.id ===
                      thisUser?.invoice_settings?.default_payment_method &&
                      <div className='w-[24px]'>
                        <Image
                          alt='confirmed'
                          width={300}
                          height={300}
                          src={'/tikv.svg'}
                          className='object-cover'
                        />
                      </div>
                    }
                  </TableCell>
                  <TableCell className='text-[14px]'>
                    {item?.card?.last4}
                  </TableCell>
                  <TableCell className='text-[14px]'>
                    {item?.card?.exp_month}/{item?.card?.exp_year}
                  </TableCell>
                  <TableCell className='text-right'>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className='px-2 py-1'>
                          <BsThreeDotsVertical className='w-5 h-5 cursor-pointer text-body' />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className='absolute min-w-[120px] -left-[10px]'>
                        {item?.id !==
                          thisUser?.invoice_settings
                            ?.default_payment_method &&
                            <DropdownMenuItem
                              onClick={() => makeDefault(item?.id)}>
                              Make Default
                            </DropdownMenuItem>
                        }
                        <DropdownMenuItem
                          onClick={() => deletePayment(item?.id)}>
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        }
      </div>
      <div className='bg-[#FAFAFA] flex-wrap gap-2 border-t flex items-center justify-between px-5 py-3'>
        <p className='text-[14px] text-body'>
          QuantVPS is not responsible for lost data due to unpaid services.
        </p>
        <Button
          onClick={() => setOpen(true)}
          className='border bg-main w-full lg:w-auto text-white text-[14px] px-[10px] py-[6px] rounded-[6px]'>
          {allPaymentMethods?.length > 0
            ? 'Change Payment Method'
            : 'Add Payment Method'}
        </Button>
      </div>
    </div>
  )
}

export default PaymentMethod
