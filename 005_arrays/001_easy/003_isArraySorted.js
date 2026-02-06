let x = [212, 124, 234, 2, 21214, 123]
let y = [2, 123, 234, 21214]

const isArraySorted = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}

console.log("isArraySorted: ", isArraySorted(x));
console.log("isArraySorted: ", isArraySorted(y));