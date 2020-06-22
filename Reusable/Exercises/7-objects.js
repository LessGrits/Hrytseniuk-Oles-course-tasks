'use strict';

const fn = () => {
  const obj1 = { name: 'First' };
  let obj2  = { name: 'Second' };

  obj1.name = 'newFirst';
  obj2.name = 'newSecond';
  obj2 = { name: 'nEwName' };

};

module.exports = { fn };
