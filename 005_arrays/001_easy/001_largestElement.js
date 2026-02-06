let x = [212, 124, 234, 2, 21214, 123]

const getLargestElement = (arr) => {
    let max = -Infinity

    for (let num of arr) {
        if (num > max) max = num;
    }
    return max
}

console.log('Largest num: ', getLargestElement(x))