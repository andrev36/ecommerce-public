import axios, { AxiosResponse } from 'axios';

export const logoutAction = () => {
 fetch('/api/session', { method: 'DELETE' });
};

export const checkLoggedIn = async () => {
 const response: AxiosResponse<any> = await axios.get('/api/session');
 const { user }: any = response;
 const preloadedState = {};
 if (user) {
  return { session: user };
 } else {
  return preloadedState;
 }
};
