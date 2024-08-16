import helpStripe from './helpers'
const createProduct = async item => {
  const priceAmount =
    Math.round(
      parseInt(item.pricing.USD.monthly) +
        parseInt(item.pricing.USD.monthly) / 2
    ) * 100

  //   const product = await helpStripe.products.create({
  //     name: item.name,
  //     metadata: {
  //       pid: item.pid,
  //       price: priceAmount,
  //     },
  //   });

  const price = await helpStripe.prices.create({
    currency: 'usd',
    unit_amount: priceAmount,
    recurring: {
      interval: 'month'
    },
    product_data: {
      name: item.name
    },
    metadata: {
      pid: item.pid,
      price: priceAmount / 100
    }
  })

  return price
}

export default createProduct
