let x = [1, 3, 5, 7];
let y = [2, 3, 3, 6, 8, 9, 10];

// My logic
const unionSortedArrays = (arr, brr) => {
    let i = 0;
    let j = 0;
    let result = [];
    let lastElement = null;
    while (i < arr.length || j < brr.length) {
        if (i < arr.length && j < brr.length) {
            if (arr[i] < brr[j]) {
                if (lastElement !== arr[i]) {
                    result.push(arr[i]);
                    lastElement = arr[i];
                }
                i++;
            } else if (brr[j] < arr[i]) {
                if (lastElement !== brr[j]) {
                    result.push(brr[j]);
                    lastElement = brr[j];
                }
                j++;
            } else if (arr[i] === brr[j]) {
                if (lastElement !== arr[i]) {
                    result.push(arr[i]);
                    lastElement = arr[i];
                }
                i++;
                j++;
            }
        } else if (i >= arr.length && j < brr.length) {
            if (lastElement !== brr[j]) {
                result.push(brr[j]);
                lastElement = brr[j];
            }
            j++;
        } else if (j >= brr.length && i < arr.length) {
            if (lastElement !== arr[i]) {
                result.push(arr[i]);
                lastElement = arr[i];
            }
            i++;
        }
    }
    return result;
}

// Cleaner code
const unionSortedArrays2 = (arr, brr, n, m) => {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < n && j < m) {
        if (arr[i] < brr[j]) {
            if (result.length === 0 || result[result.length - 1] !== arr[i]) {
                result.push(arr[i]);
            }
            i++;
        } else if (brr[j] < arr[i]) {
            if (result.length === 0 || result[result.length - 1] !== brr[j]) {
                result.push(brr[j]);
                lastElement = brr[j];
            }
            j++;
        } else if (arr[i] === brr[j]) {
            if (result.length === 0 || result[result.length - 1] !== arr[i]) {
                result.push(arr[i]);
                lastElement = arr[i];
            }
            i++;
            j++;
        }
    }
    while (i < n) {
        if (result.length === 0 || result[result.length - 1] !== arr[i]) {
            result.push(arr[i]);
            lastElement = arr[i];
        }
        i++;
    }
    while (j < m) {
        if (result.length === 0 || result[result.length - 1] !== brr[j]) {
            result.push(brr[j]);
            lastElement = brr[j];
        }
        j++;
    }

    return result;
}

console.log("unionSortedArrays: ", unionSortedArrays(x, y));
console.log("unionSortedArrays2: ", unionSortedArrays2(x, y, x.length, y.length));