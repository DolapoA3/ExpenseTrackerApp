import { View, StyleSheet } from 'react-native';

import { GlobalStyles } from '../../constants/styles';
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
    date: new Date('2021-03-22'),
  },
  {
    id: 'e5',
    description: 'Aloe Vera plant',
    amount: 25.89,
    date: new Date('2022-02-18'),
  },
  {
    id: 'e6',
    description: 'A pair of trousers',
    amount: 21.99,
    date: new Date('2021-01-16'),
  },
  {
    id: 'e7',
    description: 'A scarf',
    amount: 5.89,
    date: new Date('2022-10-10'),
  },
  {
    id: 'e8',
    description: 'Some strawberries',
    amount: 4.38,
    date: new Date('2021-03-22'),
  },
  {
    id: 'e9',
    description: 'Aloe Vera plant',
    amount: 25.89,
    date: new Date('2022-02-18'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList  expenses={DUMMY_EXPENSES}/>
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  }
});