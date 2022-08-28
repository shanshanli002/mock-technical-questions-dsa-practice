function countZeroes(numbers) {
    let numbersOfZeroes = 0;
    let leftP = 0;
    let rightP = leftP+1;
    //if end of list of numbers is 1, then we don't have zeros and auto return 0
    if(numbers[numbers.length-1] == 1){
        return numbersOfZeroes
        //if start of list is 0, then the whole list is zeroes
    } else if(numbers[0] == 0){
        return numbers.length
    } else{
        //keep looping through if the right pointer is within bounds
        while(rightP<=numbers.length-1){
            if(numbers[leftP] == 1 && numbers[rightP] == 0){
                numbersOfZeroes = numbers.length - rightP;
                return numbersOfZeroes;
            } 

            leftP +=1;
            rightP +=1;
            
        }
    }
}

module.exports = countZeroes