let x = [1, 1, 2, 2, 3, 3, 4, 4, 5]

const removeDuplicateNumbers = (arr) => {
    let i = 0;
    let j = 0;
    while (i < arr.length) {
        if (arr[i] === arr[j]) i++;
        else {
            j++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    return arr;
}

console.log("removeDuplicateElements: ", removeDuplicateNumbers(x));