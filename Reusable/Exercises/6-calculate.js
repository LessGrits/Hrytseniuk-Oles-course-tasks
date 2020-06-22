'use strict';

const average = (first, second) => (first + second) / 2;

const square = n => n * n;

const cube = n => n ** 3;

const calculate = () => {
  const arr = new Array(10);
  for (let i = 0; i <= 9; i++) {
    arr[i] = average(square(i), cube(i));
  }
  return arr;
};

module.exports = { square, cube, average, calculate };
