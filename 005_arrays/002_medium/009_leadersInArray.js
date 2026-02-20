// Problem Statement: An element is leader element if it is greater than all the elements to its right.
// Rightmost element is always a leader.
// Input: arr = [10, 22, 12, 3, 0, 6]  
// Output: 22 12 6  

let arr1 = [4, 7, 1, 0];
let arr2 = [10, 22, 12, 3, 0, 6];

const leadersInArray = (nums) => {
    let output = [nums[nums.length - 1]];
    let max = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] > max) {
            output.push(nums[i]);
            max = nums[i];
        }
    }
    return output.reverse();
}

console.log("leadersInArray: ", leadersInArray(arr1));
console.log("leadersInArray: ", leadersInArray(arr2));