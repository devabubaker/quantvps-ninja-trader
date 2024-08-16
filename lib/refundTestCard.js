import Stripe from 'stripe'

export const refundTestCard = async (cardNumber, expMonth, expYear, cvc) => {
  'use server'
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2020-08-27'
    })
    // Create a PaymentIntent with the provided card details
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100, // Amount in cents
      currency: 'usd',
      payment_method_data: {
        type: 'card',
        card: {
          number: cardNumber,
          exp_month: expMonth,
          exp_year: expYear,
          cvc: cvc
        }
      },
      confirm: true
    })

    if (paymentIntent) {
      console.log('paymentIntent', paymentIntent)
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2020-08-27'
      })

      // Refund the payment
      const refund = await stripe.refunds.create({
        payment_intent: paymentIntent.id
      })
      console.log('refund', refund)
      return { success: true }
    } else {
      return { success: false, paymentIntent }
    }
  } catch (error) {
    // If there's an error, send the client an error response
    console.error(error)
    return { success: false, error }
  }
}
