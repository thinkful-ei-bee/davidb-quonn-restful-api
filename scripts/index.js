/* global shoppingList, store */
"use strict";

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create("apples"));

fetch("https://thinkful-list-api.herokuapp.com/ei-student/items")
  .then(res => res.json())
  .then(data => console.log(data));

api.getItems().then(res => console.log(res));

api
  .createItem("pears")
  .then(res => res.json())
  .then(newItem => {
    return api.getItems();
  })
  .then(res => res.json())
  .then(items => {
    console.log(items);
  });
