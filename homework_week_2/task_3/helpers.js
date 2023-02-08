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

function measureTime(sortingAlgorithmFunction) {
    let start = performance.now();
    sortingAlgorithmFunction();
    let end = performance.now();

    const result = (end - start).toFixed(4)

    return Number(result);
}

module.exports = {
    generateArray,
    sortArray,
    measureTime
}

