// Initialize cache maps
const normalMap = new Map();
const weakMap = new WeakMap();

function fibonacci(n, cache) {

    // Base case
    if (n <= 1) return n;

    // Create a key for the cache
    let key = (cache instanceof WeakMap) ? {n} : n;

    // Look into the cache for the value
    if (cache.has(key)) return cache.get(key);

    // Recursively calculate the value
    const value = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
    cache.set(key, value);

    return value;
}

let result = fibonacci(11, normalMap);
console.log(`The Fibonacci number using Map is ${result}`)

result = fibonacci(10, weakMap);
console.log(`The Fibonacci number using WeakMap is ${result}`)