const x = [1, 0, 2, 3, 0, 4, 0, 1];

// Use two pointers. Increment one pointer for every iteration and keep the other on 0 and increment when swapped.
const moveZeroToEnd = (arr) => {
    let j = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            j = i;
            break;
        }
    }
    if (j === -1) { return arr; }

    for (let i = j + 1; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
    return arr;
}

console.log("moveZeroToEnd: ", moveZeroToEnd(x));