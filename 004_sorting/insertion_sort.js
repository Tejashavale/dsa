// Iterate through the array. Place the element at its position on the left side of that element.

const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j--;
        }
    }
    return arr;
}

console.log("Insertion sort: ", insertionSort([5, 32, 1, 42, 66]))