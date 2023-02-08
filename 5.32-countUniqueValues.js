/*
    Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
    There can be negative numbers in the array, but it will always be sorted.

    countUniqueValues([1,1,1,1,1,2]) // 2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
    countUniqueValues([]) // 0
    countUniqueValues([-2,-1,-1,0,1]) // 4
*/

// solution 1 - mutating array
const countUniqueValues1 = (arr) => {
    if (arr.length === 0) return 0
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i+1
}

// solution 2 - using map
const countUniqueValues2 = (arr) => {
    if (arr.length === 0) return 0

    const numMap = {};
    let uniqueCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if(!numMap[arr[i]]) {
            numMap[arr[i]] = 1
            uniqueCount ++
        } else {
            numMap[arr[i]] ++
        }
    }

    return uniqueCount
}