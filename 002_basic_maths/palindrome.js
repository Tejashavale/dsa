const palindrome = (n) => {
    n = Math.abs(n);
    let digits = n.toString().split('');
    for (let i = 0, j = digits.length - 1; i < j; i++, j--) {
        if (digits[i] !== digits[j]) {
            return false
        }
    }
    return true
}

console.log("Is a palindrome: ", palindrome(1))