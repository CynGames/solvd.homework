// Homework 2 - Part 3 for Solvd IT Academy.

function quicksort(array, start = 0, end = array.length - 1) {

    // Base case: return if the start index is greater than or equal to the end index
    if (start >= end) return;

    // Partition the array
    let partitionIndex = partition(array, start, end);

    // Recursively sort the left side of the partition
    quicksort(array, start, partitionIndex - 1);

    // Recursively sort the right side of the partition
    quicksort(array, partitionIndex + 1, end);
}

function partition(array, start, end) {

    // Choose a random index as the pivot value
    let pivotIndex = Math.floor(Math.random() * end);
    let pivotValue = array[pivotIndex];

    // Swap the pivot value with the end element
    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];

    // Start the partition index at the start of the array
    let partitionIndex = start;

    // Iterate through the array from the start to the end
    for (let i = start; i < end; i++) {

        // If the current element is less than or equal to the pivot value
        if (array[i] <= pivotValue) {

            // Swap the current element with the partition index
            [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]];

            // Increment the partition index;
            partitionIndex++;
        }
    }

    // Swap the partition index with the pivot value
    [array[partitionIndex], array[end]] = [array[end], array[partitionIndex]];

    // Return the partition index
    return partitionIndex;
}


function bubbleSort(array) {

    // loop through the array, starting from the end and working backwards
    for (let length = array.length - 1; length >= 0; length--) {

        // compare each pair of adjacent elements
        for (let i = 0; i < length; i++) {

            // if the current element is greater than the next element
            if (array[i] > array[i + 1]) {

                // Swap them
                [array[i], array[i + 1]] = [array[i + 1], array[i]]
            }
        }
    }

    // return the sorted array
    return array;
}

module.exports = {
    quicksort,
    bubbleSort
}