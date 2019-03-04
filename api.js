'use strict';
/* global $ */

const api = ( () =>{
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/fgdl';
  
  const getItems = () =>{
    return fetch(BASE_URL+'/items');
  };

  const createItem = name =>{
    const newItem = JSON.stringify({
      name: name,
    });

    const option = {
      method: 'POST', 
      headers: new Headers ({
        'Content-type': 'application/json'
      }),
      body: newItem
    };

    const updateItem = (id,updateData) =>{
      const option = {
        method: 'PATCH', 
        headers: new Headers ({
          'Content-type': 'application/json'
        }),
        body: JSON.stringify(updateData)
      };
      return fetch(BASE_URL+`/items/${id}`, option);
    };
  };

  const deleteItem = () =>{};

  return {
    getItems: getItems,
    createItem: createItem,
    updateItem: updateItem,
  };
})();