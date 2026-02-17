/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let map = new Map()

    let comon = [];

    for (let num of nums1) {
        map.set(num, true)
    }

    for (let num of nums2) {
        if (map.has(num)) {
            comon.push(num)
            map.delete(num)
        }

    }
    return comon
};