import '../css/App.css';
import { useState } from 'react';

import Expenses from './Expenses'
import ExpenseForm from './ExpenseForm';
import ExpenseReports from './ExpenseReports';

function App() {
  let [yearFilter,changeYear] = useState('')
  if(!localStorage.getItem('data'))
  {
    localStorage.setItem('data',JSON.stringify([]));
  }
  const [data,changeData] = useState(JSON.parse(localStorage.getItem('data')));


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
    if(index !== (-1))
    {
      let temp = data;
      temp.splice(index,1);
      localStorage.setItem('data',JSON.stringify(temp));
    
    }
    if(index !== (-1))
    {
      changeData(function(previousState){
        return(
          data.splice(index,1)
        )
      })
    }
  }

  return (
    <div className="App">   
      <ExpenseForm addExpense = {AddItem}/>
      <ExpenseReports className="app-content" data = {data}
      year={yearFilter}
      onFilterChangeHandler={onFilterChange}/>
      <Expenses data = {data}
        year={yearFilter}
        deleteMe = {deleteMe}/>
      <div className="screen-warning">
        <h2>Please increase your Screen Size</h2>
      </div>
    </div>
  );
}

export default App;
