let matrix1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
let matrix2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];

const setMatrixZeroes = (arr) => {
    let matrix = JSON.parse(JSON.stringify(arr));
    let zeroRow = new Set();
    let zeroColumn = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroRow.add(i);
                zeroColumn.add(j);
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (zeroRow.has(i) || zeroColumn.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

console.log("setMatrixZeroes: ", setMatrixZeroes(matrix1));
console.log("setMatrixZeroes: ", setMatrixZeroes(matrix2));

const setMatrixZeroesOptimal = (matrix) => {
    let isFirstRowZero = false;
    let isFirstColumnZero = false;

    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            isFirstRowZero = true;
            break;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            isFirstColumnZero = true;
            break;
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (isFirstRowZero) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0;
        }
    }

    if (isFirstColumnZero) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

console.log("setMatrixZeroesOptimal: ", setMatrixZeroesOptimal(matrix1));
console.log("setMatrixZeroesOptimal: ", setMatrixZeroesOptimal(matrix2));
