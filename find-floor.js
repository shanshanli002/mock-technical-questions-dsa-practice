function findFloor(array, target) {
    let leftP = 0;
    let rightP = array.length-1;
    let midPoint = Math.floor((leftP + rightP) /2);
    if(array[leftP] > target){
        return -1;
    } else if(array[rightP] == target || array[rightP] < target){
        return array[rightP];
    }

    if(array[midPoint] < target ){
      let leftP = midPoint +1;
      while(leftP < rightP){
        if(array[leftP] > target){
          return array[leftP-1];
        } 
        leftP ++;
        
      }
    } else if(array[midPoint] > target){
        let rightP = midPoint -1; 
        while(leftP < rightP){
            if(array[rightP] == target){
                return array[rightP]
            } else if(array[rightP] < target){
                return array[rightP]
            }
          rightP --;
        }

    }
}
module.exports = findFloor