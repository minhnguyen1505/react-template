export const errorObject = (status, message) => ({
  code: status,
  message
});

export const errorHandlerException = res => {
  const code = res.status ? res.status : res.code;
  const response = res.status ? res.data : res;
  const errorMessage = response.message !== null ? response.message : "";
  switch (code) {
    case 200: // Success
    case 201:
      return res.data;
    case 204:
      return null;
    case 400: {
      return Promise.reject(errorObject(code, errorMessage));
    }
    default: {
      return Promise.reject(errorObject(res.status, res.data));
    }
  }
};
