'use strict';

const range = (start, end) => {
  const arr = [];
  for (; start <= end; start++) {
    arr.push(start);
  }
  return arr;
};

console.log(range(0, 1));

module.exports = { range };
