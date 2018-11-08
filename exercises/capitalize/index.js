// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    str = str.split(" ");
    const resultArr = [];

    for (let i = 0; i < str.length; i++){
        let tempArr = str[i].split('');
        tempArr[0] = tempArr[0].toUpperCase();
        resultArr.push(tempArr.join(''));
    }

    return resultArr.join(" ");
}

module.exports = capitalize;
