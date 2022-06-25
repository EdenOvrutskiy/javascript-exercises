const palindromes = function (string) {
    //does the string read the same from both ends?
    //remove punctuation:
    const punctuationMarks = ['!', ',', ';', ' ', '.'];
    let noPunctString = string;
    for (mark of punctuationMarks) {
        noPunctString = noPunctString.replaceAll(mark, '');
    }
    console.log(noPunctString);
    string = noPunctString;
    //remove capital letter difference
    string = string.toLowerCase();


    //generate reverse 
    //reverse() works on an array
    //so turn string into an array
    stringArray = Array.from(string);
    arrayCopy = stringArray.slice();
    arrayCopy.reverse();
    //turn each array back to a string to compare
    let initialString = stringArray.join("");
    let reversedString = arrayCopy.join("");
    return (initialString === reversedString);





};
//console.log(palindromes('R,a;ce!car!'));


// Do not edit below this line
module.exports = palindromes;
