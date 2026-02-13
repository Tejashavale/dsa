// Problem Statement: Given a string s, representing a large integer, the task is to return the largest-valued odd integer (as a string) that is a substring of the given string s.
// The number returned should not have leading zero's. But the given input string may have leading zero.

const x = "5";
const y = "52";
const z = "35427";

const largestOddNumber = (num) => {
    let lastIndex = -1;
    let firstIndex = -1;
    for (let i = num.length - 1; i >= 0; i--) {
        if (parseInt(num[i]) % 2 === 1) {
            lastIndex = i;
            break;
        }
    }
    if (lastIndex === -1) return "";
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== 0) {
            firstIndex = i;
            break;
        }
    }
    return num.substring(firstIndex, lastIndex + 1);
};

console.log("largestOddNumber: ", largestOddNumber(x));
console.log("largestOddNumber: ", largestOddNumber(y));
console.log("largestOddNumber: ", largestOddNumber(z));