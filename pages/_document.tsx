import { Html, Head, Main, NextScript } from 'next/document'
import TagMan from '../lib/GoogleTagManager'

export default function Document(ctx: { dangerousAsPath: string }) {
  const base = process.env.NEXT_PUBLIC_DOMAIN_NAME
  const cls =
    ctx.dangerousAsPath.indexOf('/vps-for-ninjatrader') === 0 ? 'ninja' : ' '
  return (
    <Html lang='en' className={cls}>
      <Head>
        {/* Add the link to your favicon */}
        <link rel='icon' href='/fav.svg' />
        <base href={base}></base>
        <meta
          name='description'
          content='QuantVPS is the Trading Cloud Built for Traders. Trade, Backtest, & Scale On Our Ultra-Low Latency Servers. Powered by AMD Ryzen. Compatible With All Brokers and Software. Get 50% OFF Your First Month.'
        />
        <meta property='og:title' content='QuantVPS' />
        <meta
          property='og:description'
          content='QuantVPS is the Trading Cloud Built for Traders. Trade, Backtest, & Scale On Our Ultra-Low Latency Servers. Powered by AMD Ryzen. Compatible With All Brokers and Software. Get 50% OFF Your First Month.'
        />
        <meta
          content={`${base}/351747993-c8402d90-73b0-4898-b9d8-390df0772bae.png`}
          property='og:image'
        />
        <meta property='twitter:title' content='QuantVPS' />
        <meta
          property='twitter:description'
          content='QuantVPS is the Trading Cloud Built for Traders. Trade, Backtest, & Scale On Our Ultra-Low Latency Servers. Powered by AMD Ryzen. Compatible With All Brokers and Software. Get 50% OFF Your First Month.'
        />
        <meta
          content={`${base}/351747993-c8402d90-73b0-4898-b9d8-390df0772bae.png`}
          property='twitter:image'
        />
        <meta property='og:type' content='website' />
        <meta content='summary_large_image' name='twitter:card' />
        <TagMan />
      </Head>
      <body className={cls}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
