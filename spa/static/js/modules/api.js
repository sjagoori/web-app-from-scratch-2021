import { getCache, setCache } from './cache.js'

/**
 * Function makes an API calls and caches them if they're not cached before
 * @param {String} url API endpoint
 * @param {Object} header Header params
 */
export async function getData(url, header) {
  return getCache(url) ? getCache(url) : await fetch(url, header ? header : null)
    .then(response => response.json())
    .then(data => ({ url: url, data: data }))
    .then(data => (setCache(url, data), getCache(url)))
    .catch(error => console.log(error))
}
