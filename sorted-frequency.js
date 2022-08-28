/**
 * solution should be O(logN) time 
 * going to make 2 pointers as a left and right, if the left and right are the targetNum, then return rightp-leftpointer+1
 * 
 * calculate midPoint, if the midpoint == targetnum... then left P=0 and rightp=array.length-1
 * 
 *              if midPoint > targetNum, leftP=0, rightP = midPoint - 1
 * 
 *  if midPoint <targetNum, LeftP == midpOint +1, rightP = arr.length-1.... if rightP < target, return -1
 * 
 * 
 * 
 * simpler solution without pointers would be a freqeuncy map but O(N) time and O(N) space
 * benefits of map would be easier implementation. 
 */

//fund the number of occurances of targetNum
function sortedFrequency(numbers, targetNum) {
    let leftP = 0;
    let rightP = numbers.length - 1;
    let midPoint = Math.floor((leftP + rightP) / 2);
  
    if (numbers[leftP] == targetNum && numbers[rightP] == targetNum) {
      return numbers.length - 1;
    } else if (numbers[leftP] < targetNum && numbers[rightP] < targetNum) {
      return -1;
    } else if (numbers[rightP] == targetNum && numbers[rightP - 1] != targetNum) {
      return 1;
    }
  
    if (numbers[midPoint] > targetNum) {
      rightP = midPoint - 1;
      while (leftP <= rightP) {
        if (numbers[leftP] == targetNum && numbers[rightP] == targetNum) {
          return rightP - leftP + 1;
        }
        if (numbers[leftP] == targetNum && numbers[rightP] != targetNum) {
          rightP--;
        }
        if (numbers[leftP] != targetNum && numbers[rightP] == targetNum) {
          leftP++;
        }
      }
    } else if (numbers[midPoint] < targetNum) {
      leftP = midPoint + 1;
      while (leftP <= rightP) {
        if (numbers[leftP] == targetNum && numbers[rightP] == targetNum) {
          return rightP - leftP + 1;
        }
        if (numbers[leftP] == targetNum && numbers[rightP] != targetNum) {
          rightP--;
        }
        if (numbers[leftP] != targetNum && numbers[rightP] == targetNum) {
          leftP++;
        }
      }
    } else if (numbers[midPoint] == targetNum) {
      while (leftP <= rightP) {
        if (numbers[leftP] == targetNum && numbers[rightP] != targetNum) {
          rightP--;
        }
        else if (numbers[leftP] != targetNum && numbers[rightP] == targetNum) {
          leftP++;
        }
        else if (numbers[leftP] != targetNum && numbers[rightP] != targetNum) {
          leftP++;
          rightP--;
        }
  
        if (numbers[leftP] == targetNum && numbers[rightP] == targetNum) {
          return (rightP - leftP) +1;
        }
      }
    }
  
  
  }

module.exports = sortedFrequency