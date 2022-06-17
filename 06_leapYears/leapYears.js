const leapYears = function (year) {
    //check if divisible by 4 (1984, 2004)
    if (year % 4 == 0) {
        //if also(AND) divisible by 100, not a leap year
        if (year % 100 == 0) {
            //unless it's also(AND) divisible by 400
            if (year % 400 == 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;


/*
leap years:
* not divisible by 100 (1800, 1900)
  * unless divisible by 400 (2000, 1600)
*/