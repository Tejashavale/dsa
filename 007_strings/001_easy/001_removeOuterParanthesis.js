let s1 = "(()())(())";
let s2 = "(()())(())(()(()))";
let s3 = "()()";

const removeOuterParanthesis = (s) => {
    let output = "";
    let stack = [];
    let substring = "";
    for (let char of s) {
        if (char === "(") {
            if (stack.length) substring += char;
            stack.push(char);
        } else if (char === ")") {
            stack.pop();
            if (stack.length) {
                substring += char;
                output += substring;
                substring = "";
            }
        }
    }
    return output;
}

console.log(`removeOuterParanthesis of ${s1}: `, removeOuterParanthesis(s1));
console.log(`removeOuterParanthesis of ${s2}: `, removeOuterParanthesis(s2));
console.log(`removeOuterParanthesis of ${s3}: `, removeOuterParanthesis(s3));