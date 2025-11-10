/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0;
  while (n !== 0) {
    count += n & 1;  // check last bit
    n = n >>> 1;     // unsigned right shift
  }
  return count;
};
