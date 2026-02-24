/*
Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

What is lower bound?
The lower bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.

The lower bound is the smallest index, ind, where arr[ind] >= x. 
But if any such index is not found, the lower bound algorithm returns n i.e. size of the given array.
*/

let nums1 = [1, 2, 2, 3], key1 = 2;
let nums2 = [3, 5, 8, 15, 19], key2 = 9;

const lowerBound = (nums, key) => {
    let left = 0, right = nums.length - 1;
    let index = nums.length;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
            index = mid;
        }
    }
    return index;
}

console.log("lowerBound: ", lowerBound(nums1, key1));
console.log("lowerBound: ", lowerBound(nums2, key2));
