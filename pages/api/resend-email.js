import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({
      error: 'Method Not Allowed',
      message: 'Only POST requests are allowed'
    })
  }
  try {
    const bodydata = await req.body
    const { email, subject, text } = bodydata
    const data = await resend.emails.send({
      from: 'support@quantvps.com',
      to: email,
      subject: subject,
      text: text
    })

    res.status(200).json(data)
  } catch (error) {
    console.error('Error adding data:', error)
    res
      .status(500)
      .json({ error: 'Internal Server Error', message: error.message })
  }
}
