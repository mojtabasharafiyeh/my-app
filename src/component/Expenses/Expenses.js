import React from 'react'
import ExpenseItem from '../Expenses/ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
function Expenses(props) {
  return (
    <Card className='expenses'>
      <ExpenseItem
        title={props.prop[0].title}
        amount={props.prop[0].amount}
        date={props.prop[0].date}
      ></ExpenseItem>{' '}
      <ExpenseItem
        title={props.prop[1].title}
        amount={props.prop[1].amount}
        date={props.prop[1].date}
      ></ExpenseItem>{' '}
      <ExpenseItem
        title={props.prop[2].title}
        amount={props.prop[2].amount}
        date={props.prop[2].date}
      ></ExpenseItem>{' '}
      <ExpenseItem
        title={props.prop[3].title}
        amount={props.prop[3].amount}
        date={props.prop[3].date}
      ></ExpenseItem>
    </Card>
  )
}
export default Expenses
