import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];

/**
 * transactions: {
    housing: [ 
      { 
        category: 'housing', 
        description: 'rent', 
        amount: 400, 
        id: 123 
      }
    ],
    food: [ 
      { 
        category: 'food', 
        description: 'groceries on 1/12/2021', 
        amount: 50, 
        id: 456 
      }
  }
 */
const initialState = Object.fromEntries(
  CATEGORIES.map((category) => [category, []])
);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) =>{
      //action.payload - {category: category,description: description,amount: parseFloat(amount),id: uuidv4()
      //state - transactions
      state[action.payload.category].push(action.payload);
    },
    deleteTransaction: (state, action) =>{
      //action.payload - transaction
      //state - transactions
      const { category, id } = action.payload;
      state[category] = state[category].filter(trans => trans.id !== id);
    }
  }
});

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) =>
  Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);

export const {addTransaction , deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
