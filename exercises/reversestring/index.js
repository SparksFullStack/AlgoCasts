// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // * reverse loop solution
    // let reversedString = [];
    // for (let i = str.length - 1; i >= 0; i--){
    //     reversedString.push(str[i]);
    // };
    // return reversedString.join('');

    // * split and join solution
    // return str
    //     .split('')
    //     .reverse()
    //     .join('');

    // * for of solution
    // let reversed = '';
    // for (let character of str) {
    //     reversed = character + reversed;
    // }
    // return reversed;

    // * reduce solution
    return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;