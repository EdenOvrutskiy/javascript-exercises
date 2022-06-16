//TODO
//enable large numbers - maybe bigInt can help?
const sumAll = function (integer, integer2) {
    //return the sum of integer +(integer + 1).. 
    //                           +integer2)
    let sum = 0;
    for (i = integer; i <= integer2; ++i) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
