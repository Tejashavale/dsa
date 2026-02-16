let nums1 = [-1, 0, 3, 5, 9, 12], target1 = 9;
let nums2 = [-1, 0, 3, 5, 9, 12], target2 = 2;
let nums3 = [2], target3 = 2;

const searchXRecursive = (nums, target, left, right) => {
    let ind = Math.floor((left + right) / 2);
    if (left > right) return -1;
    if (nums[ind] === target) { return ind; }
    else if (nums[ind] < target) {
        return searchXRecursive(nums, target, ind + 1, right);
    } else {
        return searchXRecursive(nums, target, left, ind - 1);
    }
}

const searchX = (nums, target) => {
    return searchXRecursive(nums, target, 0, nums.length - 1);
}

console.log("searchX: ", searchX(nums1, target1));
console.log("searchX: ", searchX(nums2, target2));
console.log("searchX: ", searchX(nums3, target3));


const searchXIterative = (nums, target) => {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let index = Math.floor((left + right) / 2);
        if (nums[index] === target) return index;
        if (nums[index] < target) {
            left = index + 1;
        } else {
            right = index - 1;
        }
    }
    return -1
}
console.log("searchXIterative: ", searchXIterative(nums1, target1));
console.log("searchXIterative: ", searchXIterative(nums2, target2));
console.log("searchXIterative: ", searchXIterative(nums3, target3));