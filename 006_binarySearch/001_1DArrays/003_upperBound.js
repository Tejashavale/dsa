/*
Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the upper bound of x.

What is Upper Bound?
The upper bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than the given key i.e. x.

The upper bound is the smallest index, ind, where arr[ind] > x.
*/

let nums1 = [1, 2, 2, 3], key1 = 2;
let nums2 = [3, 5, 8, 15, 19], key2 = 9;

const upperBound = (nums, key) => {
    let left = 0, right = nums.length - 1;
    let index = nums.length;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > key) {
            right = mid - 1;
            index = mid;
        } else {
            left = mid + 1;
        }
    }
    return index;
}

console.log("upperBound: ", upperBound(nums1, key1));
console.log("upperBound: ", upperBound(nums2, key2));
