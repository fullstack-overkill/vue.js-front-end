
const apiUrl = process.env.VUE_APP_API_URL || null

export const stytem = {
  token: '518c2b22e9372a2e8bd0cda98b14e21d',
  panel: '/',
  api: process.env.NODE_ENV === 'development' ? `${apiUrl}` : `${apiUrl}`
}
