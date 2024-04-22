import React from 'react';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';

// Import the Cart component here.
import { Cart } from '../features/cart/Cart.js';

// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  //Filters the inventory list based on the search term.
  const filteredInventory = getFilteredInventory(state.inventory, state.searchTerm);

  /**
   * Presentational components are rendered with:-
   * 1. their slice of state data from the store passed through index.js to <App/>
   * 2. the dispatch method from the store, so that components can interact with the store through actions.
   */
  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <SearchTerm
        SearchTerm={state.SearchTerm}
        dispatch={dispatch}
      />

      <Inventory
        //inventory={state.inventory}
        inventory={filteredInventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};


/* Utility Helpers */

function getFilteredInventory(inventory, searchTerm) {
  return inventory.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
}
