const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  return arr.reduce((acc, ele) => acc += ele, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, ele) => acc *= ele, 1)
};

const power = function(base, power) {
  ans = 1
	for (let i = 1; i <= power; i++) {
    ans *= base
  }

  return ans
};

const factorial = function(num) {
	ans = 1

  while (num > 1) {
    ans *= num
    num--
  }

  return ans
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
