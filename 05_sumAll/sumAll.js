//TODO
//is a concise if statement with many boolean operators
//better than multiple if-else ?
//  should I create a isInvalid(input) function for that block of 
//  code?
const sumAll = function (integer, integer2) {
    //return the sum of integer +(integer + 1).. 
    //                           +integer2)
    //despite integers including negative numbers,
    //specs want to return an 'ERROR' string
    //if encountered.

    function isNegative(integer) {
        return (integer < 0);
    }
    function isInvalidInput(integer, integer2) {
        if (isNegative(integer)
            || isNegative(integer2)
            || (typeof integer != 'number')
            || (typeof integer2 != 'number')) {
            return true;
        }
    }
    if (isInvalidInput(integer, integer2)) {
        return 'ERROR';
    }
    /*
    if (isNegative(integer)) {
        return 'ERROR';
    }
    else if (isNegative(integer2)) {
        return 'ERROR';
    }
    else if (typeof integer != 'number') {
        return 'ERROR';
    }
    else if (typeof integer2 != 'number') {
        return 'ERROR';
    }
    */
    else {
    //make sure the iteration happens in
    //the right direction - i.e
    //from the smaller number to the larger
    let firstAddend;
    let lastAddend;

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

    //add each number to a running total
    let sum = 0;
    for (let i = firstAddend; i <= lastAddend; ++i) {
        sum += i;
    }
    return sum;
}
};

// Do not edit below this line
module.exports = sumAll;
