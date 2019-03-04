'use strict';

const api = (() =>{
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/dbqb';
  const getItems = function(){
    return Promise.resolve('A successful response!');
  };
  return {
    getItems: getItems
  };
})();