let nums1 = [3, 4, 5, 1, 2];
let nums2 = [4, 5, 6, 7, 0, 1, 2];
let nums3 = [11, 13, 15, 17];
let nums4 = [5, 1, 2, 3, 4];

const rotationCount = (nums) => {
    let left = 0, right = nums.length - 1;
    let min = nums[0];
    let minIndex = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[left] <= nums[mid]) {
            if (nums[left] < min) {
                min = nums[left];
                minIndex = left;
            }
            left = mid + 1;
        } else {
            if (nums[mid] < min) {
                min = nums[mid];
                minIndex = mid;
            }
            right = mid - 1;
        }
    }
    return Math.min(minIndex, nums.length - minIndex);
}

console.log("rotationCount: ", rotationCount(nums1));
console.log("rotationCount: ", rotationCount(nums2));
console.log("rotationCount: ", rotationCount(nums3));
console.log("rotationCount: ", rotationCount(nums4));
