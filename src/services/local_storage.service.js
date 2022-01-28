const JWT_TOKEN_KEY = 'JWT_TOKEN'

const getToken = key => {
  return window.localStorage.getItem(key)
}

const saveToken = (key, token) => {
  window.localStorage.setItem(key, token)
}

const destroyToken = key => {
  window.localStorage.removeItem(key)
}

export { getToken, saveToken, destroyToken, JWT_TOKEN_KEY }
