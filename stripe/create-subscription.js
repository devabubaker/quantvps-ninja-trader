import helpStripe from './helpers'
export default async function createSubscriptionForUser(
  priceId,
  customerId,
  promoId
) {
  try {
    if (promoId) {
      const subscription = await helpStripe.subscriptions.create({
        customer: customerId,
        items: [
          {
            price: priceId,
            discounts: [{ coupon: promoId }]
          }
        ],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent']
      })
      return {
        subscriptionId: subscription.id,
        clientSecret: subscription.latest_invoice.payment_intent.client_secret
      }
    } else {
      const subscription = await helpStripe.subscriptions.create({
        customer: customerId,
        items: [
          {
            price: priceId
          }
        ],

        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent']
      })
      return {
        subscriptionId: subscription.id,
        clientSecret: subscription.latest_invoice.payment_intent.client_secret
      }
    }
  } catch (error) {
    return { error: { message: error.message } }
  }
}
