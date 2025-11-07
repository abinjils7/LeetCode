/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = s =>
  (s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()) === [...s].reverse().join('');
