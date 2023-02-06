const fs = require('fs')

const helpers = require('./helpers');
const sortingAlgorithms = require('./sortingAlgorithms');

const lengthOfArray = 100
const results = [
    {
        length: lengthOfArray,
        sortedAscending: {},
        sortedDescending: {},
        randomlyAssembled: {}
    }
]

// Generating arrays assembled of random elements for any given length.
const unsorted = helpers.generateArray(lengthOfArray);

// Sorting the generated array using js built-in function.
const sortedAscending = helpers.sortArray(unsorted.slice(), false);
const sortedDescending = helpers.sortArray(unsorted.slice(), true);

helpers.measureTime(() => sortingAlgorithms.quicksort(sortedAscending.slice()), "QuickSort", "ascending")
helpers.measureTime(() => sortingAlgorithms.quicksort(sortedDescending.slice()), "QuickSort", "descending")
helpers.measureTime(() => sortingAlgorithms.quicksort(unsorted.slice()), "QuickSort", "unsorted")

console.log("-----")

helpers.measureTime(() => sortingAlgorithms.bubbleSort(sortedAscending.slice()), "BubbleSort", "ascending")
helpers.measureTime(() => sortingAlgorithms.bubbleSort(sortedDescending.slice()), "BubbleSort", "descending")
helpers.measureTime(() => sortingAlgorithms.bubbleSort(unsorted.slice()), "BubbleSort", "unsorted")

console.log("-----")

const generatedArrays = [
    {sortedAscending: sortedAscending.slice()},
    {sortedDescending: sortedDescending.slice()},
    {unsorted: unsorted.slice()}
]

const shallowCopySortedAscending = sortedAscending.slice()
const shallowCopySortedDescending = sortedDescending.slice()
const shallowCopyUnsorted = unsorted.slice()

sortingAlgorithms.quicksort(shallowCopySortedAscending.slice())
sortingAlgorithms.quicksort(shallowCopySortedDescending.slice())
sortingAlgorithms.quicksort(shallowCopyUnsorted.slice())

const sortedArrays_quicksort = [
    {sortedAscending: shallowCopySortedAscending},
    {sortedDescending: shallowCopySortedDescending},
    {unsorted: shallowCopyUnsorted}
]

const bubbleSortAscending = sortingAlgorithms.bubbleSort(sortedAscending.slice())
const bubbleSortDescending = sortingAlgorithms.bubbleSort(sortedDescending.slice())
const bubbleSortUnsorted = sortingAlgorithms.bubbleSort(unsorted.slice())

const sortedArrays_bubbleSort = [
    {sortedAscending: bubbleSortAscending},
    {sortedDescending: bubbleSortDescending},
    {unsorted: bubbleSortUnsorted}
]

fs.writeFile('task_3/output/generatedArrays.json', JSON.stringify(generatedArrays), err => {
    if (err) throw err;
    console.log('GeneratedArrays written into file')
})

fs.writeFile('task_3/output/sortedArrays_quicksort.json', JSON.stringify(sortedArrays_quicksort), err => {
    if (err) throw err;
    console.log('sortedArrays_quicksort written into file')
})

fs.writeFile('task_3/output/sortedArrays_bubbleSort.json', JSON.stringify(sortedArrays_bubbleSort), err => {
    if (err) throw err;
    console.log('sortedArrays_bubbleSort written into file')
})

// Expected result format
// {
//     [
//         {
//             length: 100,
//             sortedAscending: {
//                 quicksortTime: result,
//                 bubbleSortTime: result
//             },
//             sortedDescending: {
//                 quicksortTime: result,
//                 bubbleSortTime: result
//             },
//             randomlyAssembled: {
//                 quicksortTime: result,
//                 bubbleSortTime: result
//             },
//         },
//         {
//             length: 1000,
//             sortedAscending: {
//                 quicksortTime: result,
//                 bubbleSortTime: result
//             },
//             sortedDescending: {
//                 quicksortTime: result,
//                 bubbleSortTime: result
//             },
//             randomlyAssembled: {
//                 quicksortTime: result,
//                 bubbleSortTime: result
//             },
//         },
//     ...
//     ]
// }