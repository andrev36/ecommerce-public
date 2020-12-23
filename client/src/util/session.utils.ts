import axios from 'axios'

export const logoutAction = () => {
 fetch('/api/session', { method: 'DELETE' })
}

export const checkLoggedIn = async (): Promise<{}> => {
 const response: {
  user: {
   userId: string | null
   username: string | null
   isAdmin: boolean | null
  }
 } = await axios.get('/api/session')
 const { user } = response
 const preloadedState = {}
 if (user) {
  return { session: user }
 } else {
  return preloadedState
 }
}
