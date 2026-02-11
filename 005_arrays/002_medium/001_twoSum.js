/*
    Problem Statement: Given an array of integers arr[] and an integer target.

    1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

    2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.
*/

let n = 5, arr = [2, 6, 5, 8, 11], target = 14

let m = 5, brr = [2, 6, 5, 8, 11], target2 = 15

const twoSumExists = (arr, target) => {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (map.has(complement)) {
            return "YES";
        }
        map.set(arr[i], i);
    }
    return "NO";
}

const twoSumIndex = (arr, target) => {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (map.has(complement)) {
            return [i, map.get(complement)];
        }
        map.set(arr[i], i);
    }
    return [-1, -1];
}

console.log("twoSumExists: ", twoSumExists(arr, target));
console.log("twoSumExists: ", twoSumExists(brr, target2));

console.log("twoSumIndex: ", twoSumIndex(arr, target));
console.log("twoSumIndex: ", twoSumIndex(brr, target2));


// Two Sum: With constant space complexity and n log n time complexity

const twoSumConstantSpace = (arr, target) => {
    arr = arr.sort((a, b) => a - b);
    let i = 0; j = arr.length - 1;
    while (i < j) {
        if (arr[i] + arr[j] === target) {
            return "YES";
        } else if (arr[i] + arr[j] > target) {
            j--;
        } else {
            i++;
        }
    }
    return "NO"
}


console.log("twoSumConstantSpace: ", twoSumConstantSpace(arr, target));
console.log("twoSumConstantSpace: ", twoSumConstantSpace(brr, target2));