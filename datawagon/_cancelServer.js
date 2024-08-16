'use server'
// reason
// :
// "I don't want this service anymore"
// type
// :
// "End of Billing Period"
export const request_cancel = async (id, cancelType, reason) => {
  const requestBody = {
    reason: reason,
    type: cancelType
  }
  const response = await fetch(
    `https://beta.api.datawagon.com/api/services/${id}/cancel`,
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
  const data = await response.json()
  return data
}
