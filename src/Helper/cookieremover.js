import Cookies from 'js-cookie';

export const deleteCookie = (cookieName) => {
  Cookies.remove(cookieName, { path: '/' });
};