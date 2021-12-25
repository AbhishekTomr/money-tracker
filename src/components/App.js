import '../css/App.css';
import { useState } from 'react';

import Expenses from './Expenses'
import ExpenseForm from './ExpenseForm';
import ExpenseReports from './ExpenseReports';

function App() {
  let [yearFilter,changeYear] = useState('')

  const [data,changeData] = useState([]);

  function AddItem(newItem) {
    changeData(function(previousState){
      return(
        [newItem , ...previousState]
      )
    })      
  }
  let onFilterChange = function(newYear){
    changeYear(newYear);
  }


  return (
    <div className="App"> 
      <ExpenseForm addExpense = {AddItem}/>
      <ExpenseReports data = {data}
      year={yearFilter}
      onFilterChangeHandler={onFilterChange}/>
      <Expenses data = {data}
        year={yearFilter}/>
    </div>
  );
}

export default App;
