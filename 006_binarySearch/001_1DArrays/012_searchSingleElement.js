// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
// Return the single element that appears only once.
// Your solution must run in O(log n) time and O(1) space.

let nums1 = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
let nums2 = [1, 1, 2, 3, 3, 4, 4, 8, 8];
let nums3 = [3, 3, 7, 7, 10, 11, 11];

const searchSingleElement = (nums) => {
    let n = nums.length;
    if (n === 1 || nums[0] !== nums[1]) return nums[0];
    if (nums[n - 1] !== nums[n - 2]) return nums[n - 1];
    let left = 1, right = n - 2;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
            return nums[mid];
        }
        if (mid % 2 === 0) {
            if (nums[mid] === nums[mid - 1]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] === nums[mid - 1]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
}

console.log("searchSingleElement: ", searchSingleElement(nums1));
console.log("searchSingleElement: ", searchSingleElement(nums2));
console.log("searchSingleElement: ", searchSingleElement(nums3));
