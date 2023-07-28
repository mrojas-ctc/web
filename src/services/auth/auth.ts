import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_CTC_BACKEND_URL,
});

export const signInService = async <T>(
  email: string,
  password: string
): Promise<AxiosResponse<T>> => {
  const response: AxiosResponse = await instance.post<T>("/token/", {
    username: email,
    password: password,
  });
  return response;
};

export const refreshTokenService = async <T>(
  refresh: string
): Promise<AxiosResponse<T>> => {
  const response: AxiosResponse = await instance.post<T>("/token/refresh/", {
    refresh,
  });
  return response;
};
