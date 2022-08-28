/**
 * time = nlogN
 * sort the given array,
 * find index of smallest number in the given array and return that index, how far away it is from the start
 */

 function findRotationCount(num) {
    let nums = Array.from(num)
    let sortedArray = num.sort(sortAscending)
    let smallestNum =sortedArray[0];
    let smallestNumIndexInGivenArray=nums.indexOf(smallestNum);
  
      return smallestNumIndexInGivenArray;
  }
  
  function sortAscending(a,b){
      return a-b;
  }

module.exports = findRotationCount