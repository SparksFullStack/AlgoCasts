// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // * conversion + ternary solution (Grider's solution)
    // const revStr = str.split('').reverse().join('');
    // return str === revStr;

    // * no reverse helper method
    // let newStr = ''
    // for (let i = str.length - 1; i >= 0; i--) newStr += str[i];
    // if (newStr === str) return true;
    // else return false;

    // * one liner
    // return str.split('').reverse().join('') === str ? true : false;

    // array.every
    const arr = str.split('');
    return arr.every((char, i) => {
        return char === str[str.length - i - 1];
    })
}

module.exports = palindrome;
