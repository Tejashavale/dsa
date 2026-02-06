let x = [1, 2, 3, 4, 5, 6];

const leftShiftArray = (arr, k) => {
    k = k % arr.length;
    if (k === 0) return arr;
    reverseArray(arr, 0, k-1);
    reverseArray(arr, k, arr.length - 1);
    reverseArray(arr, 0, arr.length - 1);
    return arr;
}

const reverseArray = (arr, left, right) => {
    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

console.log("Left shift array by 1: ", leftShiftArray(x, 2));