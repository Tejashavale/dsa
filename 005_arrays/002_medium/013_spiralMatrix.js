// Given an m x n matrix, return all elements of the matrix in spiral order.
// matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

let matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

const spiralMatrix = (matrix) => {
    let totalElements = matrix.length * matrix[0].length;
    let output = new Array();
    let nextDirection = {
        "right": "down",
        "down": "left",
        "left": "up",
        "up": "right"
    }
    let direction = 'right';
    let m = matrix.length, n = matrix[0].length;
    let rowLimit = [0, m - 1], columnLimit = [0, n - 1];
    let i = 0, j = 0;

    while (totalElements--) {
        output.push(matrix[i][j]);
        if (direction === "right") {
            if (j === columnLimit[1]) {
                direction = nextDirection[direction];
                rowLimit[0] = rowLimit[0] + 1;
                i++;
            } else {
                j++;
            }
        } else if (direction === 'down') {
            if (i === rowLimit[1]) {
                direction = nextDirection[direction];
                columnLimit[1] = columnLimit[1] - 1;
                j--;
            } else {
                i++;
            }
        } else if (direction === "left") {
            if (j === columnLimit[0]) {
                direction = nextDirection[direction];
                rowLimit[1] = rowLimit[1] - 1;
                i--;
            } else {
                j--;
            }
        } else if (direction === 'up') {
            if (i === rowLimit[0]) {
                direction = nextDirection[direction];
                columnLimit[0] = columnLimit[0] + 1;
                j++;
            } else {
                i--;
            }
        }
    }
    return output;
}

console.log("spiralMatrix: ", spiralMatrix(matrix1));
console.log("spiralMatrix: ", spiralMatrix(matrix2));