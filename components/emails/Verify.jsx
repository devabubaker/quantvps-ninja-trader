import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text
} from '@react-email/components'
import * as React from 'react'

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

export const KoalaWelcomeEmail = ({ userFirstname }) =>
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/koala-logo.png`}
          width='170'
          height='50'
          alt='Koala'
          style={logo}
        />
        <Text style={h_one}>Login to QuantVPS</Text>
        <Text style={paragraph}>
          To access your account please click the button below and securely
          complete the login process.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href='https://getkoala.com'>
            Authenticate
          </Button>
        </Section>

        <Hr style={hr} />
        <Text style={footer}>
          This request is sent from an unknown location. If it wasn&apos;t you
          then safely ignore this message.
        </Text>
      </Container>
    </Body>
  </Html>


export default KoalaWelcomeEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
}

const container = {
  margin: '0 auto',
  padding: '50px 0 48px'
}

const logo = {
  margin: '0 auto'
}

const h_one = {
  fontSize: '26px',
  lineHeight: '30px',
  fontWeight: 'bold',
  textAlign: 'center'
}
const paragraph = {
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'center',
  padding: '0 14px',
  marginTop: '16px'
}

const btnContainer = {
  textAlign: 'center'
}

const button = {
  backgroundColor: '#000',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
  margin: '0 auto',
  padding: '16px 50px',
  borderRadius: '30px',
  marginTop: '20px',
  fontWeight: '600'
}

const hr = {
  borderColor: '#cccccc',
  marginTop: '80px',
  marginBottom: '20px'
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  textAlign: 'center',
  padding: '0 10px'
}
