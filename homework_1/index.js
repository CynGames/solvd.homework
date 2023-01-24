// Homework 1 for Solvd IT Academy.

String.prototype.plus = function (stringNumber) {
    const result = BigInt(this) + BigInt(stringNumber);
    return result.toString();
}

String.prototype.minus = function (stringNumber) {
    const result = BigInt(this) - BigInt(stringNumber);
    return result.toString();
}

String.prototype.divide = function (stringNumber) {
    const result = BigInt(this) / BigInt(stringNumber);
    return result.toString();
}

String.prototype.multiply = function (stringNumber) {
    const result = BigInt(this) * BigInt(stringNumber);
    return result.toString();
}


const plusResult = "100000000000000".plus("9453495394594395");
const minusResult = "100000000000000".minus("9453495394594395");
const divideResult = "100000000000000".divide("9453495394594395");
const multiplyResult = "100000000000000".multiply("9453495394594395");

console.log(`Plus Result: ${plusResult}. The type of the result is ${typeof plusResult}`);
console.log(`Minus Result: ${minusResult}. The type of the result is ${typeof minusResult}`);
console.log(`Divide Result: ${divideResult}. The type of the result is ${typeof divideResult}`);
console.log(`Multiply Result: ${multiplyResult}. The type of the result is ${typeof multiplyResult}`);
