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
    else if (typeof integer != 'number') {
        return 'ERROR';
    }
    else if (typeof integer2 != 'number') {
        return 'ERROR';
    }
    else {
        //make sure the iteration happens in
        //the right direction - i.e
        //from the smaller number to the larger

        if (integer < integer2) {
            smallerInt = integer;
            biggerInt = integer2;
        }
        else {
            smallerInt = integer2;
            biggerInt = integer;
        }

        //iterate on the sequence of numbers
        let sum = 0;
        for (i = smallerInt; i <= biggerInt; ++i) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
