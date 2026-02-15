// Given a valid parentheses string s, return the nesting depth of s. 
// The nesting depth is the maximum number of nested parentheses.

let s1 = "(1+(2*3)+((8)/4))+1";
let s2 = "(1)+((2))+(((3)))";
let s3 = "()(())((()()))";

let maxNestingDepth = (s) => {
    let max = 0;
    let stack = [];
    for (let ch of s) {
        if (ch === "(") {
            stack.push(ch);
            if (stack.length > max) max = stack.length;
        } else if (ch === ")") {
            stack.pop()
        }
    }
    return max;
}

console.log("maxNestingDepth: ", maxNestingDepth(s1));
console.log("maxNestingDepth: ", maxNestingDepth(s2));
console.log("maxNestingDepth: ", maxNestingDepth(s3));
