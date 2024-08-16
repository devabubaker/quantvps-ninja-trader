export const servers =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.indexOf('live') === -1
    ? [ //TEST
      {
        pid: 262,
        monthly_id: 'price_1PZLrKCL63SvPn6TMstqrHvE',
        annually_id: 'price_1PkQmtCL63SvPn6TZU9YLVbS',
        promo: 'LiteYear',
        stock: 0,
        pricing: '40',
        type: 'vps',
        name: 'VPS Lite',
        description: {
          CPU: '4x AMD',
          CPU_f: '4x AMD',
          RAM: '8GB DDR4',
          storage: '80GB NVMe',
          operating: 'Windows',
          location: 'Chicago'
        }
      },
      {
        pid: 267,
        monthly_id: 'price_1PZLuzCL63SvPn6TFbbaZL0e',
        annually_id: 'price_1PkR0zCL63SvPn6Tviga0EzB',
        promo: 'ProYear',
        stock: 0,
        pricing: '80',
        type: 'vps',
        name: 'VPS Pro',
        description: {
          CPU: '8x AMD ',
          RAM: '16GB DDR4',
          storage: '160GB NVMe',
          operating: 'Windows',
          location: 'chicago'
        }
      },
      {
        pid: 307,
        stock: 0,
        monthly_id: 'price_1PZLwhCL63SvPn6TS6nDsl2a',
        annually_id: 'price_1PkR1sCL63SvPn6TZPlLvv5B',
        promo: 'MaxYear',
        pricing: '120',
        type: 'vps',
        name: 'VPS Max',
        description: {
          CPU: '12x AMD ',
          RAM: '32GB DDR4',
          storage: '320GB NVMe',
          operating: 'Windows',
          location: 'chicago'
        }
      },
      {
        pid: 269,
        stock: 0,
        monthly_id: 'price_1PZLyGCL63SvPn6TNRy671Va',
        annually_id: 'price_1PkR2RCL63SvPn6T1xWCCGxY',
        promo: 'UltraYear',
        pricing: '160',
        type: 'vps',
        name: 'VPS Ultra',
        description: {
          CPU: '24x AMD ',
          RAM: '64GB DDR4',
          storage: '500GB NVMe',
          operating: 'Windows',
          location: 'chicago'
        }
      }
    ]
    : [ //LIVE
      {
        pid: 262,
        monthly_id: 'price_1PZLMfCL63SvPn6TC9AJT7YY',
        annually_id: 'price_1PkQVNCL63SvPn6TsvtMf6ma',
        stock: 0,
        pricing: '40',
        type: 'vps',
        name: 'VPS Lite',
        promo: 'LiteYear',
        description: {
          CPU: '4x AMD',
          CPU_f: '4x AMD',
          RAM: '8GB DDR4',
          storage: '80GB NVMe',
          operating: 'Windows',
          location: 'Chicago'
        }
      },
      {
        pid: 267,
        monthly_id: 'price_1PZLUYCL63SvPn6TFfe3RXuk',
        annually_id: 'price_1PkQX0CL63SvPn6Tm3Zzzz7L',
        promo: 'ProYear',
        stock: 0,
        pricing: '80',
        type: 'vps',
        name: 'VPS Pro',
        description: {
          CPU: '8x AMD ',
          RAM: '16GB DDR4',
          storage: '160GB NVMe',
          operating: 'Windows',
          location: 'chicago'
        }
      },
      {
        pid: 307,
        stock: 0,
        monthly_id: 'price_1PZLWrCL63SvPn6TPLWlCJGa',
        annually_id: 'price_1PkQXrCL63SvPn6T9vqDhD48',
        promo: 'MaxYear',
        pricing: '120',
        type: 'vps',
        name: 'VPS Max',
        description: {
          CPU: '12x AMD ',
          RAM: '32GB DDR4',
          storage: '320GB NVMe',
          operating: 'Windows',
          location: 'chicago'
        }
      },
      {
        pid: 269,
        stock: 0,
        monthly_id: 'price_1PZLgACL63SvPn6TTDOnMKiC',
        annually_id: 'price_1PkQZ8CL63SvPn6T9K041auC',
        promo: 'UltraYear',
        pricing: '160',
        type: 'vps',
        name: 'VPS Ultra',
        description: {
          CPU: '24x AMD ',
          RAM: '64GB DDR4',
          storage: '500GB NVMe',
          operating: 'Windows',
          location: 'chicago'
        }
      }
    ]
