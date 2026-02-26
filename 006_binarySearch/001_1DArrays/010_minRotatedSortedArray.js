// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.

let nums1 = [3, 4, 5, 1, 2];
let nums2 = [4, 5, 6, 7, 0, 1, 2];
let nums3 = [11, 13, 15, 17];
let nums4 = [5, 1, 2, 3, 4];

const minRotatedSortedArray = (nums) => {
    let left = 0, right = nums.length - 1;
    let min = nums[0];
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[left] <= nums[mid]) {
            min = Math.min(min, nums[left]);
            left = mid + 1;
        } else {
            min = Math.min(min, nums[mid]);
            right = mid - 1;
        }
    }
    return min;
}

console.log("minRotatedSortedArray: ", minRotatedSortedArray(nums1));
console.log("minRotatedSortedArray: ", minRotatedSortedArray(nums2));
console.log("minRotatedSortedArray: ", minRotatedSortedArray(nums3));
console.log("minRotatedSortedArray: ", minRotatedSortedArray(nums4));
