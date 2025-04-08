const factorial = (n, fact) => {
    if (n === 0) return fact;
    fact = fact * n;
    return factorial(n - 1, fact);
}

console.log("Factorial is: ", factorial(5, 1))