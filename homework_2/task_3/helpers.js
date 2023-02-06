function generateArray(maxIterations) {
    let resultingArray = [];

    for (let i = 0; i < maxIterations; i++) {
        resultingArray.push(Math.floor(Math.random() * maxIterations));
    }

    return resultingArray;
}

function sortArray(array, reverse = false) {
    let resultingArray = array;

    resultingArray.sort((a, b) => (reverse ? b - a : a - b));

    return resultingArray;
}

function measureTime(sortingAlgorithmFunction, sortingAlgorithmName, originalArrayState) {
    let start = performance.now();
    sortingAlgorithmFunction();
    let end = performance.now();

    const result = (end - start).toFixed(4)
    console.log(`Time taken to run ${originalArrayState} with ${sortingAlgorithmName}: ${result} milliseconds`);

    return result;
}

function addResultToObject(result, initialSortingState)
{
    // if (initialSortingState === "ascending")
    // return {...currentObjState, result}
}

function findFastestAlgorithm(quicksortTimeTakenResult, bubbleSortTimeTakenResult,) {

    // if (quicksortTimeTakenResult > bubbleSortTimeTakenResult)

    return quicksortTimeTakenResult > bubbleSortTimeTakenResult ? bubbleSortTimeTakenResult : quicksortTimeTakenResult;
}

function outputResult(arrLength, originalArrState,) {


}



module.exports = {
    generateArray,
    sortArray,
    measureTime
}

