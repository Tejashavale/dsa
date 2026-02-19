// Given an integer array nums, find the subarray with the largest sum and return the subarray.

let nums1 = [2, 3, 5, -2, 7, -4];
let nums2 = [-2, -3, -7, -2, -10, -4];


const maxArraySumArray = (nums) => {
    let max = -Infinity;
    let sum = 0;
    let start = 0, end = 0;
    let tempStart = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > sum + nums[i]) {
            sum = nums[i];
            tempStart = i;
        } else {
            sum += nums[i];
        }
        if (sum > max) {
            max = sum;
            start = tempStart;
            end = i;
        }
    }
    return nums.slice(start, end + 1);
}

console.log("maxArraySumArray: ", maxArraySumArray(nums1));
console.log("maxArraySumArray: ", maxArraySumArray(nums2));