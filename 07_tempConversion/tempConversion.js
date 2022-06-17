const ftoc = function (fDegrees) {
  //Fahrenheit to Celsius, subtract 32 and multiply 
  //by . 5556 (or 5/9).
  let cDegrees = (((fDegrees - 32) * 5) / 9);
  //round to one decimal place (returns a string)
  cDegrees = cDegrees.toFixed(1);
  //turn string to a number type
  cDegrees = parseFloat(cDegrees);
  return cDegrees;
};

const ctof = function (cDegrees) {
  //multiply by 1.8 (9/5) and add 32
  let fDegrees = ((cDegrees) * (9 / 5) + 32);
  //round to one decimal place (returns a string)
  fDegrees = fDegrees.toFixed(1);
  //turn string to a number type
  fDegrees = parseFloat(fDegrees);
  return fDegrees;

};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
