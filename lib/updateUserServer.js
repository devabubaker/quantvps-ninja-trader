'use server'
import helpStripe from '@/stripe/helpers'

export const updateUserServer = async (orderId, property, value) => {
  const subscription = await helpStripe.subscriptions.update(orderId, {
    metadata: {
      [property]: value
    }
  })

  // Return a message or updated users if needed
  return {
    success: true
  }
}
