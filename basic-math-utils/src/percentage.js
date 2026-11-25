// percentage

/**
 * @param {unknown} a
 * @returns {void}
 * @throws {TypeError}
 */
function validateNumber(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError("argument must be finite number");
  } else if (a < 0 || b < 0) {
    throw new RangeError("argument must be positive finite number");
  }
}

/**
 *
 * @param {number} value
 * @param {number} total
 * @returns {number}
 */
function calculatePercentage(value, total) {
  validateNumber(value, total);
  if (total == 0 || value == 0) {
    return 0;
  }
  let percentage = (value / total) * 100;
  return percentage;
}

/**
 *
 * @param {number} value
 * @param {number} total
 * @returns {number}
 */
function increaseByPercentage(value, percentage) {
  validateNumber(value, percentage);
  if (percentage == 0) {
    return value;
  }
  let increasedPercentage = value + (value * percentage) / 100;
  return increasedPercentage;
}

/**
 *
 * @param {number} value
 * @param {number} total
 * @returns {number}
 */
function decreaseByPercentage(value, percentage) {
  validateNumber(value, percentage);
  if (percentage == 0) {
    return value;
  }
  let decreasedPercentage = value - (value * percentage) / 100;
  return decreasedPercentage;
}

export { calculatePercentage, increaseByPercentage, decreaseByPercentage };
