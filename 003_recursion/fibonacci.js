const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const printFibonacciSeries = (n) => {
    let fib = [];
    for (let i = 0; i < n; i++) {
        fib.push(fibonacci(i));
    }
    return fib;
}

console.log("Fib: ", printFibonacciSeries(10));