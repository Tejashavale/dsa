// Problem Statement: Given an N * N 2D integer matrix, rotate the matrix by 90 degrees clockwise. 
// The rotation must be done in place, meaning the input 2D matrix must be modified directly.

let matrix1 = [[0, 1, 1, 2], [2, 0, 3, 1], [4, 5, 0, 5], [5, 6, 7, 0]];
let matrix2 = [[5, 4, 2, 0], [6, 5, 0, 1], [7, 0, 3, 1], [0, 5, 1, 2]];

const rotateMatrixBy90 = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let arr of matrix) {
        arr.reverse();
    }
    return matrix;
}

console.log("rotateMatrixBy90: ", rotateMatrixBy90(matrix1));
console.log("rotateMatrixBy90: ", rotateMatrixBy90(matrix2));
console.log("rotateMatrixBy90: ", rotateMatrixBy90([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));