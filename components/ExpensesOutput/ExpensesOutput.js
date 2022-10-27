import { View } from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

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
    date: new Date('2022-01-14'),
  },
  {
    id: 'e3',
    description: 'A scarf',
    amount: 5.89,
    date: new Date('2022-10-10'),
  },
  {
    id: 'e4',
    description: 'Some strawberries',
    amount: 4.38,
    date: new Date('2021-3-22'),
  },
  {
    id: 'e5',
    description: 'Aloe Vera plant',
    amount: 25.89,
    date: new Date('2022-2-18'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
