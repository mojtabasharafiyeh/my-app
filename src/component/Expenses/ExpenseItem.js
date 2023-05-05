import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from '../Expenses/ExpenseDate'
import Card from '../UI/Card'
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  const clickHandler = () => {
    setTitle('updated!')
    // setTimeout(() => {
    //   console.log(title)
    // }, 2000)
  }
  return (
    <Card className='expense-item'>
      <div className='expense-item__description'>
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>change title</button>
      </div>
    </Card>
  )
}
export default ExpenseItem
