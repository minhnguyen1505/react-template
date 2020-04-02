const getFormData = (
  params,
  key,
  formData = new FormData(),
  namespace = ''
) => {
  if (typeof params !== 'undefined' && params !== null) {
    if (params instanceof Date) {
      formData.append(namespace, params.toISOString());
    } else if (params instanceof Array) {
      for (const element of params) {
        getFormData(element, key, formData, namespace + '[]');
      }
    } else if (typeof params === 'object' && !(params instanceof File)) {
      for (const propertyName in params) {
        if (params.hasOwnProperty(propertyName)) {
          getFormData(
            params[propertyName],
            key,
            formData,
            namespace ? namespace + '[' + propertyName + ']' : propertyName
          );
        }
      }
    } else if (typeof params === 'object' && params instanceof File) {
      let _key = 'file';
      _key = key === 'avatar' ? key : _key;
      formData.append(_key, params);
    } else {
      formData.append(namespace, params.toString());
    }
  }

  return formData;
};

/**
 * Parse object into FormData
 * @param {Object} params
 */
export const ObjectToFormData = (params = {}, key) => {
  return getFormData(params, key);
};
