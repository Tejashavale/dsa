const reverseNumber = (n) => {
    n = Math.abs(n)
    let reverse = 0
    while (n != 0) {
        reverse = (reverse * 10 )+ (n % 10);
        n = Math.floor(n / 10)
    }
    return reverse;
}

console.log(reverseNumber(1))