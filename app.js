"use strict";

const api = (() => {
  const BASE_URL = "https://thinkful-list-api.herokuapp.com/dbqb";
  const getItems = function() {
    return Promise.resolve("A successful response!");
  };

  const createItem = function(name) {
    const newItem = JSON.stringify({
      name: name
    });
  };

  const options = {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: createItem.newItem
  };

  fetch(BASE_URL + "/items", options)
    .then(res => res.json())
    .then(data => data);

  // fetch("https://thinkful-list-api.herokuapp.com/dbqb/items", options)
  //   .then(res => res.json())
  //   .then(data => data);
  return {
    getItems: getItems,
    createItem: createItem
  };
})();
