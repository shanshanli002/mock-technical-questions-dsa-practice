const tilesScore = {'a':1, 'b':3, 'c':3, 'd':2, 'e':1, 'f':4, 'g':2, 'h':4, 'i':1, 'j':8, 'k':5, 'l':1, 'm':3,
'n':1, 'o':1, 'p':3, 'q':10, 'r':1, 's':1, 't':1, 'u':1, 'v':4, 'w':4, 'x':8, 'y':4, 'z':10,
'_': 0};

// 90% sure time complexity = O(m+n) bounded by size of tiles and word 
//90% sure space complexity = O(m+n) because we need to allocate memory for two different reference variables.
function wordScore(tiles, word){
  let sum = 0;
  let tilesCollection = Array.from(tiles);
  let lettersCollection = Array.from(word);
  let wordLetters = {};
  //obj to represent the count of how many letters are in the word
  for(let letter of lettersCollection){
    if(!wordLetters[letter]){
      wordLetters[letter] = 1;
    } else{
      wordLetters[letter] +=1;
    }
  }
  
  for(let tile of tilesCollection){
    if(wordLetters[tile] && (wordLetters[tile] > 0)) {
       sum += tilesScore[tile];
      wordLetters[tile] --;
    }
  }
  
  if(sum == 0){
    sum = -1;
  }
  return sum;
};

console.log(wordScore("tmocam", "cam")); //expected 7 ; actual 10
console.log(wordScore("tmocatttttt", "cat")); //5
console.log(wordScore("tmoca___", "hi")); //-1
console.log(wordScore("tmoccca", "caa")); //4
console.log(wordScore("ttttttmoca", "catt")); //6
console.log(wordScore("dfhksdhfkj", "cat")); //-1
