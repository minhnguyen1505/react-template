import { errorHandlerException } from './errorHandler';

export const registerHandler = (response) =>
  response.use((res) => {
    const data = errorHandlerException(res);
    return data;
  });

export default {
  registerHandler
};
