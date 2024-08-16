// next-sitemap.config.js

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN_NAME || 'https://www.quantvps.com', // Replace with your website's URL
  generateRobotsTxt: true, // (Optional) Generate a robots.txt file
  // Additional options
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    '/dashboard/*',
    '/support',
    '/api/*'
  ], // Exclude specific paths
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard',
          '/support',
          '/api'
        ]
      }
    ],
    additionalSitemaps: [
      // If you have additional sitemaps, add them here
    ]
  }
}
