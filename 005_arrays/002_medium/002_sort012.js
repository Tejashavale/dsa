const nums1 = [2, 0, 2, 1, 1, 0];
const nums2 = [2, 0, 1];
const nums3 = [1, 0, 2];
const nums4 = [1, 2, 2, 2, 2, 0, 0, 0, 1, 1];

var sort012 = (arr) => {
    let nums = JSON.parse(JSON.stringify(arr));
    let zeroCount = 0, oneCount = 0;
    for (let num of nums) {
        if (num === 0) zeroCount++;
        else if (num === 1) oneCount++;
    }
    for (let i = 0; i < nums.length; i++) {
        if (zeroCount) {
            nums[i] = 0;
            zeroCount--;
        } else if (oneCount) {
            nums[i] = 1;
            oneCount--;
        } else {
            nums[i] = 2;
        }
    }
    return nums;
};
console.log("sort012: ", sort012(nums1));
console.log("sort012: ", sort012(nums2));
console.log("sort012: ", sort012(nums3));
console.log("sort012: ", sort012(nums4));

// Dutch National Flag algorithm
const sort012Optimal = (nums) => {
    let left = 0, right = nums.length - 1;
    let mid = 0;
    while (mid <= right) {
        if (nums[mid] === 0) {
            [nums[left], nums[mid]] = [nums[mid], nums[left]];
            left++;
            mid++;
        } else if (nums[mid] === 2) {
            [nums[mid], nums[right]] = [nums[right], nums[mid]];
            right--;
        } else {
            mid++;
        }
    }
    return nums;
}

console.log("sort012Optimal: ", sort012Optimal(nums1));
console.log("sort012Optimal: ", sort012Optimal(nums2));
console.log("sort012Optimal: ", sort012Optimal(nums3));
console.log("sort012Optimal: ", sort012Optimal(nums4));