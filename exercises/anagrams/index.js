// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // * my first solution
    // const charMap1 = {};
    //     charMap2 = {};

    // const str1 = stringA.replace(/[^\w]/g, '');
    // const str2 = stringB.replace(/[^\w]/g, '');

    // if (str1.length !== str2.length) return false;

    // for (let char of str1){
    //     if (charMap1[char]) charMap1[char]++;
    //     else charMap1[char] = 1;
    // }

    // for (let char of str2){
    //     if (charMap2[char]) charMap2[char]++;
    //     else charMap2[char] = 1;
    // }

    // for (let char in charMap1){
    //     if (charMap1[char] !== charMap2[char]) return false;
    // }

    // return true;

    // * Grider's solution
    const charMapA = charMapCreator(stringA);
    const charMapB = charMapCreator(stringB);

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;

    for (let char in charMapA){
        if (charMapA[char] !== charMapB[char]) return false;
    }

    return true;
}


function charMapCreator(str){
    const charMap = {};
    const cleanStr = str.replace(/[^\w]/g, "").toLowerCase();

    for (let char of cleanStr){
        charMap[char] = charMap[char]++ || 1;
    }

    return charMap;
}
module.exports = anagrams;
