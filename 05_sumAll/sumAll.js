//TODO
//is a concise if statement with many boolean operators
//better than multiple if-else ?
//  should I create a isInvalid(input) function for that block of 
//  code?
// try a switch statement for my if-else vs. boolean problem
const sumAll = function (integer, integer2) {
    //return the sum of integer +(integer + 1).. 
    //                           +integer2)
    //despite integers including negative numbers,
    //specs want to return an 'ERROR' string
    //if encountered.

    function isPositive(integer) {
        return (integer >= 0);
    }

    function isNumber(input) {
        return (typeof input == 'number');
    }

    //too many boolean operators in an IF statement..
    function isValidInput(integer, integer2) {
        if (isPositive(integer)
            && isPositive(integer2)
            && isNumber(integer)
            && isNumber(integer2)) {
            return true;
        }
    }
    function isBadInput(integer, integer2) {
        if (isPositive(integer)) {
        }
        else if (isPositive(integer2)) {
        }
        else if (isNumber(integer)) {
        }
        else if (isNumber(integer2)) {
        }
        else {
            return true;
        }

    }
    //to use 
    let isBadInput;
    switch (true) {
        case isPositive(integer):
            isBadInput = false;
        default:
            isBadInput = true;
            

    }

    //too much nesting
    function isValidInput(integer, integer2) {
        if (isPositive(integer)) {
            if (isPositive(integer2)) {
                if (isNumber(integer)) {
                    if (isNumber(integer2)) {
                        return true;
                    }
                }
            }
        }
        /*
        //too many if / else-ifs + repetition with return..
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
        if (isValidInput(integer, integer2)) {
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
        else {
            return 'ERROR';
        }
    };

    // Do not edit below this line
    module.exports = sumAll;
