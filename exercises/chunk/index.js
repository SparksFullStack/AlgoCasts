// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // * my first solution
    // let resultArr = [];
    //     tempArr = [];
    //     counter = 1;

    // for (let i = 0; i < array.length; i++){
    //     tempArr.push(array[i]);
    //     if (counter === size || i === array.length - 1){
    //         resultArr.push(tempArr);
    //         tempArr = [];
    //         counter = 1;
    //     } else {
    //         counter++;
    //     }
    // }

    // return resultArr;

    // * Grider's first solution
    // const chunked = [];

    // for (let element of array){
    //     let last = chunked[chunked.length - 1];

    //     if (!last || last.length === size){
    //         chunked.push([element]);
    //     } else {
    //         last.push(element);
    //     }
    // }

    // return chunked;

    // * Grider's second solution
    const chunked = [];
    let index = 0;

    while (index < array.length){
        let newIndex = index + size;
        chunked.push(array.slice(index, newIndex));
        index = newIndex;
    }

    return chunked;
}

module.exports = chunk;
