// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax.

const addTwo = (num1,num2) => {
    return num1 * num2;
}

console.log("ans is : ", addTwo(2, 4));

// If the function has only one statement, and the statement returns a value.
// you can remove the brackets and the return keyword.

const sumThree = (num1, num2, num3) => num1 + num2 + num3;
console.log("Sum of Three Number is : ", sumThree(2, 3, 4));

const sumTwo = (num1, num2) => (num1 + num2)
console.log("Sum of two Number is : ", sumTwo(3, 5));