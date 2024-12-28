function filterEvenNumbers(matrix) {
    return matrix.map(row => row.filter(num => num % 2 === 0));
}

// გამოყენების მაგალითი
const numbers = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);
// შედეგი: [ [ 2, 4 ], [ 6, 8 ], [ 10, 12 ] ]
