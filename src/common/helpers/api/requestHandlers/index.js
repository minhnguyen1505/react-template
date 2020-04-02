import { setTokenHeader } from './token';

export const registerHandler = async (request, appStorage) => {
  request.use((config) => {
    let newConfig = { ...config };
    newConfig = setTokenHeader(config, appStorage);
    return newConfig;
  });
};

export default {
  registerHandler
};
