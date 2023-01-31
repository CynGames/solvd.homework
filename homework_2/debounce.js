// Homework 2 - Part 2 for Solvd IT Academy.

let latestInvokedFunction = null;
let timeoutId = null;

// Debouncing function
function debounce(func, wait = 1000) {

    // Check if the current function has already been invoked
    if (latestInvokedFunction === func) return;

    // Set the current function as the latest invoked function
    latestInvokedFunction = func;

    // Clear any previously set timeouts
    clearTimeout(timeoutId)

    // Set a new timeout for the latest invoked function
    timeoutId = setTimeout(latestInvokedFunction, wait);
}

// Test functions
let test_A = () => console.log('first test');
let test_B = () => console.log('second test');

// Debouncing calls
debounce(test_A, 100);
debounce(test_A, 1000);
debounce(test_B, 2000);

