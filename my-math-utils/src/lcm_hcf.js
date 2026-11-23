// Lcm and Hcf
/**
 * @param {unknown} a
 * @returns {void}
 * @throws {TypeError}
 */
function validateNumber(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError("argument must be finite number");
  } else if (a <= 0 || b <= 0) {
    throw new RangeError("argument must be positive finite number");
  }
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

export function gcd(a, b) {
  validateNumber(a, b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function lcm(a, b) {
  validateNumber(a, b);
  if (a === 0 || b === 0) return 0;
  return (a / gcd(a, b)) * b;
}
