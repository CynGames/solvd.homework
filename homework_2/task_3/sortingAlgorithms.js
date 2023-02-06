// Homework 2 - Part 3 for Solvd IT Academy.

function quicksort(array, start = 0, end = array.length - 1) {

    // Base case: return if the start index is greater than or equal to the end index
    if (start >= end) return array.slice();

    // Partition the array
    let partitionIndex = partition(array, start, end);

    // Recursively sort the left side of the partition
    let left = quicksort(array, start, partitionIndex - 1);

    // Recursively sort the right side of the partition
    let right = quicksort(array, partitionIndex + 1, end);

    // Concatenate the left, pivot and right arrays
    return [...left, array[partitionIndex], ...right];
}

function partition(array, start, end) {

    // Choose the end element as the pivot value
    let pivotValue = array[end];

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

    // Get the length of the array
    let length = array.length - 1;

    // Loop through the array, comparing each pair of adjacent elements
    for (let i = 0; i < length - 1; i++) {

        for (let j = 0; j < length - i - 1; j++) {

            // If the current element is greater than the next element, swap them
            if (array[j] > array[j + 1]) {

                let temp = array[j];

                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    // Return the sorted array
    return array;
}

module.exports = {
    quicksort,
    bubbleSort
}