import jwt from 'jsonwebtoken';

export const TOKEN_KEY = 'token';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

interface IDecodeJWToken {
  email: string;
  exp: number;
  iat: number;
  id: number;
  name: string;
}

export const jwtDecoded = (token: string) => {
  return jwt.decode(token) as IDecodeJWToken;
};

export const isTokenExpired = () => {
  const token = getToken();
  if (!token) {
    return true;
  }
  const { exp } = jwtDecoded(token);
  if (Date.now() >= exp * 1000) {
    return true;
  }
  return false;
};
