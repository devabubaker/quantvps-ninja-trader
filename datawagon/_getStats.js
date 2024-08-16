import getRequestWrapper from './_getWrapper'

const getstats = async (id, query) => {
  const response = await getRequestWrapper(
    `https://beta.api.datawagon.com/api/services/vps/v2/${id}/stats/${query}`
  )
  return response
}

export default getstats
