import moment from 'moment'

export function paymentTemplate(
  amount,
  cardType,
  transactionNumber,
  serverName
) {
  // Date formatting function
  const today = moment()
  const startDate = today.toDate()
  const endDate = today.add(1, 'months').toDate()

  const formatDate = date => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    return date.toLocaleDateString('en-US', options)
  }

  // Construct email body
  const emailBody = `
        Hello,
        
        This is a payment receipt for ${serverName} (${formatDate(startDate)} - ${formatDate(endDate)})
        
        ------------------------------------------------------
        Amount: ${amount} USD
        Pay Method:  Credit Card (${cardType})
        Transaction id: ${transactionNumber}
        Status: Paid
        
        You may review your invoice history at any time by logging in to your client area.

        Note: This email will serve as an official receipt for this payment.
        
        Thank You,
        QuantVPS
    `

  return emailBody
}
