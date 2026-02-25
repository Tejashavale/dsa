const nums1 = [2, 2, 3, 3, 3, 3, 4], target1 = 3;
const nums2 = [1, 1, 2, 2, 2, 2, 2, 3], target2 = 2;
const nums3 = [], target3 = 0;

const countOccurences = (nums, target) => {
    if (nums.length === 0) return 0;
    const first = firstOccurence(nums, target);
    if (first === -1) return 0;
    const last = lastOccurence(nums, target);
    return last - first + 1;
}

const firstOccurence = (nums, target) => {
    let left = 0, right = nums.length - 1;
    let first = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] >= target) {
            if (nums[mid] === target) first = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return first;
}

const lastOccurence = (nums, target) => {
    let left = 0, right = nums.length - 1;
    let last = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] <= target) {
            if (nums[mid] === target) last = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return last;
}

console.log("countOccurences: ", countOccurences(nums1, target1));
console.log("countOccurences: ", countOccurences(nums2, target2));
console.log("countOccurences: ", countOccurences(nums3, target3));