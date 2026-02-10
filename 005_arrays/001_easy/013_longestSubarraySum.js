// Problem Statement: Given an array nums of size n and an integer k, find the length of the longest sub-array that sums to k. If no such sub-array exists, return 0.

let nums = [10, 5, 2, 7, 1, 9]
let k = 15

const longestSubarraySumBrute = (arr, k) => {
    let longest = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum == k) {
                longest = Math.max(longest, j - i + 1);
                break;
            }
            if (sum > k) break;
        }
    }
    return longest;
}

const longestSubarraySumOptimized = (arr, k) => {
    let left = 0, right = 0;
    let longest = 0;
    let currentSum = 0;
    let n = arr.length;

    while (right < n) {

        while (currentSum > k && left <= right) {
            currentSum -= arr[left];
            left++;
        }
        if (currentSum === k) {
            longest = Math.max(longest, right - left + 1);
        }
        right++;
        if (right < n) currentSum += arr[right];
    }
    return longest;
}

console.log("longest Subarray Sum Brute: ", longestSubarraySumBrute(nums, k));
console.log("longest Subarray Sum: ", longestSubarraySumOptimized(nums, k));