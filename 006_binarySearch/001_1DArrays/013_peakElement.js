let nums1 = [1, 2, 3, 1];
let nums2 = [1, 2, 1, 3, 5, 6, 4];
let nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];

const peakElement = (nums) => {
    let n = nums.length;
    if (n === 1) return 0;
    if (nums[0] > nums[1]) return 0;
    else if (nums[n - 1] > nums[n - 2]) return n - 1;

    let left = 1, right = n - 2;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
        if (nums[mid - 1] > nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
}

console.log("peakElement: ", peakElement(nums1));
console.log("peakElement: ", peakElement(nums2));
console.log("peakElement: ", peakElement(nums3));
