function generateArray(maxIterations, sorted = false, reverse = false) {
    let resultingArray = [];

    for (let i = 0; i < maxIterations; i++) {
        resultingArray.push(Math.floor(Math.random() * 100));
    }

    sorted && resultingArray.sort((a, b) => (reverse ? b - a : a - b));

    return resultingArray;
}

module.exports = {
    generateArray
}

// function addResultToObject(result, initialSortingState)
// {
//     // if (initialSortingState === "ascending")
//     // return {...currentObjState, result}
// }
//
// function findFastestAlgorithm(quicksortTimeTakenResult, bubbleSortTimeTakenResult,) {
//
//     // if (quicksortTimeTakenResult > bubbleSortTimeTakenResult)
//
//         return quicksortTimeTakenResult > bubbleSortTimeTakenResult ? bubbleSortTimeTakenResult : quicksortTimeTakenResult;
// }
//
// function outputResult(arrLength, originalArrState,) {
//

// }

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

