/**
 * Find an item from Storage by key
 * @param {String} key
 * @returns {Promise} return a Promise
 */
const get = async (key) => {
  try {
    const result = await localStorage.getItem(key);
    if (!result) {
      return null;
    }
    return JSON.parse(result);
  } catch (error) {
    return null;
  }
};

/**
 * Save an item to Storage by key
 * @param {String} key
 * @param {any} data
 * @returns {Promise} return a Promise
 */
const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const update = (key, value) =>
  get(key).then((item) => {
    // if current value is a string, then overwrite; else merge objects
    const v =
      typeof value === 'string' ? value : Object.assign({}, item, value);
    return localStorage.setItem(key, JSON.stringify(v));
  });

const deleteItem = (key) => localStorage.removeItem(key);

const LocalStorage = {
  get,
  save,
  update,
  delete: deleteItem
};

export default LocalStorage;
