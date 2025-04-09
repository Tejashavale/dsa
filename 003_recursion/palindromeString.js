const palindromeString = (str, start) => {
    if (start > Math.floor(str.length / 2)) return true;
    if (str[start] !== str[str.length - start - 1]) return false;
    return palindromeString(str, start + 1)
}

let str = "ThisihT"
console.log("Is string palindrome: ", palindromeString(str, 0))