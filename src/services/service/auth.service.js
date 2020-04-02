import * as authApi from '../api/auth.api';

export const login = (authInfo) => {
  return new Promise((resolve) => {
    console.log('run actions');
    authApi
      .login(authInfo)
      .then((resp) => {
        resolve({
          code: 200,
          data: resp
        });
      })
      .catch((err) => {
        resolve({
          code: err.code,
          err: err
        });
      });
  });
};
