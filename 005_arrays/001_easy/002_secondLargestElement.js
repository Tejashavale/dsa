let x = [212, 124, 234, 2, 21214, 123]
let y = [3, 5, 4]
let z = [1, 1, 2, 2, 3, 3]

const secondLargestElement = (arr) => {
    let max = null;
    let secondMax = null;
    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num >= secondMax) {
            secondMax = num;
        }
    }
    return secondMax;
}

const secondLargestDistinctElement = (arr) => {
    let max = null;
    let secondMax = null;
    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }
    return secondMax;
}

console.log('secondMax: ', secondLargestElement(x))
console.log('secondMax: ', secondLargestElement(y))
console.log('secondMax: ', secondLargestElement(z))

console.log('secondMax distinct: ', secondLargestDistinctElement(x))
console.log('secondMax distinct: ', secondLargestDistinctElement(y))
console.log('secondMax distinct: ', secondLargestDistinctElement(z))