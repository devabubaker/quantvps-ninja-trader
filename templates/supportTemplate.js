export function paymentDeniedContactSupport(
  amountDue,
  currency,
  cardType,
  transactionNumber,
  serverName,
  startDate,
  endDate
) {
  // Date formatting function
  const formatDate = date => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    return date.toLocaleDateString('en-US', options)
  }

  // Construct email body
  const emailBody = `
        Dear User,
        
        Your payment method has been declined. Payment has not been processed for ${serverName} (${formatDate(startDate)} - ${formatDate(endDate)}). Make a payment by ${formatDate(startDate)} to avoid losing service.
        ------------------------------------------------------
        Amount Due: ${amountDue.toFixed(2)} ${currency}
        Pay Method: Credit Card - (${cardType})
        Transaction #: ${transactionNumber}
        Status: Declined
        
        You may review your invoice history at any time by logging in to your client area.
        Note: This email will serve as an official receipt for this payment.
        
        Thank You,
        QuantVPS
    `

  return emailBody
}
