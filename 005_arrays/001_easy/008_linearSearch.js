let x = [1, 2, 3, 4, 5, 6];

const linearSearch = (arr, num) => {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

console.log("Linear Search: ", linearSearch(x, 3))
console.log("Linear Search: ", linearSearch(x, 8))