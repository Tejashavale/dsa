/*
    An Amrstrong number is a number that is equal to the sum of 
    its own digits each raised to the power of the number of digits. 
*/

const armstrong = (n) => {
    let digits = Math.abs(n).toString().split("");
    let result = 0;
    for (let digit of digits) {
        result += parseInt(digit) ** digits.length;
    }
    return result === n;
}

console.log("Is armstrong number: ", armstrong(531))