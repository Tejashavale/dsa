let x = [1, 2, 3, 4, 5, 6, 8];
let n = 8;

const missingElement = (arr, n) => {
    let sumNatural = n * (n + 1) / 2;
    let arraySum = 0;
    for (let ele of arr) {
        arraySum += ele;
    }
    return sumNatural - arraySum;
}

const missingElementXor = (arr, n) => {
    let xorAll = 0;
    let xorArr = 0;

    for (let i = 0; i < n - 1; i++) {
        xorArr ^= arr[i];
        xorAll ^= (i + 1);
    }
    xorAll ^= n;
    return xorAll ^ xorArr;
}

console.log("Missing number: ", missingElement(x, 8))
console.log("Missing number xor: ", missingElementXor(x, 8))