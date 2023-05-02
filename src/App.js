import ExpenseItem from './component/ExpenseItem.js'
function App() {
  const Expenses = [
    { id: 'm1', title: 'chair', amount: '900', date: new Date() },
    { id: 'm2', title: 'bag', amount: '200', date: new Date(2020, 2, 6) },
    { id: 'm3', title: 'shoe', amount: '1200', date: new Date(2021, 3, 7) },
    { id: 'm4', title: 'pc', amount: '2000', date: new Date(2023, 4, 8) },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={Expenses[0].title}
        amount={Expenses[0].amount}
        date={Expenses[0].date}
      ></ExpenseItem>{' '}
      <ExpenseItem
        title={Expenses[1].title}
        amount={Expenses[1].amount}
        date={Expenses[1].date}
      ></ExpenseItem>{' '}
      <ExpenseItem
        title={Expenses[2].title}
        amount={Expenses[2].amount}
        date={Expenses[2].date}
      ></ExpenseItem>{' '}
      <ExpenseItem
        title={Expenses[3].title}
        amount={Expenses[3].amount}
        date={Expenses[3].date}
      ></ExpenseItem>
    </div>
  )
}

export default App
