let s1 = "III"
let s2 = "LVIII"
let s3 = "MCMXCIV"

const romanToInt = (str) => {
    let romanMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    let result = 0;
    for (let i = 0; i < str.length - 1; i++) {
        if (romanMap[str[i]] < romanMap[str[i + 1]]) {
            result -= romanMap[str[i]];
        }
        else {
            result += romanMap[str[i]];
        }
    }
    result += romanMap[str[str.length - 1]];
    return result;
}

console.log("romanToInt: ", romanToInt(s1));
console.log("romanToInt: ", romanToInt(s2));
console.log("romanToInt: ", romanToInt(s3));
