function mapFibonacci(numberToCalculate) {

    // Initialize map
    const fibonacciMap = new Map();

    // Sequence start
    fibonacciMap.set(0, 0);
    fibonacciMap.set(1, 1);

    for (let i = 2; i < numberToCalculate; i++) {

        // Calculate the Fibonacci number.
        let nextFibonacciNumber = fibonacciMap.get(i - 2) + fibonacciMap.get(i - 1);
        fibonacciMap.set(i, nextFibonacciNumber);
    }

    // Return latest
    return fibonacciMap.get(numberToCalculate - 1)
}

function weakMapFibonacci(numberToCalculate) {

    // Initialize map
    const weakFibonacciMap = new WeakMap()

    // Declare last two values
    let previousObject = {};
    let latestObject = {};

    // Sequence start
    weakFibonacciMap.set(previousObject, 0);
    weakFibonacciMap.set(latestObject, 1);

    for (let i = 2; i < numberToCalculate; i++) {

        // Cache the values into variables
        let previousValue = weakFibonacciMap.get(previousObject);
        let latestValue = weakFibonacciMap.get(latestObject);

        // Calculate the next Fibonacci Number
        let nextFibonacciNumber = previousValue + latestValue;

        // Set the updated values into the WeakMap
        weakFibonacciMap.set(previousObject, latestValue);
        weakFibonacciMap.set(latestObject, nextFibonacciNumber);
    }

    // Return latest
    return weakFibonacciMap.get(latestObject);
}

let result = mapFibonacci(9);
console.log(`The Fibonacci number using Map is ${result}`)

result = weakMapFibonacci(8);
console.log(`The Fibonacci number using WeakMap is ${result}`)
