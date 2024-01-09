/**
 * input : 1234567.89
 * output: "1,234,567.89"
 */

export const formatNumber = number => {
  let numStr = String(number);
  const dotIndex = numStr.indexOf('.');
  let startPosition = dotIndex === -1 ? numStr.length : dotIndex;

  // Starting 3 from the end, add a comma every 3 digits.
  for (let i = startPosition - 3; i > 0; i -= 3) {
    numStr = numStr.slice(0, i) + ',' + numStr.slice(i);
  }

  return numStr;
}