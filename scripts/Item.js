'use strict';
/* global cuid */

// eslint-disable-next-line no-unused-vars
const Item = (function(){

  const validateName = name =>{
    if (!name) throw new TypeError('Name must not be blank');
  };

  const create = name => {
    return {
      id: cuid(),
      name,
      checked: false
    };
  };

  return {
    validateName,
    create,
  };
  
}());
