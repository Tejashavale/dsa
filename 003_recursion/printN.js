const printN = (i, n) => {
    if (i>n) return;
    console.log(i)
    return printN(i+1, n)
}

printN(1, 5)