/*
Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division's result.
Find the smallest divisor such that the result mentioned above is less than or equal to threshold.

Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).

The test cases are generated so that there will be an answer.
*/

let nums1 = [1, 2, 5, 9], threshold1 = 6;
let nums2 = [44, 22, 33, 11, 1], threshold2 = 5;

const smallestDivisorWithinLimit = (nums, threshold) => {
    // Find the maximum number 
    let max = 0;
    for (let num of nums) {
        if (num > max) max = num;
    }

    // Largest divisor can only be max element
    let left = 1, right = max;
    let answer = Infinity;
    while (left <= right) {
        let currentDivisor = Math.floor((left + right) / 2);
        let divisonSum = calculateDivisionSum(nums, currentDivisor);

        if (divisonSum <= threshold) {
            answer = currentDivisor;
            right = currentDivisor - 1;
        } else {
            left = currentDivisor + 1;
        }
    }
    return answer;
}

const calculateDivisionSum = (nums, divisor) => {
    let sum = 0;
    for (let num of nums) {
        sum += Math.ceil(num / divisor);
    }
    return sum;
}

console.log("smallestDivisorWithinLimit: ", smallestDivisorWithinLimit(nums1, threshold1));
console.log("smallestDivisorWithinLimit: ", smallestDivisorWithinLimit(nums2, threshold2));
