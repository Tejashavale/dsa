const nums1 = [5, 7, 7, 8, 8, 10], target1 = 8;
const nums2 = [5, 7, 7, 8, 8, 10], target2 = 6;
const nums3 = [], target3 = 0;

const firstLastOccurence = (nums, target) => {
    if (nums.length === 0) return [-1, -1];
    const first = firstOccurence(nums, target);
    const last = first === -1 ? -1 : lastOccurence(nums, target);
    return [first, last];
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

console.log("firstLastOccurence: ", firstLastOccurence(nums1, target1));
console.log("firstLastOccurence: ", firstLastOccurence(nums2, target2));
console.log("firstLastOccurence: ", firstLastOccurence(nums3, target3));