import request from '@/utils/request';

export async function githubLogin<T>(data: {
  code: string;
  state: string;
}): Promise<T> {
  return await request({
    url: '/auth/github',
    params: data,
  });
}

export async function getUserInfo<T>(): Promise<T> {
  return await request({
    url: '/user',
  });
}
