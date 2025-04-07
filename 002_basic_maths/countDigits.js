const countDigits = (n) => {
    n = Math.abs(n);
    if (n === 0) return 1;
    length = 0;
    while (n > 0) {
        length++;
        n = Math.floor(n / 10);
    }
    return length;
}

console.log("No of digits: ", countDigits(-1231))