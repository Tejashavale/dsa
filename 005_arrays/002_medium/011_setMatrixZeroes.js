let matrix1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
let matrix2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];

const setMatrixZeroes = (matrix) => {
    let zeroRow = new Set();
    let zeroColumn = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroRow.add(i);
                zeroColumn.add(j);
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if (zeroRow.has(i) || zeroColumn.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

console.log("setMatrixZeroes: ", setMatrixZeroes(matrix1));
console.log("setMatrixZeroes: ", setMatrixZeroes(matrix2));