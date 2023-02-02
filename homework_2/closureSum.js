// Homework 2 - Part 1 for Solvd IT Academy.

function sum(baseNumber) {
    let sum = baseNumber;

    const func = function (additionalNumber) {
        sum += additionalNumber;

        return func;
    }

    func.valueOf = function () {
        return sum;
    }

    return func;
};

const firstCase = sum(1);
const secondCase = sum(1)(2);
const thirdCase = sum(1)(2)(3)(4)(5)(6)(7);

console.log(firstCase.valueOf());
console.log(secondCase.valueOf());
console.log(thirdCase.valueOf());