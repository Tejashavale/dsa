const find_gcd_brute = (num1, num2) => {
    let gcd = 1;
    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

const find_gcd = (num1, num2) => {
    /* 
        Uses Eucledian principle which states that the GCD remains same,
        even if the smaller number is subtracted from larger number.
    */
    while (num1 !== 0 && num2 !== 0) {
        if (num1 > num2) {
            num1 = num1 - num2;
        } else {
            num2 = num2 - num1;
        }
    }
    return Math.max(num1, num2);
}

console.log("GCD is: ", find_gcd(123, 5250))