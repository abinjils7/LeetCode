/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
    const k = n.toString(2).length;

    return (1 << k) - 1;
};