import getRequestWrapper from './_getWrapper'

const checkbackup = async id => {
  const response = await getRequestWrapper(
    `https://beta.api.datawagon.com/api/services/vps/v2/${id}/backup/check`
  )
  return response
}

export default checkbackup
