// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
// For example, if s = "abcde", then it will be "bcdea" after one shift.
let s = "abcde", goal = "bcdea";
let s2 = "hello", goal2 = "lohelx";


const rotateString = (s, goal) => {
    if (s.length !== goal.length) return false;
    let testString = s + s;
    if (testString.includes(goal)) return true;
    return false;
}

console.log("rotateString: ", rotateString(s, goal))
console.log("rotateString: ", rotateString(s2, goal2))