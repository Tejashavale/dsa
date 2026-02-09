let x = [1, 1, 0, 1, 1, 1];
let y = [1, 0, 1, 1, 0, 1];

const maxConsecutiveOnes = (arr) => {
    let count = 0;
    let max = 0;
    for (let item of arr) {
        if (item === 1) {
            count++;
            max = Math.max(count, max);
        }
        else count = 0;
    }
    return max;
}

console.log("max Consecutive Ones: ", maxConsecutiveOnes(x));
console.log("max Consecutive Ones: ", maxConsecutiveOnes(y));
