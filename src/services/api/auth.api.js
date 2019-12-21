import api from '../../common/helpers/api';
import { API_URL } from '../../common/config';
import { tokenDTO } from '../../common/data/tokenDTO';

export const login = (authInfo) => {
    return new Promise(async (resolve, reject) => {
        console.log('run api')
        try {
            const { username, email, password } = authInfo;
            const resp = await api.post(`${API_URL.LOGIN}`, {
                username: username.toLowerCase(),
                email,
                password
            });
            if (resp) {
                console.log('run here', resp)
                // const authData = tokenDTO(resp);
                resolve(resp);
                
            }
        } catch (err) {
            reject(err);
        }
    })
};

// export const registerUserService = request => {
//     const REGISTER_API_ENDPOINT =
//         "http://kloutkast-api.dev.goldfishcode.com/v1/auth/login/";

//     const parameters = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(request.user)
//     };

//     return axios(REGISTER_API_ENDPOINT, parameters)
//         .then(response => {
//             return response.json();
//         })
//         .then(json => {
//             return json;
//         });
// };