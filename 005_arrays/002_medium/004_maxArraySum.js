// Problem Statement: Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.
// A subarray is a contiguous non-empty sequence of elements within an array.

let nums1 = [2, 3, 5, -2, 7, -4];
let nums2 = [-2, -3, -7, -2, -10, -4];

const maxArraySum = (nums) => {
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum > max) max = sum;
        }
    }
    return max;
}

console.log("maxArraySum: ", maxArraySum(nums1));
console.log("maxArraySum: ", maxArraySum(nums2));


const maxArraySumKadane = (nums) => {
    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        max = Math.max(max, sum);
        sum = Math.max(sum, 0);
    }
    return max;
}

console.log("maxArraySumKadane: ", maxArraySumKadane(nums1));
console.log("maxArraySumKadane: ", maxArraySumKadane(nums2));
