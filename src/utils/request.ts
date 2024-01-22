import { Modal } from 'ant-design-vue';
import axios from 'axios';
import { BASE_URL } from '@/config';
import {
  getRefreshToken,
  getToken,
  setRefreshExpire,
  setRefreshToken,
} from '@/utils/auth.ts';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async (config) => {
  const token = await getToken();
  const refreshToken = getRefreshToken();

  if (token != null) {
    config.headers.Authorization = 'Bearer ' + token;
    config.headers.Authenticate = refreshToken;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => {
    if (response.headers.Authenticate) {
      setRefreshToken(response.headers.Authenticate);
      setRefreshExpire(response.headers.Authorization_At);
    }

    return response.data.data;
  },
  (error) => {
    Modal.info({
      title: error.response.data.message,
    });
    return Promise.reject(error.response);
  },
);

export default instance;
