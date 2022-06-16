const reverseString = function (string) {
    //reversing a string
    //could access the last letter with a negative index
    //console.log(string.slice(-1));

    //could access the length with a built-in method
    //console.log(string.length);

    //can target a character with index
    //console.log(string[7]);

    //a for (each x in y) loop?
    //for (letter of*? string) {
        //console.log(letter);
    //}
    
    ///I think a countdown loop from last index is fine

    let reversedString = '';
    const lastLetterIndex = string.length - 1;
    for (let i = lastLetterIndex; i >= 0; --i) {
        reversedString += string[i];
    }
    //console.log(reversedString);
    return reversedString;
};
//reverseString("helloSir");

// Do not edit below this line
module.exports = reverseString;
