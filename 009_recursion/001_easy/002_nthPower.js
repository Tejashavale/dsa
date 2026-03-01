const nthPower = (x, n) => {
    if (n == 0) return 1;
    return x * nthPower(x, n - 1);
}

console.log("nthPower: ", nthPower(5, 2));
console.log("nthPower: ", nthPower(3, 3));