async function query(scope, method, ...args) {
  return (
    await fetch('/api/stripe', {
      method: 'POST',
      body: JSON.stringify({ scope, method, args }),
      headers: { 'Content-type': 'application/json' }
    })
  ).json()
}

const methodsBindMap = {
  customers: ['search', 'update', 'retrieve', 'create'],
  subscriptions: ['search', 'update', 'create', 'retrieve'],
  invoices: ['retrieveUpcoming', 'search'],
  paymentMethods: ['list', 'detach', 'attach'],
  prices: ['create', 'search'],
  coupons: ['retrieve'],
  promotionCodes: ['list']
}

const helpStripe = Object.fromEntries(
  Object.entries(methodsBindMap).map(([scope, methods]) => [
    scope,
    Object.fromEntries(
      methods.map(method => [method, query.bind(null, scope, method)])
    )
  ])
)

export default helpStripe
