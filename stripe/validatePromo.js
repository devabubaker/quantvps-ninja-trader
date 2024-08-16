import helpStripe from './helpers'
const searchPromo = async promoid => {
  try {
    const { data } = await helpStripe.promotionCodes.list({code: promoid})
    return {
      success: true,
      promo: data.filter(v => v.code === promoid)[0].coupon
    }
  } catch (err) {
    return {
      success: false
    }
  }
}

export default searchPromo
