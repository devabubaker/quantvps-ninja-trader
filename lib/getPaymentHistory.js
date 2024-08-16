import helpStripe from '../stripe/helpers'

export async function getpaymentHistory(userid) {
  const invoices = await helpStripe.invoices.search({
    query: `customer:\'${userid}\'`
  })
  console.log('invoices', invoices)
  return invoices.data
}
