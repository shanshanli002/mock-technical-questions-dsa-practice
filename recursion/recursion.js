/** product: calculate the product of an array of numbers. */

function product1(nums) {
  // approach with passing in a sub array of original array
  if (nums.length === 0) {
    return 1;
  }

  return nums[0] * product(nums.slice(1));
}

function product(nums, index = 0) {
  // approach with using pointer at index
  if (index === nums.length) {
    return 1;
  }

  return nums[index] * product(nums, index + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, longestWordLength = 0) {
  if (index === words.length) {
    return longestWordLength;
  }

  longestWordLength = Math.max(words[index].length, longestWordLength);

  return longest(words, index + 1, longestWordLength);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0, finalWord = "") {
  if (index >= str.length) {
    return finalWord;
  }

  finalWord = finalWord + str[index];
  return everyOther(str, index + 2, finalWord);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index = 0) {
  //can pass in one indexes and compares front index with back index
  if (index >= (str.length - 1) / 2) {
    return true;
  }

  if (str[index] != str[str.length - 1 - index]) {
    return false;
  }
  return isPalindrome(str, index + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index >= arr.length) {
    return -1;
  }

  if(arr[index] === val){
    return index;
  }

  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = 0, strReversed = "") {
  if(index >= str.length){
    return strReversed;
  }

  strReversed = strReversed + str[str.length-1-index];

  return revString(str, index +1, strReversed);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  let attributes = Object.keys(obj);
  let values = [];
  
  function getValues(object, keys) {
    
    for(let key of keys){
      let value = object[key]; 
      if(typeof value == 'object'){
        getValues(value, Object.keys(value));
      } else {
        if (typeof value == 'string') {
          values.push(value);
        }
      }
    }
  }

  getValues(obj, attributes);

  return values;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
