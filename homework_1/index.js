// Homework 1 for Solvd IT Academy.
// Long Arithmetic Algorithm.

function CheckForNaN(firstNumber, secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error("The input parameters are not numbers.");
    }
}

// The function takes two numbers as strings and returns their sum as a string.
String.prototype.plus = function (numberToAdd) {

    // Cache the input numbers to more readable variables
    let firstNumber = this;
    let secondNumber = numberToAdd;

    // Do a NaN check in case the input parameters are not numbers
    CheckForNaN(firstNumber, secondNumber);

    // Initialize the result and carry variables
    let result = ""
    let carry = 0;

    // Make sure both numbers have the same number of digits
    while (firstNumber.length < secondNumber.length) {
        firstNumber = "0" + firstNumber;
    }

    while (secondNumber.length < firstNumber.length) {
        secondNumber = "0" + secondNumber;
    }

    // Iterate through each digit of both numbers, starting from the rightmost digit
    for (let digitIndex = firstNumber.length - 1; digitIndex >= 0; digitIndex--) {

        // Get the current digit of each number and add them together
        const digit1 = firstNumber[digitIndex];
        const digit2 = secondNumber[digitIndex];
        const sum = parseInt(digit1) + parseInt(digit2) + carry;

        // If the sum is greater than 10, we need to carry the 1 to the next digit
        carry = Math.floor(sum / 10);

        // Add the current digit to the result
        result = (sum % 10) + result;
    }

    // If there is a final carry, add it to the result
    if (carry) {
        result = carry + result;
    }

    return result;
}

// The function takes two numbers as strings and returns their difference as a string.
String.prototype.minus = function (numberToSubtract) {
    // Cache the input numbers to more readable variables
    let firstNumber = this;
    let secondNumber = numberToSubtract;

    // Do a NaN check in case the input parameters are not numbers
    CheckForNaN(firstNumber, secondNumber);

    // Initialize the result and carry variables
    let result = ""
    let carry = 0;

    // Make sure both numbers have the same number of digits
    while (firstNumber.length < secondNumber.length) {
        firstNumber = "0" + firstNumber;
    }

    while (secondNumber.length < firstNumber.length) {
        secondNumber = "0" + secondNumber;
    }

    // Iterate through each digit of both numbers, starting from the rightmost digit
    for (let digitIndex = firstNumber.length - 1; digitIndex >= 0; digitIndex--) {

        // Get the current digit of each number and subtract them
        const digit1 = firstNumber[digitIndex];
        const digit2 = secondNumber[digitIndex];
        let difference = parseInt(digit1) - parseInt(digit2) - carry;

        // If the difference is less than 0, we need to borrow 1 from the next digit
        if (difference < 0) {
            difference += 10;
            carry = 1;
        } else {
            carry = 0;
        }

        // Add the current digit to the result
        result = difference + result;
    }

    // Remove leading zeros
    while (result[0] === '0') {
        result = result.substring(1);
    }

    return result;
}

String.prototype.divide = function (stringNumber) {
    const result = BigInt(this) / BigInt(stringNumber);
    return result.toString();
}

String.prototype.multiply = function (stringNumber) {
    const result = BigInt(this) * BigInt(stringNumber);
    return result.toString();
}


const divideResult = "100000000000000".divide("9453495394594395");
const multiplyResult = "100000000000000".multiply("9453495394594395");

console.log(`Divide Result: ${divideResult}`);
console.log(`Multiply Result: ${multiplyResult}`);
