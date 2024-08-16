import helpStripe from './helpers'
const searchProduct = async productid => {
  const products = await helpStripe.prices.search({
    query: `metadata[\'pid\']:\'${productid}\'`
  })
  return products
}

export default searchProduct
