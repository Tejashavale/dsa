const divisors = (n) => {
    let divisorsList = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisorsList.push(i);
            divisorsList.push(n/i);
        }
    }
    return divisorsList;
}

console.log("Divisors: ", divisors(10))