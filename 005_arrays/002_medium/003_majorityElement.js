/*
Problem Statement: Given an integer array nums of size n, return the majority element of the array.
The majority element of an array is an element that appears more than n/2 times in the array. The array is guaranteed to have a majority element.
*/

let x = [7, 0, 0, 1, 7, 7, 2, 7, 7];
let y = [1, 1, 1, 2, 1, 2];

const majorityElement = (nums) => {
    let majority;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
            count++;
        }
        else {
            nums[i] === majority ? count++ : count--;
        }
    }
    return majority;
}

console.log("Majority element: ", majorityElement(x))
console.log("Majority element: ", majorityElement(y))