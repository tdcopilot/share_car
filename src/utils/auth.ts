export function getToken(): string | null {
  const expire = getExpire();
  if (expire != null && Date.now() > +expire) {
    removeToken();
    removeExpire();
  }
  return localStorage.getItem('token');
}

export function setToken(token: string): void {
  localStorage.setItem('token', token);
}

function removeToken(): void {
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
