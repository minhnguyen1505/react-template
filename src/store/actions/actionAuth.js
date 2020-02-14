import types from "./types";

// export const registerUserAction = user => {
//   return {
//     type: types.REGISTER_USER,
//     user
//   };
// };

export const loginUserAction = (data) => {
  return { type: types.LOGIN_REQUEST, data };
};
