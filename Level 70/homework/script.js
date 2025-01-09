//1) შექმენით ფუნქცია რომელიც აბრუნებს 2დ მასივს (ზრდადი რიცხვების) სვეტების დს რიგების მიხედვით, მაგ: func(2,2) --> [ [1,2], [3,4] ]

function generateMatrix(rows, cols) {
    const matrix = [];
    let num = 1;
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(num);
            num++;
        }
        matrix.push(row);
    }
    return matrix;
}


const result = generateMatrix(2, 2);
console.log(result); 


//2) შექმენით ფუნქცია რომელსაც გადაეცემა nxn მატრიცა და დაპრინტავს მის 1) სვეტებს, 2) რიგებს, 3) დიაგონალებს.



function printMatrixDetails(matrix) {
    const n = matrix.length;

    // 1) სვეტები
    console.log("სვეტები:");
    for (let col = 0; col < n; col++) {
        const column = [];
        for (let row = 0; row < n; row++) {
            column.push(matrix[row][col]);
        }
        console.log(`სვეტი ${col + 1}:`, column);
    }

    // 2) რიგები
    console.log("\nრიგები:");
    for (let i = 0; i < n; i++) {
        console.log(`რიგი ${i + 1}:`, matrix[i]);
    }

    // 3) დიაგონალები
    console.log("\nდიაგონალები:");
    const mainDiagonal = [];
    const antiDiagonal = [];
    for (let i = 0; i < n; i++) {
        mainDiagonal.push(matrix[i][i]);
        antiDiagonal.push(matrix[i][n - i - 1]);
    }
    console.log("მთავარი დიაგონალი:", mainDiagonal);
    console.log("მეორეხარისხოვანი დიაგონალი:", antiDiagonal);
}


const matrix = generateMatrix(3, 3);
console.log(matrix);


printMatrixDetails(matrix);
