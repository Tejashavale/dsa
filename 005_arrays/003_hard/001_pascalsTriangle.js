const pascalsTriangle = (n) => {
    let i = 0;
    let output = [];
    while (i < n) {
        let row = new Array(i + 1);
        for (let j = 0; j < row.length; j++) {
            if (j === 0 || j === row.length - 1) row[j] = 1;
            else {
                row[j] = output[i - 1][j - 1] + output[i - 1][j];
            }
        }
        output.push(row);
        i++;
    }
    return output;
}

console.log("pascalsTriangle: ", pascalsTriangle(5));
console.log("pascalsTriangle: ", pascalsTriangle(15));