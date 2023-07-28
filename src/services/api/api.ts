// Axios
import axios, { AxiosResponse, HeadersDefaults } from "axios";

// Helpers
import { getAccessCookie } from "../../helpers/cookies.helpers";

// Types
import { dict } from "../../types/generics/generics";

const instance = axios.create({
  baseURL: process.env.REACT_APP_CTC_BACKEND_URL,
});

const instance_micro = axios.create({
  baseURL: process.env.REACT_APP_CTC_MICRO_URL,
});

const instance_serverless = axios.create({
  baseURL: process.env.REACT_APP_CTC_SERVERLESS_URL,
})

const token_micro = process.env.REACT_APP_CTC_MICRO_TOKEN;

export const GET_MICRO = async <T>(url: string): Promise<T> => {
  const { data }: AxiosResponse<T> = await instance_micro.get<T>(
    url,
    {
			headers: {
				"Content-Type": "application/json",
        Authorization: `Bearer ${token_micro}`,
			}
		}
  );
  return data;
};

export const GET_SERVERLESS = async <T>(url: string): Promise<T> => {
  const { data }: AxiosResponse<T> = await instance_serverless.get<T>(
    url,
    {
			headers: {
				"Content-Type": "application/json",
			}
		}
  );
  return data;
};

export const GET = async <T>(url: string): Promise<T> => {
  const { data }: AxiosResponse<T> = await instance.get<T>(
    url,
    {
			headers: {
				"Content-Type": "application/json",
        Authorization: `Bearer ${getAccessCookie()}`,
			}
		}
  );
  return data;
};

const instance_meeting = axios.create({
  baseURL: process.env.REACT_APP_CTC_EVENTS_API_URL,
});

export const GET_MEETING = async <T>(url: string): Promise<T> => {  const { data }: AxiosResponse<T> = await instance_meeting.get<T>(
    url,
    {
			headers: {
				"Content-Type": "application/json",
			}
		}
  );
  return data;
};

export const POST_MICRO = async (url: string, payload: dict) => {
  const response: AxiosResponse = await instance_micro.post(
    url, 
    payload,
    {
			headers: {
				"Content-Type": "application/json",
			}
		}
  );
  return response;
};

export const POST = async (url: string, payload: dict) => {
  const response: AxiosResponse = await instance.post(
    url, 
    payload,
    {
			headers: {
				"Content-Type": "application/json",
        Authorization: `Bearer ${getAccessCookie()}`,
			}
		}
  );
  return response;
};

export const PUT = async (url: string, payload: dict) => {
  const response: AxiosResponse = await instance.put(
    url, 
    payload,
    {
			headers: {
				"Content-Type": "application/json",
        Authorization: `Bearer ${getAccessCookie()}`,
			}
		}
  );
  return response;
};


export const PATCH_SERVERLESS = async <T>(url: string, payload: dict={}) => {
  const response: AxiosResponse = await instance_serverless.patch(
    url, 
    payload,
    {
			headers: {
				"Content-Type": "application/json",
			}
		}
  );
  return response;
};

export const PATCH_MICRO = async (url: string, payload: dict={}) => {
  const response: AxiosResponse = await instance_micro.patch(
    url, 
    payload,
    {
			headers: {
				"Content-Type": "application/json",
			}
		}
  );
  return response;
};

export const PATCH = async (url: string, payload: dict) => {
  const response: AxiosResponse = await instance.patch(
    url, 
    payload,
    {
			headers: {
				"Content-Type": "application/json",
        Authorization: `Bearer ${getAccessCookie()}`,
			}
		}
  );
  return response;
};

export const PATCHFILES = async (url: string, payload: dict) => {
  const response: AxiosResponse = await instance.patch(
    url, 
    payload,
    {
			headers: {
				"Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getAccessCookie()}`,
			}
		}
  );
  return response;
};

export const DELETE_MICRO = async (url: string) => {
  const response: AxiosResponse = await instance_micro.delete(
    url,
    {
			headers: {
				"Content-Type": "application/json",
        Authorization: `Bearer ${getAccessCookie()}`,
			}
		}
  );
  return response;
};

export const DELETE = async (url: string) => {
  const response: AxiosResponse = await instance.delete(
    url,
    {
			headers: {
				"Content-Type": "application/json",
        Authorization: `Bearer ${getAccessCookie()}`,
			}
		}
  );
  return response;
};
