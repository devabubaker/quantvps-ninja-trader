export function getLocalStorage(key, defaultValue) {
  const val = localStorage.getItem(key)
  return val !== null && val !== undefined ? JSON.parse(val) : defaultValue
}
export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}
