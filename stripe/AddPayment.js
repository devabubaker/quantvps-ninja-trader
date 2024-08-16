import helpStripe from './helpers'
const addPayment = async (customerid, paymentid) => {
  // Attach the card to the customer
  const attachedPaymentMethod = await helpStripe.paymentMethods.attach(
    paymentid,
    { customer: customerid }
  )

  await helpStripe.customers.update(customerid, {
    invoice_settings: {
      default_payment_method: paymentid
    }
  })
  return attachedPaymentMethod
}

export default addPayment
