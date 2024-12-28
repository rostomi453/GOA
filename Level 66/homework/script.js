function getUniqueElements(array) {
    const elementCounts = array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
    }, {});

    return array.filter(item => elementCounts[item] === 1);
}

// მაგალითი გამოყენებისათვის
const inputArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueElements = getUniqueElements(inputArray);
console.log(uniqueElements); // შედეგი: [1, 3, 5]
