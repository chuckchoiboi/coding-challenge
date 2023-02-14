/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

longestCommonPrefix = strs[0]
currentPrefix = ''

loop starting at 1st index, comparing longestCommonPrefix to current string
if char match, currentPrefix += char
if not match or at the end of a word, end loop and longestCommonPrefix = currentPrefix
currentPrefix = ''


Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


*/

const longestCommonPrefix1 = (strs) => {
    let longestCommonPrefix = strs[0]
    let currentWord

    for (let i = 1; i < strs.length; i++) {
        currentWord = strs[i]
        let currentPrefix = ''

        if(currentWord === '') return ''

        for (let j = 0; j < currentWord.length; j++) {
            if(longestCommonPrefix[j] !== currentWord[j] || j === currentWord.length || j === longestCommonPrefix.length) {
                longestCommonPrefix = currentPrefix
                break
            }
            currentPrefix += currentWord[j]
            if(j === currentWord.length - 1) longestCommonPrefix = currentPrefix
        }
    }

    return longestCommonPrefix
}

// using string methods
const longestCommonPrefix2 = (strs) => {
    if(strs.length === 0) return '';
    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if(!prefix) return ''
        }
    }
    return prefix;
}