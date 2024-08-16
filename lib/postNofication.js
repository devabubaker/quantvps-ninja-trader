import helpStripe from '../stripe/helpers'
export const postNotificaiton = async (text, userId) => {
  try {
    const today = new Date()
    // Get the components of the date
    const month = String(today.getMonth() + 1).padStart(2, '0') // Months are 0-indexed
    const date = String(today.getDate()).padStart(2, '0')
    const year = today.getFullYear()

    // Get the components of the time
    const hours = String(today.getHours()).padStart(2, '0')
    const minutes = String(today.getMinutes()).padStart(2, '0')
    const date_result = `${month}/${date}/${year} ${hours}:${minutes}`

    let notification = {
      log_text: `${date_result} ${text}`,
      userid: userId
    }

    const thisCustomer = await helpStripe.customers.retrieve(userId)

    const customer = await helpStripe.customers.update(userId, {
      metadata: {
        unread_log: thisCustomer?.metadata?.unread_log
          ? 1 + parent(thisCustomer?.metadata?.unread_log)
          : 1
      }
    })
    return { success: true, result }
  } catch (error) {
    // If there's an error, send the client an error response
    console.error(error)
    return { success: false, error }
  }
}
