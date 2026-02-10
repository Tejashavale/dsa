// Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

const x = [1, 2, 1, 4, 2];

const getSingleElement = (arr) => {
    let result = 0;
    for (let ele of arr) {
        result ^= ele;
    }
    return result;
}

console.log("getSingleElement: ", getSingleElement(x));