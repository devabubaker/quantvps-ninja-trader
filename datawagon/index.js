import helpStripe from '@/stripe/helpers'

const query = async params => {
  return await fetch('/api/manage', {
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-type': 'application/json' }
  }).then(v => v.json())
}

export const getActiveServers = args =>
  query.bind(null, { method: 'services', args, handle: 1 })()
export const backupMade = id =>
  query.bind(null, { method: `services/vps/v2/${id}/backup/toggle` })()
export const backupShedule = id =>
  query.bind(null, { method: `services/vps/v2/${id}/backup/schedule` })()
//TODO isn't tested yet:
export const backupToggle = id =>
  query.bind(null, {
    method: `services/vps/v2/${id}/backup/trigger`,
    http: 'POST'
  })()
//TODO isn't tested yet:
export const request_cancel = (id, type, reason) =>
  query.bind(null, {
    method: `services/${id}/cancel`,
    http: 'POST',
    args: { reason, type }
  })()
export const checkbackup = id =>
  query.bind(null, { method: `services/vps/v2/${id}/backup/check` })()
//TODO isn't tested yet:
export const deleteBackup = (id, volid) =>
  query.bind(null, {
    method: `services/vps/v2/${id}/backup/delete`,
    http: 'POST',
    args: { volid }
  })()
export const deployCustomServer = (
  productID,
  clerkID,
  domain,
  rootPass,
  configOption,
  packageType,
  pricing,
  amount,
  location,
  email,
  subscriptionId,
  annualType,
  customerid
) =>
  query.bind(null, {
    method: 'billing/order',
    http: 'POST',
    args: {
      paymentmethod: 'stripe',
      pid: [productID],
      billingcycle: ['monthly'],
      configoptions: [configOption],
      customfields: [[]],
      domain: domain,
      rootpw: rootPass
    }
  })()
//TODO isn't tested yet:
export const payInvoice = invoiceID => {
  const invoicePayResult = query.bind(null, { method: `billing/card/pay/${invoiceID}`, http: 'POST' })()
  console.log({invoicePayResult})
  return invoicePayResult
}
//TODO isn't tested yet, double check stripe call:
//TODO add IP
// args: plan_type,domain,password,orderid,location,subscriptionId,customerid,ip
export const stripeUpdateMeta = async ({ ...args }) => {
  return await helpStripe.subscriptions.update(args.subscriptionId, {
    metadata: Object.assign(args, { subscriptionId: undefined })
  })
}
//TODO isn't tested yet, double check stripe call:
//TODO add IP
// args: productID, clerkID, domain, rootPass, configOption, packageType,
// pricing, location, email, subscriptionId, annualType, customerid
export const deployServer = async (...args) => {
  const subscription = await helpStripe.subscriptions.update(
    args.subscriptionId,
    { metadata: args }
  )
}
//TODO isn't tested yet:
export const getoneProduct = id =>
  query.bind(null, { method: `billing/product/${id}` })()
export const getProductsData = id =>
  query.bind(null, {
    method: `services/vps/v2/${id}`,
    handle: 1,
    args: { products: [] }
  })()
export const getOffers = id =>
  query.bind(null, { method: `billing/products/${id}` })()
export const getstats = (id, request) =>
  query.bind(null, { method: `services/vps/v2/${id}/stats/${request}` })()
export const getTemplates = id =>
  query.bind(null, { method: `services/vps/v2/${id}/templates` })()
// export const getRequestWrapper = async (api) => { throw 'not implemented' }
export const rebootServer = (id, dedicated = false) =>
  query.bind(null, {
    method: dedicated
      ? `services/dedicated/${id}/power/powerReset`
      : `services/vps/v2/${id}/restart`,
    http: 'POST'
  })()
//TODO isn't tested yet:
// args: osID, serverID, password, orderId, domain, ip, user, serverName
export const reinstallServer = args =>
  query.bind(null, {
    method: `services/vps/v2/${args.id}/rebuild`,
    http: 'POST',
    args
  })()
//TODO isn't tested yet:
export const restoreBackup = (id, volid) =>
  query.bind(null, {
    method: `services/vps/v2/${id}/backup/restore`,
    http: 'POST',
    args: { volid }
  })()
export const serverBackupData = id =>
  query.bind(null, { method: `services/vps/v2/${id}/backups` })()
export const scheduleBackup = id =>
  query.bind(null, { method: `services/vps/v2/${id}/backup/schedule` })()
export const pubUrls = [
  /billing\/product(s)?\/(.*)/,
  'services',
  'billing/order',
  'billing/(.+)/pay/(.+)'
]
export const defaultHeaders = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
  Accept: 'application/json, text/plain, */*',
  'Accept-Language': 'en-US,en;q=0.5',
  'Accept-Encoding': 'gzip, deflate, br',
  Connection: 'keep-alive',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-site'
}
export const getDWConfig = (ip, os, location) => {
  return ip
    ? [
      { id: 280, optionid: parseInt(os) },
      { id: 281, optionid: 862 },
      { id: 284, optionid: parseInt(location) },
      { id: 371, optionid: 962 }
    ]
    : [
      { id: 280, optionid: parseInt(os) },
      { id: 281, optionid: 862 },
      { id: 284, optionid: parseInt(location) }
    ]
}
