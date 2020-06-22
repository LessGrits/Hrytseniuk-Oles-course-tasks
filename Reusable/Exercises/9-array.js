'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Homer', phone: '+380999999999' },
  { name: 'Lolita', phone: '+380000000000' },
];

const findPhoneByName = name => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
