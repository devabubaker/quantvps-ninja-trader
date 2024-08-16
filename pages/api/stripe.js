import Stripe from 'stripe'

const stripe = Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
  appInfo: {
    name: 'stripe-samples/subscription-use-cases/fixed-price',
    version: '0.0.1',
    url: 'https://github.com/stripe-samples/subscription-use-cases/fixed-price'
  }
})

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { scope, method, args } = req.body
      if (scope && method && args) {
        res.status(200).json(await stripe[scope][method](...args))
      } else {
        res.status(400).end('Bad request')
      }
    } catch (error) {
      console.error('Error loading Stripe:', error.message)
      res.status(500).json({ error: 'Failed to load Stripe' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
