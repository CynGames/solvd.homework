// Homework 1 for Solvd IT Academy.

String.prototype.Plus = function (stringNumber) {
    const result = parseInt(this) + parseInt(stringNumber);

    return result.toString();
}

String.prototype.Minus = function (stringNumber) {
    const result = parseInt(this) - parseInt(stringNumber);

    return result.toString();
}

String.prototype.Divide = function (stringNumber) {
    const result = parseInt(this) / parseInt(stringNumber);

    return result.toString();
}


String.prototype.Multiply = function (stringNumber) {
    const result = parseInt(this) * parseInt(stringNumber);

    return result.toString();
}

const plusResult = "123".Plus("1");
const minusResult = "123".Minus("1");
const divideResult = "100".Divide("2");
const multiplyResult = "100".Multiply("2");

console.log(`Plus Result: ${plusResult}. The type of the result is ${typeof plusResult}`);
console.log(`Minus Result: ${minusResult}. The type of the result is ${typeof minusResult}`);
console.log(`Divide Result: ${divideResult}. The type of the result is ${typeof divideResult}`);
console.log(`Multiply Result: ${multiplyResult}. The type of the result is ${typeof multiplyResult}`);
