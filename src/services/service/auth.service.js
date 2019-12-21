import * as authApi from '../api/auth.api';

export const login = (authInfo) => {
    return new Promise((resolve) => {
        console.log('run actions')
        authApi.login(authInfo)
            .then((resp) => {
                resolve(resp);
            })
            .catch((err) => {
                resolve(err);
            });
    });
}