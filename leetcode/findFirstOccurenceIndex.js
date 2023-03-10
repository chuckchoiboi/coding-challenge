/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

const findFirstOccurenceIndex = (haystack, needle) => {
	if (haystack.length < needle.length) return -1;

	let firstOccurenceIndex = -1;

	for (let i = 0; i < haystack.length - needle.length + 1; i++) {
		if (haystack[i] === needle[0]) {
			for (let j = 0; j < needle.length; j++) {
				if (haystack[i + j] !== needle[j]) break;
				if (j === needle.length - 1) {
					firstOccurenceIndex = i;
				}
			}
			if (firstOccurenceIndex >= 0) break;
		}
	}

	return firstOccurenceIndex;
};
