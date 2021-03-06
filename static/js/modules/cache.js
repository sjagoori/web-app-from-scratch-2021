/**
 * Function sets data in localstorage, and removes existing data
 * @param {String} key key
 * @param {Object} data data
 */
export function setCache(key, data){
  localStorage.removeItem(key);
  localStorage.setItem(key, JSON.stringify(data))
}

/**
 * Function returns value from localstorage
 * @param {String} key 
 */
export function getCache(key){
  return JSON.parse(localStorage.getItem(key));
}