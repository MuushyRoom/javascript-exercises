const removeFromArray = function(array,...arrayToRemove) {
    
        let newArray = array;
     
     
     //for each item of arrays to remove
 for (const removeItem of arrayToRemove) {
     
     for(const arrayItems of newArray){
         let indexToRemove = array.indexOf(removeItem);
        
        //if it exist remove it from the array
        if(indexToRemove >= 0){
        newArray.splice(indexToRemove, 1,);  
        }
     }
  }
        
return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
