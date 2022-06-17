const sumAll = function (integer, integer2) {
    //return the sum of integer +(integer + 1).. 
    //                           +integer2)
    function isPositive(integer) {
        return (integer >= 0);
    }

    function isNumber(input) {
        return (typeof input == 'number');
    }

    function isValidInput(integer) { 
        return (isPositive(integer) && isNumber(integer));
    }
    
    function areValidInput(integer, integer2) { 
        return (isValidInput(integer) && isValidInput(integer2));
    }
    
    if (areValidInput(integer, integer2)) {
        //create a sequence of numbers to add
        let firstAddend;
        let lastAddend;
        //makes sure the iteration happens in
        //the right direction - i.e
        //from the smaller number to the larger
        if (integer < integer2) {
            firstAddend = integer;
            lastAddend = integer2;
        }
        else if (integer > integer2) {
            firstAddend = integer2;
            lastAddend = integer;
        }
        else { //if they're equal, it doesn't matter which is first
            firstAddend = integer2;
            lastAddend = integer;
        }

        //create and add a sequence of numbers into a running total
        let sum = 0;
        for (let i = firstAddend; i <= lastAddend; ++i) {
            sum += i;
        }
        return sum;
    }
    else {
        //despite integers including negative numbers,
        //specs want to return an 'ERROR' string
        //if encountered.
        return 'ERROR';
    }
}; //end of sumAll function

// Do not edit below this line
module.exports = sumAll;
