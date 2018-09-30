// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // * looping and a hash table/character map (my first solution)
    // let hashTable = {}
    //     maxVal = 0
    //     maxChar;

    // for (let i = 0; i <= str.length; i++){
    //     if (hashTable[str[i]]) hashTable[str[i]]++;
    //     else hashTable[str[i]] = 1;
    // }
    
    // for (let vals in hashTable){
    //     if (hashTable[vals] > maxVal) {
    //         maxVal = hashTable[vals];
    //         maxChar = vals;
    //     }
    // }

    // return maxChar;

    // * Grider's ternary solution
    let charMap = {}
        maxVal = 0
        maxChar;

    // here if hashtable[i]++ returns null (which it will if it's not in there), we'll set the value to one.
    for (let char of str) charMap[char] = charMap[char]++ || 1;

    for (let val in charMap){
        if (charMap[val] > maxVal) {
            maxVal = charMap[val];
            maxChar = val;
        }
    }

    return maxChar;
}

module.exports = maxChar;
