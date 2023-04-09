const jwt_decode = require('jwt-decode');
export const isAuthenticated = () => localStorage.getItem('@playmusics/token') !== null;

export const isAdmin = () => {
  if (isAuthenticated()) {
      const token = jwt_decode(getToken());
      if (token.user.role === 'admin') {
        return true;
      }
  }
  return false;
};

export const getToken = () => localStorage.getItem('@playmusics/token');

export const decodeToken = () => {
  if (localStorage.getItem('@playmusics/token')) {
      return jwt_decode(localStorage.getItem('@playmusics/token'));
  }
  return null;
};
