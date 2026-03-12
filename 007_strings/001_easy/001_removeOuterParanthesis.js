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

const removeOuterParanthesis2 = (s) => {
    let output = "";
    let counter = 0;

    for (let char of s) {
        if (char === "(") {
            if (counter > 0) output += char;
            counter++;
        } else if (char === ")") {
            counter--;
            if (counter > 0) output += char;
        }
    }
    return output;
}

console.log(`removeOuterParanthesis2 of ${s1}: `, removeOuterParanthesis2(s1));
console.log(`removeOuterParanthesis2 of ${s2}: `, removeOuterParanthesis2(s2));
console.log(`removeOuterParanthesis2 of ${s3}: `, removeOuterParanthesis2(s3));
