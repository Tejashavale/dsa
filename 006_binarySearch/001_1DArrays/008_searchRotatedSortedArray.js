/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
*/

let nums1 = [4, 5, 6, 7, 0, 1, 2], target1 = 0;
let nums2 = [4, 5, 6, 7, 0, 1, 2], target2 = 3;

let nums3 = [1], target3 = 0;

const searchRotatedSortedArray = (nums, target) => {
    // let left = 0, right = nums.length - 1;
    // while (left <= right) {
    //     let mid = Math.floor((left + right) / 2);
    //     if (nums[mid] === target) return mid;
    //     if (nums[left] <= nums[mid]) {
    //         if (nums[left] <= target && target < nums[mid]) {
    //             right = mid - 1;
    //         } else {
    //             left = mid + 1;
    //         }
    //     } else {
    //         if (nums[mid] < target && target <= nums[right]) {
    //             left = mid + 1;
    //         } else {
    //             right = mid - 1;
    //         }
    //     }
    // }

    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[left] === target) return left;
        else if (nums[right] === target) return right;
        if (nums[mid] > nums[left]) {
            if (nums[left] < target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target < nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

console.log("searchRotatedSortedArray: ", searchRotatedSortedArray(nums1, target1));
console.log("searchRotatedSortedArray: ", searchRotatedSortedArray(nums2, target2));
console.log("searchRotatedSortedArray: ", searchRotatedSortedArray(nums3, target3));
