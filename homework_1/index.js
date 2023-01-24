// Homework 1 for Solvd IT Academy.

String.prototype.plus = function (stringNumber) {
    const result = parseInt(this) + parseInt(stringNumber);

    return result.toString();
}

String.prototype.minus = function (stringNumber) {
    const result = parseInt(this) - parseInt(stringNumber);

    return result.toString();
}

String.prototype.divide = function (stringNumber) {
    const result = parseInt(this) / parseInt(stringNumber);

    return result.toString();
}


String.prototype.multiply = function (stringNumber) {
    const result = parseInt(this) * parseInt(stringNumber);

    return result.toString();
}

const plusResult = "123".plus("1");
const minusResult = "123".minus("1");
const divideResult = "100".divide("2");
const multiplyResult = "100".multiply("2");

console.log(`Plus Result: ${plusResult}. The type of the result is ${typeof plusResult}`);
console.log(`Minus Result: ${minusResult}. The type of the result is ${typeof minusResult}`);
console.log(`Divide Result: ${divideResult}. The type of the result is ${typeof divideResult}`);
console.log(`Multiply Result: ${multiplyResult}. The type of the result is ${typeof multiplyResult}`);
