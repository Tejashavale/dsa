/*
    Problem Statement: You're given an sorted array arr of n integers and an integer x. 
    Find the floor and ceiling of x in arr[0..n-1]. 
    The floor of x is the largest element in the array which is smaller than or equal to x. 
    The ceiling of x is the smallest element in the array greater than or equal to x.
*/

let nums1 = [3, 4, 4, 7, 8, 10], x1 = 5;
let nums2 = [3, 4, 4, 7, 8, 10], x2 = 8;

const floorCeil = (nums, x) => {
    let floor = -Infinity;
    let ceil = Infinity;
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] == x) {
            floor = x;
            ceil = x;
            break;
        } else if (nums[mid] < x) {
            left = mid + 1;
            floor = nums[mid];
        } else {
            right = mid - 1;
            ceil = nums[mid];
        }
    }
    return [floor, ceil]
}

console.log("floorCeil: ", floorCeil(nums1, x1));
console.log("floorCeil: ", floorCeil(nums2, x2));
