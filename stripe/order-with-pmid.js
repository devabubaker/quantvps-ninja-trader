import helpStripe from './helpers'
const orderWithPmID = async (customerid, pmid, priceid, metadata) => {
  try {
    const subscription = await helpStripe.subscriptions.create({
      customer: customerid,
      items: [{ price: priceid }], // Replace with your actual price ID
      default_payment_method: pmid,
      collection_method: 'charge_automatically',
      metadata
    })
    if (subscription.status === 'active') {
      return {
        success: true,
        subscription
      }
    } else {
      return {
        success: false,
        subscription
      }
    }
  } catch (error) {
    return {
      success: false,
      error
    }
  }
}

export default orderWithPmID
