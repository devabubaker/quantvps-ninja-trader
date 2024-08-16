export const measureLatency = async () => {
  const start = Date.now()
  await fetch('/api/ping')
  const end = Date.now()
  return end - start
}
