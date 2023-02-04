// Homework 2 - Part 3 for Solvd IT Academy.

// Define the quicksort function
function quicksort(array, start, end) {

    // Base case: return if the start index is greater than or equal to the end index
    if (start >= end) return;

    // Partition the array
    let partitionIndex = partition(array, start, end);

    // Recursively sort the left side of the partition
    quicksort(array, start, partitionIndex - 1);

    // Recursively sort the right side of the partition
    quicksort(array, partitionIndex + 1, end);
}

// Define the partition function
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

module.exports = {
    quicksort
}