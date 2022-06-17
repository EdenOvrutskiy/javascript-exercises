const removeFromArray = function (array, ...removeThese) {
    //go over every value passed to the function
    for (const removeThis of removeThese) {
        if (array.includes(removeThis)) { //this prevents
            //the splice method from being passed -1 an breaking
            //find the index of what should be removed 
            const indexToRemove = array.indexOf(removeThis);
            //use the splice method to remove an index from an array
            const removeCount = 1; //to remove only a single item
            array.splice(indexToRemove, removeCount);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
