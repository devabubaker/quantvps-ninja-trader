import { requestEmail } from '../resend/sendEmail'
import { deployTemplate } from '../templates/deploytemplate'
import helpStripe from '../stripe/helpers'
import { postNotificaiton } from '@/lib/postNofication'
const deployServer = async (
  productID,
  clerkID,
  domain,
  rootPass,
  configOption,
  packageType,
  pricing,
  location,
  email,
  subscriptionId,
  annualType,
  customerid
) => {
  try {
    if (
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.indexOf('live') > -1 &&
      clerkID !== false
    ) {
      const requestBody = {
        paymentmethod: 'stripe',
        pid: [productID],
        billingcycle: ['monthly'],
        configoptions: [configOption],
        customfields: [[]],
        domain: domain,
        rootpw: rootPass
      }

      console.log('Request body:', requestBody)

      const response = await fetch(
        'https://beta.api.datawagon.com/api/billing/order',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            Authorization: `Bearer ${process.env.DATAWAGAN_TOKEN}`,
            Connection: 'keep-alive',
            'Content-Length': JSON.stringify(requestBody).length,
            'Content-Type': 'application/json;charset=UTF-8',
            Host: 'beta.api.datawagon.com',
            Origin: 'https://beta.cloud.datawagon.com',
            Referer: 'https://beta.cloud.datawagon.com/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'sec-ch-ua':
              '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"'
          },
          body: JSON.stringify(requestBody)
        }
      )
      let data = 'No data'

      try {
        data = await response.json()
        console.log('data', data)
        // Hit the invoice api to pay
        const invoiceID = data.invoiceid
        await payInvoice(invoiceID)

        await requestEmail(
          email,
          `New Server Deployed (${data.orderid})`,
          deployTemplate(
            annualType === 'yearly' ? parseInt(pricing) * 10 : pricing,
            'Credit Card',
            subscriptionId,
            domain
          )
        )

        let deploydata = await deployvps(
          packageType,
          domain,
          rootPass,
          data.orderid,
          location,
          subscriptionId,
          customerid
        )
        const rebootNotificaton = await postNotificaiton(
          `deployed new server ${domain}`,
          customerid
        )
        return {
          success: true,
          data: data
        }
      } catch (error) {
        console.log('Error in deploy server', error)
        return {
          success: false,
          data: error
        }
      }
    } else {
      // -------------------- for testing-------------------

      let data = { orderid: 9203 }
      await requestEmail(
        email,
        `New Server Deployed (${data.orderid})`,
        deployTemplate(
          annualType === 'yearly' ? parseInt(pricing) * 10 : pricing,
          'Credit Card',
          subscriptionId,
          domain
        )
      )
      let deploydata = await deployvps(
        packageType,
        domain,
        rootPass,
        data.orderid,
        location,
        subscriptionId,
        customerid
      )
      const rebootNotificaton = await postNotificaiton(
        `deployed new server ${domain}`,
        customerid
      )
      return {
        success: true,
        data: data
      }
    }
  } catch (error) {
    return {
      success: false,
      error: 'Error Processing The Payment'
    }
  }
}

const payInvoice = async invoiceID => {
  console.log('Pay invoice called', invoiceID)
  const response = await fetch(
    `https://beta.api.datawagon.com/api/billing/card/pay/${invoiceID}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: `Bearer ${process.env.DATAWAGAN_TOKEN}`,
        Connection: 'keep-alive',
        Host: 'beta.api.datawagon.com',
        Origin: 'https://beta.cloud.datawagon.com',
        Referer: 'https://beta.cloud.datawagon.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'sec-ch-ua':
          '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"'
      }
    }
  )
  const data = await response.text()
  console.log('Pay invoice response:', data)
}

const deployvps = async (
  plan_type,
  domain,
  password,
  orderid,
  location,
  subscriptionId,
  customerid
) => {
  let serverdata = {
    plan_type,
    domain,
    password,
    orderid: orderid,
    location,
    customerid
  }

  const subscription = await helpStripe.subscriptions.update(subscriptionId, {
    metadata: serverdata
  })
}

export default deployServer
