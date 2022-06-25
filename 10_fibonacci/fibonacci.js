const fibonacci = function (position) {
    //1, 1, 2, 3, 5, ...
    //return the nth number
    if (position < 0) {
        return "OOPS";
    }
    position = parseInt(position);

    //create the fibbonacci sequence:
    //start with 1, 1
    let fib = [1, 1];
    //the next number is the sum of:
    //last + one before that
    while (fib.length < position) {
        let lastNumberIndex = fib.length - 1;
        let secondToLastNumberIndex = fib.length - 2;
        let lastNumber = fib[lastNumberIndex];
        let secondToLastNumber = fib[secondToLastNumberIndex];
        let nextNum = lastNumber + secondToLastNumber;
        fib.push(nextNum);
    }
    //console.table(fib);
    indexOfInputNum = position - 1;
    return fib[indexOfInputNum];
};
console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
