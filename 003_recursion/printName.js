const printName = (n) => {
    if (n <= 0) {
        return;
    }
    console.log("Tejas");
    return printName(n-1)
}

printName(5)