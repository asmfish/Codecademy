import React, { useEffect } from 'react';

import {
  calculatePrice,
  getCurrencySymbol,
} from '../../utilities/utilities.js';
import { addItem } from '../cart/cartSlice.js';//Inventory also updates crat slice when user clicks Add to Cart button
import { loadData } from './inventorySlice';

export const Inventory = ({ inventory, currencyFilter, dispatch }) => {
  //this component dispatches loadData() action upon mounting
  //but for the products to show we need to make sure that when state changes occur, the components are re-rendered with most up-to-date data.
  //so in the index.js we need to subscribe the render() method to the store's state changes
  //so here when the dispatch is called the store.inventory is populated with list of products, resulting in store state update
  const onMount = () => {
    dispatch(loadData());
  };
  useEffect(onMount, [dispatch]);

  const onClickHandler = (inventoryItem) => {
    dispatch(addItem(inventoryItem));//action dispatched to the redux store
  };

  if (inventory.length === 0) {
    return <p> Sorry, no products are currently available... </p>;
  }

  return <ul id="inventory-container">{inventory.map(createInventoryItem)}</ul>;

  function createInventoryItem(inventoryItem) {
    const { price, name, img } = inventoryItem;
    const displayPrice = calculatePrice(price, currencyFilter);
    return (
      <li key={name} className="item">
        <img src={img} alt={''} />
        <h3>{name}</h3>
        <h3 className="price">
          {getCurrencySymbol(currencyFilter)}
          {displayPrice.toFixed(2)} {currencyFilter}
        </h3>
        <button
          onClick={() => onClickHandler(inventoryItem)}
          className="add-to-cart-button"
        >
          Add to Cart
        </button>
      </li>
    );
  }
};
