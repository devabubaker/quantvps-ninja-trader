// import { makePayment } from "../lib/makePayment";
import { updateUserServer } from '../lib/updateUserServer'
import { requestEmail } from '../resend/sendEmail'
import { generatePaymentDeclinedEmail } from '../templates/deniedTemplate'
import { paymentDeniedContactSupport } from '../templates/supportTemplate'
import { paymentTemplate } from '../templates/paymentTemplate'
import moment from 'moment'
import { detectCardType } from './tests'

const callPayment = async (filteredServer, item) => {
  'use server'
  const data =
    true ||
    await makePayment(
      parseInt(filteredServer?.[0]?.price) * 100,
      item?.card_info?.card_number,
      item?.card_info?.expirationDate,
      item?.card_info?.expirationYear,
      item?.card_info?.cvc,
      item?.card_info?.zip,
      item?.card_info?.address,
      filteredServer?.[0]?.plan_type,
      item?.userId,
      filteredServer?.[0]?.domain
    )
  return !data
}
const nextDateFunc = nextd => {
  const today = moment(nextd)
  const nextDate = today.add(1, 'months').format('YYYY-MM-DD')
  return nextDate
}
export const sheduleTaskEveryDay = async () => {
  const query = '*[_type == "server_schedule"]'
  let serverSchdeule = await client.fetch(query)
  if (serverSchdeule?.length > 0) {
    const isTodayFunc = haveDate => {
      const givenDate = new Date(haveDate)

      const today = new Date()
      const isToday = givenDate.toDateString() === today.toDateString()
      return isToday
    }
    const isYesterdayFunc = haveDate => {
      const yester = moment(haveDate)
      const yesterday = yester.subtract(1, 'days')
      const givenDate = new Date(yesterday)

      const today = new Date()
      const isToday = givenDate.toDateString() === today.toDateString()
      return isToday
    }
    const isTodayGFunc = haveDate => {
      const givenDate = new Date(haveDate)

      const today = new Date()
      return (
        givenDate < today && givenDate.toDateString() !== today.toDateString()
      )
    }
    if (isTodayGFunc(serverSchdeule[0].date)) {
      // serverSchdeule
      const today = moment(serverSchdeule[0].date)
      const nextDate = today.add(1, 'days').format('YYYY-MM-DD')

      // Patch the updated date for the server_schedule document
      let data = await client
        .patch(serverSchdeule[0]._id)
        .set({ date: nextDate })
        .commit()

      const userQuery = '*[_type == "user"]'
      let allUsers = await client.fetch(userQuery)
      if (allUsers?.length > 0) {
        allUsers?.forEach((item, ind) => {
          const filteredServer = item?.servers?.filter(
            item =>
              isTodayFunc(item?.next_due) === true && item?.status === 'active'
          )

          if (filteredServer?.length > 0) {
            callPayment(filteredServer, item).then(response => {
              if (response.success) {
                requestEmail(
                  item?.email,
                  'Payment Confirmation',
                  paymentTemplate(
                    filteredServer?.[0]?.price,
                    detectCardType(item?.card_info?.card_number),
                    response.paymentIntent.id,
                    filteredServer?.[0]?.domain
                  )
                )
                return updateUserServer(
                  filteredServer?.orderid,
                  'next_due',
                  nextDateFunc(filteredServer?.next_due)
                )
              } else {
                requestEmail(
                  item?.email,
                  'Payment method has been declined',
                  generatePaymentDeclinedEmail(
                    filteredServer?.[0]?.price,
                    detectCardType(item?.card_info?.card_number),
                    response.paymentIntent.id,
                    filteredServer?.[0]?.domain,
                    filteredServer?.next_due,
                    nextDateFunc(filteredServer?.next_due)
                  )
                )
                return updateUserServer(
                  filteredServer?.orderid,
                  'status',
                  'canceled'
                )
              }
            })
          }
          const filteredServer2 = item?.servers?.filter(
            item =>
              isYesterdayFunc(item?.next_due) === true &&
              item?.status === 'active'
          )
          if (filteredServer2?.length > 0) {
            callPayment(filteredServer2, item).then(response => {
              if (response.success) {
                // requestEmail(
                //   item?.email,
                //   `Payment method has been declined`,
                //   deployTemplate(filteredServer?.[0]?.price, detectCardType(item?.card_info?.card_number), response.paymentIntent.id, filteredServer?.[0]?.domain)
                // );
                return updateUserServer(
                  filteredServer2?.orderid,
                  'next_due',
                  nextDateFunc(filteredServer2?.next_due)
                )
              } else {
                requestEmail(
                  item?.email,
                  'Payment method has been declined',
                  paymentDeniedContactSupport(
                    filteredServer2?.[0]?.price,
                    detectCardType(item?.card_info?.card_number),
                    response.paymentIntent.id,
                    filteredServer2?.[0]?.domain,
                    filteredServer2?.next_due,
                    nextDateFunc(filteredServer2?.next_due)
                  )
                )
                return updateUserServer(
                  filteredServer?.orderid,
                  'status',
                  'canceled'
                )
              }
            })
          }
        })
      }
    }
  }
}
