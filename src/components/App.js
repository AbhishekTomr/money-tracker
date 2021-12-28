import '../css/App.css';
import { useState } from 'react';

import Expenses from './Expenses'
import ExpenseForm from './ExpenseForm';
import ExpenseReports from './ExpenseReports';

function App() {
  if(!localStorage.getItem('data'))
  {
    localStorage.setItem('data',JSON.stringify([]));
  }
  let [data,changeData] = useState(JSON.parse(localStorage.getItem('data')));
  let [yearFilter,changeYear] = useState('')

  function AddItem(newItem) {
    changeData(function(previousState){
      return(
        [newItem , ...previousState]
      )
    })
    let newValue = [newItem,...data]
    localStorage.setItem('data',JSON.stringify(newValue)); 
  }
  let onFilterChange = function(newYear){
    changeYear(newYear);
  }
  
  let deleteMe = function(id){
    let index = data.findIndex(function(item){
       return (item.id === id)
    })

    let newData = JSON.parse(localStorage.getItem('data'));
    newData.splice(index,1);
    localStorage.setItem('data',JSON.stringify(newData));
    changeData(newData);
  }

  return (
    <div className="App">
      <header className='head'>
      <h1>Expense Manager</h1>
      <p>Your one stop to manage all your expense</p>
      </header>   
      <main>
      <ExpenseForm addExpense = {AddItem}/>
      <ExpenseReports className="app-content" data = {data}
      year={yearFilter}
      onFilterChangeHandler={onFilterChange}/>
      <Expenses data = {data}
        year={yearFilter}
        deleteMe = {deleteMe}/>
      </main>
      <div className="screen-warning">
        <h2>Please increase your Screen Size</h2>
      </div>
    </div>
  );
}

export default App;
