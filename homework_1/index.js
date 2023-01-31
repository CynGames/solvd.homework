// Homework 1 for Solvd IT Academy.
// Long Arithmetic Algorithm.

// The function takes two numbers as strings and returns their sum as a string.
String.prototype.plus = function (numberToAdd) {

    // Cache and initialize input numbers to more readable variables
    let {firstNumber, secondNumber, result, carry} = InitializeVariables(this, numberToAdd, "");

    // Do a NaN check in case the input parameters are not numbers
    CheckForNaN(firstNumber, secondNumber);

    // Make sure both numbers have the same number of digits
    ({firstNumber, secondNumber} = EqualizeNumberOfDigits(firstNumber, secondNumber));

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
};

// The function takes two numbers as strings and returns their difference as a string.
String.prototype.minus = function (numberToSubtract) {

    // Cache and initialize input numbers to more readable variables
    let {firstNumber, secondNumber, result, carry} = InitializeVariables(this, numberToSubtract, "");

    // Do a NaN check in case the input parameters are not numbers
    CheckForNaN(firstNumber, secondNumber);

    // Make sure both numbers have the same number of digits
    ({firstNumber, secondNumber} = EqualizeNumberOfDigits(firstNumber, secondNumber));

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
    result = TrimLeadingZeroes(result);

    return result;
};

// The function takes two numbers as strings and returns their product as a string.
String.prototype.multiply = function (numberToMultiply) {

    // Initialize the result and carry variables.
    // It is ensured that the result array will have enough space to store the maximum possible number of digits.
    let {firstNumber, secondNumber, result, carry} = InitializeVariables(
        this, numberToMultiply, Array(this.length + numberToMultiply.length).fill(0)
    );

    // Do a NaN check in case the input parameters are not numbers
    CheckForNaN(firstNumber, secondNumber);

    // Iterate through each digit of both numbers, starting from the rightmost digit
    for (let i = firstNumber.length - 1; i >= 0; i--) {
        for (let j = secondNumber.length - 1; j >= 0; j--) {
            let product = result[i + j + 1] + (firstNumber[i] - '0') * (secondNumber[j] - '0');
            carry = Math.floor(product / 10);
            result[i + j + 1] = product % 10;
            result[i + j] += carry;
        }
    }

    // Remove leading zeros from the result
    while (result.length > 1 && result[0] === 0) {
        result.shift();
    }

    // Convert the result array to a string
    result = result.join('');

    return result;
};

String.prototype.divide = function (numberToDivideBy) {
    let dividend = this.toString();
    let divisor = numberToDivideBy.toString();

    CheckForNaN(dividend, divisor);

    if (divisor === "0") {
        return "Zero division error";
    }

    // Convert the dividend and divisor to floating-point numbers
    dividend = parseFloat(dividend);
    divisor = parseFloat(divisor);

    // Perform the division and return the result as a string
    return (dividend / divisor).toString();
}


function CheckForNaN(firstNumber, secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error("The input parameters are not numbers.");
    }
}

function InitializeVariables(firstNumber, secondNumber, result, carry = 0) {
    return {firstNumber, secondNumber, result, carry};
}

function EqualizeNumberOfDigits(firstNumber, secondNumber) {
    while (firstNumber.length < secondNumber.length) {
        firstNumber = "0" + firstNumber;
    }

    while (secondNumber.length < firstNumber.length) {
        secondNumber = "0" + secondNumber;
    }

    return {firstNumber, secondNumber};
}

function TrimLeadingZeroes(result) {
    while (result[0] === '0') {
        result = result.substring(1);
    }

    return result;
}
