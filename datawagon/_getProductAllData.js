import getRequestWrapper from './_getWrapper'

const getProductAllData = async id => {
  const response = await getRequestWrapper(
    `https://beta.api.datawagon.com/api/services/vps/v2/${id}`
  )
  return response
}

export default getProductAllData
