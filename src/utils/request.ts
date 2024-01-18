import { Modal } from 'ant-design-vue';
import axios from 'axios';
import { BASE_URL } from '@/config';
import { getToken } from '@/utils/auth.ts';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const token = getToken();
  if (token != null) {
    config.headers.Authorization = 'Bearer ' + token;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  async (error) => {
    Modal.info({
      title: error.response.data.message,
    });
    return await Promise.reject(error.response);
  },
);

export default instance;
