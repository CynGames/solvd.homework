// Homework 2 - Part 3 for Solvd IT Academy.

function generateArray() {
    let arr = [];

    for (let i = 0; i < 30; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    return arr;
}


// Middle pivot sorting strategy for quicksort
function quickSort(elementsArray) {

    let randomlyAssembledArray = elementsArray;

    if (randomlyAssembledArray.length < 2) return;

    const pivot = randomlyAssembledArray[randomlyAssembledArray.length / 2 - 1]

    const arrayLess = randomlyAssembledArray.slice(0, randomlyAssembledArray.length / 2 - 1);
    const arrayMore = randomlyAssembledArray.slice(randomlyAssembledArray.length / 2, randomlyAssembledArray.length);

    for (let i = 0; i < randomlyAssembledArray.length; i++) {

        // let elementInspected = randomlyAssembledArray[i];
        //
        // if(elementInspected <= pivot)
    }

    // console.log(randomlyAssembledArray)
    // console.log(pivot)
    //
    // console.log(arrayLess)
    // console.log(arrayMore)
}

quickSort(generateArray());