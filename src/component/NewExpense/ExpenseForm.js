import React from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <input type='text' />
          <label>Title</label>
        </div>
        <div className='new-expense__control'>
          <input type='number' min='0.01' step='0.01' />
          <label>amount</label>
        </div>
        <div className='new-expense__control'>
          <input type='date' min='2020-01-01' max='2023-12-31' />
          <label>Date</label>
        </div>
      </div>
      <button type='submit'> Add Expense</button>
    </form>
  )
}
export default ExpenseForm
