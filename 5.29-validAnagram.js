/* 
    Given two strings, write a function to determine if the second string is an anagram of the first. 
    An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, 
    formed from iceman.

    Examples:

    validAnagram('', '') // true
    validAnagram('aaz', 'zza') // false
    validAnagram('anagram', 'nagaram') // true
    validAnagram("rat","car") // false) // false
    validAnagram('awesome', 'awesom') // false
    validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
    validAnagram('qwerty', 'qeywrt') // true
*/

const validAnagram = (str1, str2) => {
    // the function takes two string params,
    // if the second string is an anagram of the first, returns true. otherwise, returns false.

    // check if str1 and str2 have the same length. if not, return false.
    // create maps for each strings, and loop through each string to count the number of letters in each string
    // going through str1's map, check if each of the key value match the key value of str2's map. return false if a key value does not match the other's.
    // if all pass, return true
    if(str1.length !== str2.length) return false;

    const str1Map = {};
    const str2Map = {};

    for (const char of str1) {
        str1Map[char] = (str1Map[char] || 0) + 1
    }

    for (const char of str2) {
        str2Map[char] = (str2Map[char] || 0) + 1
    }

    for (const key in str1Map) {
        if(str1Map[key] !== str2Map[key]) return false
    }

    return true
}