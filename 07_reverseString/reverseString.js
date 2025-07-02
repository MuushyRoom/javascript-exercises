const reverseString = function (text) {
  let word = text;
  let wordSize = word.length;
  let newWord = "";
  
 for (let i = wordSize - 1; i >= 0; i--) {
           
           newWord += word[i];
  }
   
 return newWord;
};

// Do not edit below this line
module.exports = reverseString;
