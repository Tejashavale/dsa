// Compare each element with its next element and swap. Run the loop until there are no swaps.

const bubbleSort = (arr) => {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    }
    return arr;
}

console.log("Bubble sort: ", bubbleSort([5, 32, 1, 42, 66]))