import React, { createElement } from 'react'
import Expenses from './component/Expenses/Expenses'
import NewExpense from './component/NewExpense/NewExpense'
const App = () => {
  const Expenses1 = [
    { id: 'm1', title: 'chair', amount: '900', date: new Date() },
    { id: 'm2', title: 'bag', amount: '200', date: new Date(2020, 2, 6) },
    { id: 'm3', title: 'shoe', amount: '1200', date: new Date(2021, 3, 7) },
    { id: 'm4', title: 'pc', amount: '2000', date: new Date(2023, 4, 8) },
  ]
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "let's get started"),
  //   createElement(Expenses, { prop: Expenses1 }),
  // )
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense />
      <Expenses prop={Expenses1} />
    </div>
  )
}

export default App
