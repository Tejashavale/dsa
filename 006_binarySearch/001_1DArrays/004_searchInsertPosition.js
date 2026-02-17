let nums1 = [1, 3, 5, 6], target1 = 5;
let nums2 = [1, 3, 5, 6], target2 = 0;
let nums3 = [1, 3, 5, 6, 8, 10], target3 = 7;
let nums4 = [1, 2, 4, 6, 7], target4 = 3;

const searchInsertIndex = (nums, target) => {
    let left = 0, right = nums.length-1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid-1;
        }
    }

    return left;
}

console.log("searchInsertIndex: ", searchInsertIndex(nums1, target1));
console.log("searchInsertIndex: ", searchInsertIndex(nums2, target2));
console.log("searchInsertIndex: ", searchInsertIndex(nums3, target3));
console.log("searchInsertIndex: ", searchInsertIndex(nums4, target4));