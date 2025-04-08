const printNSum = (n, sum) => {
    if (n === 0) return sum;
    sum = sum + n;
    return printNSum(n - 1, sum);
}

console.log("Sum is: ", printNSum(10, 0));