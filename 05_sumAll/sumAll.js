//TODO
//enable large numbers - maybe bigInt can help?
const sumAll = function (integer, integer2) {
    //return the sum of integer +(integer + 1).. 
    //                           +integer2)
    //despite integers including negative numbers,
    //specs want to return an 'ERROR' string
    //if encountered.

    function isNegative(integer) {
        return (integer < 0);
    }

    if (isNegative(integer)) {
        return 'ERROR';
    }
    else if (isNegative(integer2)) {
        return 'ERROR';
    }
    else {
        //iterate on the sequence of numbers
        //make sure the iteration happens in
        //the right direction - i.e
        //from the smaller number to the larger

        //make one loop with variable "bigger int"

        if (integer < integer2) {
            smallerInt = integer;
            biggerInt = integer2;
        }
        else {
            smallerInt = integer2;
            biggerInt = integer;
        }

        let sum = 0;
        for (i = smallerInt; i <= biggerInt; ++i) {
            sum += i;
        }

        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
