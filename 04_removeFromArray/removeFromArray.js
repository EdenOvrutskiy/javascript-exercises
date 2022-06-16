//TODO
const removeFromArray = function (array, removeThis) {
    //go over every value passed to the function
    for (const argument of arguments) {
        if (argument != argument[0]) {//except for the array
            let removeThis = argument;
            if (array.includes(removeThis)) { //this prevents
                //the splice method from being passed -1 an breaking
                //find the index of what should be removed 
                const indexToRemove = array.indexOf(removeThis);
                //use the splice method to remove an index from an array
                const removeCount = 1; //to remove only a single item
                array.splice(indexToRemove, removeCount);
                console.log(removeThis, "has been removed from "
                    + " the array.");
            }
            else {
                console.log("array did not include the specified"
                    + "value: " + removeThis);
            }
        }
    }
    return array;
};

//array = [1, 2, 3, 4, 5, 9];
//console.log(removeFromArray(array, 5, 9, 33, 77));

// Do not edit below this line
module.exports = removeFromArray;
