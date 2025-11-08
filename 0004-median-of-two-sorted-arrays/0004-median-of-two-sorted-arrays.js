/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = [...nums1, ...nums2].sort((a, b) => a - b);
  let n = arr.length;
  let mid = Math.floor(n / 2);
  return n % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
};

