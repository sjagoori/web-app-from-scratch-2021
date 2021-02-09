/**
 * Function returns time in epoch.
 */
export function getTimestamp() {
  return +new Date
}

/**
 * Funtion compares epoch. If an hour has past, it returns true.
 * @param {Number} then - time in epoch
 * @param {Number} now - time in epoch
 */
export function compareHourly(then, now) {
  return (now - then) > 3600000 ? true : false
}