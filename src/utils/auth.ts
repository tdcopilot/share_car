import { refreshToken } from '@/api/user.ts';
import { ITokenInfo } from '@/interface/user.ts';

export function getToken(): Promise<string | null> {
  return new Promise((resolve) => {
    const now = Date.now();
    const expire = getExpire();
    const refreshExpire = getRefreshExpire();
    const token = localStorage.getItem('token');

    if (expire != null && now <= +expire) {
      resolve(token);
    } else if (refreshExpire != null && now <= +refreshExpire) {
      refreshToken<ITokenInfo>().then((res) => {
        const { expire, token, refresh_token, refresh_token_expire } = res;

        setExpire(expire);
        setToken(token);

        setRefreshToken(refresh_token);
        setRefreshExpire(refresh_token_expire);

        resolve(token);
      });
    } else {
      resolve(token);
    }
  });
}

export function setToken(token: string): void {
  localStorage.setItem('token', token);
}

export function removeToken(): void {
  localStorage.removeItem('token');
}

export function getExpire(): string | null {
  return localStorage.getItem('expire');
}

export function setExpire(value: number): void {
  const date = Date.now() + value * 1000 + '';
  localStorage.setItem('expire', date);
}

export function removeExpire(): void {
  localStorage.removeItem('expire');
}

export function getRefreshToken() {
  return localStorage.getItem('refresh_token');
}

export function setRefreshToken(token: string) {
  localStorage.setItem('refresh_token', token);
}

export function getRefreshExpire() {
  return localStorage.getItem('refresh_token_expire');
}

export function setRefreshExpire(value: number) {
  const date = Date.now() + value * 1000 + '';
  localStorage.setItem('refresh_expire', date);
}
