'use server'
export const backupMade = async id => {
  const response = await fetch(
    `https://beta.api.datawagon.com/api/services/vps/v2/${id}/backup/toggle`,
    {
      method: 'GET',
      headers: {
        Host: 'beta.api.datawagon.com',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
        Accept: 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        Authorization: `Bearer ${process.env.DATAWAGAN_TOKEN}`,
        Origin: 'https://beta.cloud.datawagon.com',
        Connection: 'keep-alive',
        Referer: 'https://beta.cloud.datawagon.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site'
      }
    }
  )
  const data = await response.text()
  return data
}
