// Problem Statement: Write a function to find the longest common prefix string amongst an array of strings. 
// If there is no common prefix, return an empty string "".

let str1 = ["flower", "flow", "flight"];
let str2 = ["apple", "banana", "grape", "mango"];

const longestCommonPrefix = (arr) => {
    let commonPrefix = "";
    for (let i = 0; i < arr[0]?.length; i++) {
        let ch = arr[0][i];
        for (let str of arr) {
            if (ch !== str[i]) return commonPrefix;
        }
        commonPrefix += ch;
    }
    return commonPrefix;
}

console.log("longestCommonPrefix: ", longestCommonPrefix(str1));
console.log("longestCommonPrefix: ", longestCommonPrefix(str2));