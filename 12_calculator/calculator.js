const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  const initialValue = 0;
	return arr.reduce((total, element) => total + element, initialValue)
};

const multiply = function(a) {
  const initialValue = 1;
  return a.reduce((total, element) => total * element, initialValue)
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(arr) {
  let total = 1;
	for (let i = 1; i <= arr; i++) {
    total *= i;
  }
  return total;
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
