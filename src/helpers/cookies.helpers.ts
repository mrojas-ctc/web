import Cookies from "js-cookie";
import {
  COOKIE_ACCESS_NAME,
  COOKIE_REFRESH_NAME,
} from "../constants/cookies.constants";

/** Generics */
const getCookie = (name: string) => Cookies.get(name);
const setCookie = (
  name: string,
  payload: string,
  options?: Cookies.CookieAttributes
) => Cookies.set(name, payload, options);
const removeCookie = (name: string) => Cookies.remove(name);

/* GET */
const getAccessCookie = () => {
  return getCookie(COOKIE_ACCESS_NAME);
};

const getRefreshCookie = () => {
  return getCookie(COOKIE_REFRESH_NAME);
};

/* SET */
const setAccessCookie = (access: string) => {
  setCookie(COOKIE_ACCESS_NAME, access);
};

const setRefreshCookie = (refresh: string) => {
  setCookie(COOKIE_REFRESH_NAME, refresh);
};

// REMOVE
const removeAccessCookie = () => {
  removeCookie(COOKIE_ACCESS_NAME);
};

const removeRefreshCookie = () => {
  removeCookie(COOKIE_REFRESH_NAME);
};

export {
  getAccessCookie,
  getCookie,
  removeAccessCookie,
  removeRefreshCookie,
  removeCookie,
  setCookie,
  setAccessCookie,
  getRefreshCookie,
  setRefreshCookie,
};
