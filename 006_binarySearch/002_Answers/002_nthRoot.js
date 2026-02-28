let n1 = 36, k1 = 2;
let n2 = 27, k2 = 3;
let n3 = 28, k3 = 3;
let n4 = 625, k4 = 4;

const nthRoot = (n, k) => {
    if (n < 2) return n;

    let left = 1, right = n;
    let ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let power = 1;
        for (let i = 0; i < k; i++) {
            power *= mid;
            if (power > n) break;
        }

        if (power <= n) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
}

console.log("nthRoot: ", nthRoot(n1, k1));
console.log("nthRoot: ", nthRoot(n2, k2));
console.log("nthRoot: ", nthRoot(n3, k3));
console.log("nthRoot: ", nthRoot(n4, k4));