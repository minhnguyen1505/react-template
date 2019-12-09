import axios from 'axios';

export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = 'http://kloutkast-api.dev.goldfishcode.com/v1/auth/login/';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  return axios(REGISTER_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = 'http://kloutkast-api.dev.goldfishcode.com/v1/auth/login/';
  return axios.post(LOGIN_API_ENDPOINT, request.user)
    .then(response => {
      return response;
    })
};