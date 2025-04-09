const reverseArray = (start, end, arr) => {
    if (start >= end) return arr;
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    return reverseArray(start + 1, end - 1, arr);
}

console.log("Reverse array: ", reverseArray(0, 5, [1, 2, 3, 4, 5, 6]));