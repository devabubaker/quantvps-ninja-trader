import getRequestWrapper from './_getWrapper'

const scheduleBackup = async () => {
  const response = await getRequestWrapper(
    'https://beta.api.datawagon.com/api/services/vps/v2/8461/backup/schedule'
  )
  return response
}

export default scheduleBackup
