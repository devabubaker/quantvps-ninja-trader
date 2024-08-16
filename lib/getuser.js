import moment from 'moment'
import helpStripe from '@/stripe/helpers'

const returndate = timedate => {
  const timestamp = timedate * 1000
  // Create a moment object using the timestamp and format it as MM/DD/YYYY
  const formattedDate = moment(timestamp).format('MM/DD/YYYY')
  return formattedDate
}

export async function fetchUser(userId, email) {
  // get stripe customers
  const customers = await helpStripe.customers.search({
    query: `metadata['userId']:'${userId}' OR email~'${email}'`
  })
  let data = customers.data
  if (data.length > 0) {
    const subscriptions = await helpStripe.subscriptions.search({
      query: `metadata['customer']:'${data[0].id}' AND status:'active'`
    })
    if (subscriptions?.data?.length > 0) {
      let customServers = []
      subscriptions.data.forEach(item => {
        let customServer = item.metadata
        customServer.status = item.status
        customServer.price = item.plan.amount / 100
        customServer.next_due = returndate(item.current_period_end)
        customServer.orderid = Number(item.metadata.orderid)
        customServer.sub_id = item?.id
        customServers = [...customServers, customServer]
      })
      data[0].servers = [...customServers]
    } else {
      data[0].servers = []
    }
    return data
  }
}
