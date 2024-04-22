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
 * budgets: [ 
    { category: 'housing', amount: 400 },
    { category: 'food', amount: 100 },
    ...
  ]
 */
const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
}));

//create slice
const budgetSlice = createSlice({
  name: 'budgets',
  initialState: initialState,
  reducers: {
    editBudget: (state, action) =>{//update state, Immer will manage
      //action.payload - { category: budget.category, amount: amount }
      //state - budgets
      const { category, amount } = action.payload;

      //Method 1
      //const budgetToUpdate = state.find(budget => budget.category === category);
      //budgetToUpdate.amount = amount;//objects are stred by reference, this updates the budgete in the state

      //Method 2
      const indexToUpdate = state.findIndex(budget => budget.category === category);
      state[indexToUpdate].amount = amount;
    },
  }
}); 

export const selectBudgets = (state) => state.budgets;

export const { editBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
