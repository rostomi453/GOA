function checkNumbers(num1, num2) {

    if (num1 % 2 !== 0 && num1 > num2) {
        return true;
    }
    
    if (num2 % 2 === 0) {
        return true;
    }
    return false;
}

// მაგალითი:
console.log(checkNumbers(7, 4)); // True
console.log(checkNumbers(6, 4)); // True
console.log(checkNumbers(5, 10)); // True
console.log(checkNumbers(4, 5)); // False
