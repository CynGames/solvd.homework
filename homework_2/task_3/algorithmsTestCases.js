const helpers = require('./helpers');
const sortingAlgorithms = require('./sortingAlgorithms');

const lengthOfArray = 150;

function getAlgorithmMeasurement(algorithmFunction, numberOfIterations) {
    let sortedAscendingAvgResults = 0;
    let sortedDescendingAvgResults = 0;
    let unsortedAvgResults = 0;

    const sortingAlgorithmName = algorithmFunction === sortingAlgorithms.quicksort ? "QuickSort" : "BubbleSort";

    for (let i = 0; i < numberOfIterations; i++) {

        // Generating an array assembled of random elements for any given length.
        const unsorted = helpers.generateArray(lengthOfArray);

        // Sorting the generated array using js built-in function.
        const sortedAscending = helpers.sortArray(unsorted.slice(), false);
        const sortedDescending = helpers.sortArray(unsorted.slice(), true);

        // Run measurements
        sortedAscendingAvgResults += helpers.measureTime(() => algorithmFunction(sortedAscending));
        sortedDescendingAvgResults += helpers.measureTime(() => algorithmFunction(sortedDescending));
        unsortedAvgResults += helpers.measureTime(() => algorithmFunction(unsorted));
    }

    sortedAscendingAvgResults = Number((sortedAscendingAvgResults / numberOfIterations).toFixed(4));
    sortedDescendingAvgResults = Number((sortedDescendingAvgResults / numberOfIterations).toFixed(4));
    unsortedAvgResults = Number((unsortedAvgResults / numberOfIterations).toFixed(4));

    console.log(`Average time taken to run Ascending with ${sortingAlgorithmName}: ${sortedAscendingAvgResults} milliseconds`);
    console.log(`Average time taken to run Descending with ${sortingAlgorithmName}: ${sortedDescendingAvgResults} milliseconds`);
    console.log(`Average time taken to run Unsorted with ${sortingAlgorithmName}: ${unsortedAvgResults} milliseconds`);
    console.log(`Aggregate total time with ${sortingAlgorithmName}: ${sortedAscendingAvgResults + sortedDescendingAvgResults + unsortedAvgResults} milliseconds`);
}

getAlgorithmMeasurement(sortingAlgorithms.quicksort, 100);
console.log("-----");
getAlgorithmMeasurement(sortingAlgorithms.bubbleSort, 100);
