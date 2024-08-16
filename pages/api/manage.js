import { getAuth, createRouteMatcher } from '@clerk/nextjs/server'
import { pubUrls, defaultHeaders } from '@/datawagon'

const base = 'https://beta.api.datawagon.com/api'

Object.assign(defaultHeaders, {
  Host: 'beta.api.datawagon.com',
  Authorization: `Bearer ${process.env.DATAWAGAN_TOKEN}`,
  Origin: 'https://beta.cloud.datawagon.com',
  Referer: 'https://beta.cloud.datawagon.com/'
})

defaultHeaders.Authorization = `Bearer ${process.env.DATAWAGAN_TOKEN}`

const matchPub = createRouteMatcher(pubUrls)

const secretKey = process.env.CLERK_SECRET_KEY

const filterMap = {
  orders: (vals, list) => {
    list.products.product = list.products.product.filter(
      v => vals.indexOf(v.orderid) > -1
    )
    return list.products.product
  },
  products: (_, list) => {
    return list.products
  }
}

const walk = (params, list) => {
  const result = Object.entries(params).map(([key, val]) => {
    if (filterMap[key]) {
      return filterMap[key](val, list)
    }
  })
  return result[0] ?? list
}

export default async function handler(req, res) {
  let status = 500
  if (req.method === 'POST') {
    try {
      const auth = getAuth(req, { secretKey })
      const { method, http, args, handle } = req.body
      const isPub = matchPub({ nextUrl: { pathname: method } })
      if (!(isPub || auth.userId)) {
        return res.status(401).json({ error: 'Not authenticated' })
      }
      const url = `${base}/${method}`
      const options = { method: http ?? 'GET', headers: defaultHeaders }
      if (http === 'POST') {
        options.headers['Content-type'] = 'application/json'
        options['body'] = JSON.stringify(args)
      } else {
        Object.assign(options, args)
      }
      const response = await fetch(url, options)
      status = response.status
      const text = await response.text()
      let json = null
      try {
        json = JSON.parse(text)
      } catch (e) {
        if (status > 399) throw new Error(text)
        json = text
      }
      if (handle) {
        const ret = walk(args, json)
        res.status(status).json(ret ?? json)
      } else {
        res.status(status).json(json)
      }
    } catch (error) {
      console.log(error)
      console.error('Error loading:', error.message)
      res.status(status).json({ error: error.message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
