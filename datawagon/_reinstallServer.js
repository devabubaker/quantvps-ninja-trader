'use server'
import { requestEmail } from '../resend/sendEmail'
import { updateUserServer } from './updateUserServer'

export const reinstallServer = async (
  osID,
  serverID,
  password,
  orderId,
  domain,
  ip,
  user,
  serverName
) => {
  const requestBody = {
    custom: false,
    osid: osID,
    password: password,
    password_confirm: password
  }

  const requestBodyString = JSON.stringify(requestBody)
  const contentLength = Buffer.byteLength(requestBodyString, 'utf-8')

  try {
    const response = await fetch(
      `https://beta.api.datawagon.com/api/services/vps/v2/${serverID}/rebuild`,
      {
        method: 'POST',
        headers: {
          Host: 'beta.api.datawagon.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate, br',
          'Content-Type': 'application/json;charset=utf-8',
          'Content-Length': contentLength,
          Authorization: `Bearer ${process.env.DATAWAGAN_TOKEN}`,
          Origin: 'https://beta.cloud.datawagon.com',
          Connection: 'keep-alive',
          Referer: 'https://beta.cloud.datawagon.com/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-site'
        },
        body: requestBodyString
      }
    )
    // get the status of the response
    // console.log("Response status:", response.status);

    await updateUserServer(orderId, 'password', password)

    if (user?.metadata?.rebuild === 'true') {
      const sendEmailData = await requestEmail(
        user?.email,
        `${serverName} Rebuild Started`,
        `Your ${serverName} server rebuilding is started! \n Login credentials:\n username: ${domain}\n password: ${password}\n Ip(s): ${ip}`
      )
    }

    return { status: true, sendEmailData }
  } catch (error) {
    console.error('Error in reinstall server', error)
    return { error: error }
  }
}
