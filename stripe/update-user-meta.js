import helpStripe from './helpers'

export default async function updateUserMeta(customerId, newMetadata) {
  try {
    const updatedCustomer = await helpStripe.customers.update(customerId, {
      metadata: newMetadata
      // Other parameters you want to update can be included here as well
    })
    return { customer: updatedCustomer }
  } catch (error) {
    return { error: { message: error.message } }
  }
}
