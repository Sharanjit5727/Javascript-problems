function getUnique(array){
    var uniqueArray = [];
    
    // Loop through array values
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}


console.log(getUnique([1, 0, 1, 0]));
console.log(getUnique(["The", "big", "cat"]));
console.log(getUnique(["John", "Taylor", "John"]))