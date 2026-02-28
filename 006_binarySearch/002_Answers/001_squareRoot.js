let n1 = 36;
let n2 = 40;
let n3 = 28;

const squareRoot = (n) => {
    if (n < 2) return n;

    let left = 1, right = Math.floor(n / 2);
    let ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = Math.round(mid * mid);
        if (square <= n) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
}

console.log("squareRoot: ", squareRoot(n1));
console.log("squareRoot: ", squareRoot(n2));
console.log("squareRoot: ", squareRoot(n3));