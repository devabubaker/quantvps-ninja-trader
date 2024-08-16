import helpStripe from '../stripe/helpers'
export const readNotification = async userId => {
  'use server'
  try {
    const customer = await helpStripe.customers.update(userId, {
      metadata: {
        unread_log: 0
      }
    })
    return { success: true, data }
  } catch (error) {
    // If there's an error, send the client an error response
    console.error(error)
    return { success: false, error }
  }
}
