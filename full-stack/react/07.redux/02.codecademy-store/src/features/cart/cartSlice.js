//define actions that can change the state.cart slice, an to handle them in the reducer.
export const addItem = (itemToAdd) => {
    return {
      type: 'cart/addItem',
      payload: itemToAdd,
    };
  };
  
  // Create your changeItemQuantity action creator here.
  export const changeItemQuantity = (name, newQuantity) =>{
    return {
      type: 'cart/changeItemQuantity',
      payload: {name, newQuantity}
    }
  }
  
  const initialCart = {};
  export const cartReducer = (cart = initialCart, action) => {
    switch (action.type) {
      case 'cart/addItem': {
        const { name, price } = action.payload;
  
        // if the item already exists, increase the quantity by 1, otherwise set it to 1
        const quantity = cart[name] ? cart[name].quantity + 1 : 1;
        const newItem = { price, quantity };
  
        // Add the new item to the cart (or replace it if it existed already)
        return { 
          ...cart, 
          [name]: newItem 
        };
      }
      /**
       * Example cart state
        cart = {
          'Hat': { price: 15.99, quantity: 0 },
          'T-Shirt': { price: 15.99, quantity: 2 }
        },
      */
      case 'cart/changeItemQuantity': {
        const { name, newQuantity } = action.payload;
        const itemToUpdate = cart[name];//grab the old item from the cart
        
        // Create a copy of itemToUpdate and update the quantity prop.
        const updatedItem = {
          ...itemToUpdate, //copy all other properties
          quantity: newQuantity //only update quantity
        }
  
        // Return a copy of the cart with the updatedItem included.
        return {
          ...cart,//return all elements of cart
          [name]: updatedItem //with the updated item with new quantitiy, name is key for the updated item.
        };
      }
      default: {
        return cart;
      }
    }
  };