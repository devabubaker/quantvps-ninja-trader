/** @type {import('next').NextConfig} */
const domain =
  process.env.VERCEL_ENV === 'production' && process.env.VERCEL_GIT_COMMIT_REF !== 'secure'
    ? process.env.VERCEL_PROJECT_PRODUCTION_URL
    : process.env.VERCEL_URL
      ? process.env.VERCEL_URL
      : 'localhost:3000'
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.100ms.live',
        port: '',
        pathname: '/docs/**'
      }
    ]
  },
  env: {
    NEXT_PUBLIC_DOMAIN_NAME: `https://${domain}`,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: `https://${domain}/login`
  },
  async redirects() {
    return [
      {
        source: '/overview',
        destination: '/dashboard',
        permanent: true
      }
    ]
  }
}
export default nextConfig
