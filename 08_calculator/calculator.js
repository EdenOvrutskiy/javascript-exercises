const add = function (addend, addend2) {
  return (addend + addend2);

};

const subtract = function (minued, subtrahend) {
  return (minued - subtrahend);

};

const sum = function (array) {
  /*easy no array method way
  let sum = 0;
  for (number of array) {
    sum += number;
  }
  return sum;
  */
  //using array method:
  const sum = array.reduce((sum, number) => (
    sum += number
  ), 0);
  return sum;
};

const multiply = function (array) {
  //non array-method way:
  //CANNOT initialize something to 0, it will break multiplication.
  /*
  let product = array[0]; //this will be 0 only when necessary.
  //start multiplying from the next index 
  for (let i = 1; i < array.length; ++i) {
    product *= array[i];
  }
  return product;
  */

  //using array method:
  const product = array.reduce((product, factor) => (
    product *= factor
  ));
  return product;

};

const power = function (base, exponent) {
  return (base ** exponent);

};

const factorial = function (n) {
  //factorial:
  //loop: start, end, change
  //n - given
  //n will be subtracted 1 
  //product will grow bigger
  /*
  if (n != 0 && n != 1) {
    //multiply n by (n - 1)
    let product = n * (n - 1);
    //continue until n == 1
    --n;
    while (n != 1) {
      product = product * (n - 1);
      --n;
    }
    return product;
  }
  else {
    return 1;
  }
  //note: factorial of 0 is 1, for some reason.

  /*
  let result = 0;
  if (number != 0) {
    while (number > 1) { //continue until the factor is 1
      //I'm assuming input is a positive number 
      result = result + (number * (number - 1));
      --number;
    }
  }
  else {
    return 1;
  }

  return result;
  //wait, the factorial of 0 is 1, right?

  //maybe the condition should be attached to the number that's
  //decreasing, not the multiply-by part
  */
  //recursion method
  if (n > 1) {
    return n * factorial(n - 1);
  }
  else {
    return 1;
  }


};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
