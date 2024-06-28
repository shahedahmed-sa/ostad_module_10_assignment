//Module -10: Assignment
//Kazi Shahed Ahmed 


// Function 1: calculateSum
function calculateSum(a, b) {
    return a + b;
}

// Function 2: isEven
function isEven(number) {
    return number % 2 === 0;
}

// Function 3: findMax
function findMax(array) {
    return Math.max(...array);
}

// Function 4: reverseString
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function 5: filterOddNumbers
function filterOddNumbers(array) {
    return array.filter(number => number % 2 !== 0);
}

// Function 6: sumArray
function sumArray(array) {
    return array.reduce((sum, number) => sum + number, 0);
}

// Function 7: sortArray
function sortArray(array) {
    return array.slice().sort((a, b) => a - b);
}

// Function 8: capitalizeFirstLetter
function capitalizeFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//Examples

console.log(calculateSum(3, 4)); //task-1
console.log(isEven(4)); //task-2
console.log(findMax([1, 2, 3, 4, 5])); //task-3
console.log(reverseString("hello")); //task-4
console.log(filterOddNumbers([1, 2, 3, 4, 5])); //task-5
console.log(sumArray([1, 2, 3, 4, 5])); //task-6
console.log(sortArray([5, 3, 8, 1, 2])); //task-7
console.log(capitalizeFirstLetter("hello")); //task-8
