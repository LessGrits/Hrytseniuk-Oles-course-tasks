'use strict';

const rangeOdd = (start, end) => {
  const len = Math.ceil((end - start) / 2);
  if (len < 0) return [];
  const arr = new Array(len);
  let i = 0;
  for (let n = start; n <= end; n++) {
    if (n % 2 !== 0) {
      arr[i++] = n;
    }
  }
  return arr;
};

module.exports = { rangeOdd };

