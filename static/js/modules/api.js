import { getCache, setCache } from './cache.js'
import { getTimestamp, compareHourly } from './time.js'

/**
 * Function checks whether an hour has passes to refresh dataset
 * @param {String} url API endpoint
 * @param {Object} header Header params
 */
export function getData(url, header) {
  return getCache(url) ? compareHourly(getCache(url).timestamp, +new Date) ? setData(url, header) : getCache(url) : setData(url, header)
}

/**
 * Function makes an API calls and caches them if they're not cached before
 * @param {String} url API endpoint
 * @param {Object} header Header params
 */
export async function setData(url, header){
  return await fetch(url, header ? header : null)
  .then(response => response.json())
  .then(data => ({ url: url, timestamp: getTimestamp(), data: data }))
  .then(data => (setCache(url, data), getCache(url)))
  .catch(error => console.log(error))
}