let x = "welcome to the jungle"
let y = " amazing coding skills "
let z = "a good   example"

const reverseWordsInString = (string) => {
    let stack = [];
    let word = "";
    for (let i of string) {
        if (i === " ") {
            if (word !== "") {
                stack.unshift(word);
                word = "";
            }
            continue;
        } else {
            word += i.toString();
        }
    }
    if (word !== "") stack.unshift(word);
    return stack.join(' ');
}

console.log("reverseWordsInString: ", reverseWordsInString(x));
console.log("reverseWordsInString: ", reverseWordsInString(y));
console.log("reverseWordsInString: ", reverseWordsInString(z));

const reverseWordsInStringOptimal = (string) => {
    let result = "";
    let word = "";
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] === " ") {
            if (word !== "") {
                result = result + word + ' ';
                word = "";
            }
            continue;
        } else {
            word = string[i].toString() + word;
        }
    }
    if (word !== "") result = result + word;
    return result.trim();
}

console.log("reverseWordsInStringOptimal: ", reverseWordsInStringOptimal(x));
console.log("reverseWordsInStringOptimal: ", reverseWordsInStringOptimal(y));
console.log("reverseWordsInStringOptimal: ", reverseWordsInStringOptimal(z));