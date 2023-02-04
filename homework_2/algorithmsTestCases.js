const helper = require('./helpers');
const sortingAlgorithms = require('./sortingAlgorithms');

const lengthOfArray = 100
const results = {
    length: lengthOfArray,
    sortedAscending: {},
    sortedDescending: {},
    randomlyAssembled: {}
}

const sortedAscending = helper.generateArray(lengthOfArray, true, false);
const sortedDescending = helper.generateArray(lengthOfArray, true, true);
const unsorted = helper.generateArray(lengthOfArray, false, false);

const quickSortAscending = sortingAlgorithms.quicksort(sortedAscending, 0, lengthOfArray)
const quickSortDescending = sortingAlgorithms.quicksort(sortedDescending, 0, lengthOfArray)
const quickSortUnsorted = sortingAlgorithms.quicksort(unsorted, 0, lengthOfArray)

measureTime(() => sortingAlgorithms.quicksort(sortedAscending, 0, lengthOfArray), "ascending")
measureTime(() => sortingAlgorithms.quicksort(sortedDescending, 0, lengthOfArray), "descending")
measureTime(() => sortingAlgorithms.quicksort(unsorted, 0, lengthOfArray), "unsorted")

// {
//     length: 2,
//     sortedAscending: {
//         quicksortTime: result,
//         bubbleSortTime: result
//     },
//     sortedDescending: {
//         quicksortTime: result,
//         bubbleSortTime: result
//     },
//     randomlyAssembled: {
//         quicksortTime: result,
//         bubbleSortTime: result
//     },
// }

function measureTime(func, originalArrayState) {
    let start = performance.now();
    func();
    let end = performance.now();

    const result = (end - start).toFixed(4)
    console.log(`Time taken to run ${originalArrayState}: ${result} milliseconds`);

    return result;
}
