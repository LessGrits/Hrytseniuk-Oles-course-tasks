'use strict';
//
// const array = [true, 'hello', 5, 12, -200, false, false, 'word'];

const countTypesInArray = array => {
  const obj = {};
  for (const el of array) {
    const type = typeof el;
    const num = obj[type] || 0;
    obj[type] = num + 1;
  }
  return obj;
};

module.exports = { countTypesInArray };
