import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 21.99,
    date: new Date('2022-10-31'),
  },
  {
    id: 'e3',
    description: 'A scarf',
    amount: 5.89,
    date: new Date('2022-11-01'),
  },
  {
    id: 'e4',
    description: 'Some strawberries',
    amount: 4.38,
    date: new Date('2021-03-22'),
  },
  {
    id: 'e5',
    description: 'Aloe Vera plant',
    amount: 25.89,
    date: new Date('2022-10-28'),
  },
  {
    id: 'e6',
    description: 'A pair of trousers',
    amount: 21.99,
    date: new Date('2021-01-16'),
  },
  {
    id: 'e7',
    description: 'Water',
    amount: 5.89,
    date: new Date('2022-10-29'),
  },
  {
    id: 'e8',
    description: 'Some strawberries',
    amount: 4.38,
    date: new Date('2021-03-22'),
  },
  {
    id: 'e9',
    description: 'Mop',
    amount: 25.89,
    date: new Date('2022-10-29'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>; 
}

export default ExpensesContextProvider;
