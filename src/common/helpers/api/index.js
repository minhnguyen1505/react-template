import axiosInstance from './axiosInstance';
import axiosInstanceCoin from './axiosInstanceCoin';
import { ObjectToFormData } from '../../../common/helpers';
import { errorHandlerException } from './responseHandlers/errorHandler';
import { REQUEST_TYPE } from '../../../common/config';

/**
 * Requests to API
 * @param {String} url
 * @param {import('axios').AxiosRequestConfig} options
 * If you wish to send FormData instead of JSON, set options.useFormData to true.
 */
const request = (
  url,
  options = {
    method: REQUEST_TYPE.GET,
    useFormData: false,
    typeAPI: 'default'
  }
) => {
  const data = { ...(options.data || {}) };
  const reqOptions = { ...options, data };
  if (
    [REQUEST_TYPE.POST, REQUEST_TYPE.PUT, REQUEST_TYPE.PATCH].includes(
      options.method
    ) &&
    options.useFormData
  ) {
    if (options.key) {
      reqOptions.data = ObjectToFormData(data, options.key);
    } else {
      reqOptions.data = ObjectToFormData(data);
    }

    if (options.dataSource) {
      for (const prop in options.dataSource) {
        reqOptions.data.append(prop, options.dataSource[prop]);
      }
    }

    reqOptions.headers = { 'Content-Type': 'multipart/form-data' };
  }
  if (options.typeAPI === 'coin') {
    const req = axiosInstanceCoin(url, reqOptions);
    return req.catch(errorHandlerException);
  } else {
    const req = axiosInstance(url, reqOptions);
    return req.catch(errorHandlerException);
  }
};

/**
 * Send GET Request to API
 * @param {String} url
 * @param {AxiosRequestConfig} options
 */
const get = (url, options = {}) =>
  request(url, { ...options, method: REQUEST_TYPE.GET });

/**
 * Send POST Request to API
 * @param {String} url
 * @param {Object} data
 * @param {{useFormData: boolean}} options
 * If you wish to send FormData instead of JSON, set options.useFormData to true.
 */
const post = (url, data = {}, options = {}) =>
  request(url, { ...options, data, method: REQUEST_TYPE.POST });

/**
 * Send PUT Request to API
 * @param {String} url
 * @param {Object} data
 * @param {AxiosRequestConfig} options
 * If you wish to send FormData instead of JSON, set options.useFormData to true.
 */
const put = (url, data = {}, options = {}) =>
  request(url, { ...options, data, method: REQUEST_TYPE.PUT });

/**
 * Send PATCH Request to API
 * @param {String} url
 * @param {Object} data
 * @param {AxiosRequestConfig} options
 * If you wish to send FormData instead of JSON, set options.useFormData to true.
 */
const patch = (url, data = {}, options = {}) =>
  request(url, { ...options, data, method: REQUEST_TYPE.PATCH });

/**
 * Send DELETE Request to API
 * @param {String} url
 * @param {AxiosRequestConfig} options
 */
const remove = (url, options = {}) =>
  request(url, { ...options, method: REQUEST_TYPE.DEL });

export default {
  get,
  post,
  put,
  patch,
  delete: remove
};
