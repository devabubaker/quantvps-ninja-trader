import helpStripe from './helpers'
export default async function createStripeUser(email, name) {
  const customer = await helpStripe.customers.create({
    email: email,
    name: name
  })

  return { customer: customer.id }
}
