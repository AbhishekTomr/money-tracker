import '../css/App.css';
import { useState } from 'react';
import Expenses from './Expenses'
import ExpenseForm from './ExpenseForm';
import ExpenseReports from './ExpenseReports';

function App() {
  let [yearFilter,changeYear] = useState('')

  const data = [
    {
      date: new Date(1996,3,21),
      name : "New TV",
      price : 37.5
    },
    {
      date: new Date(1992,4,3),
      name : "Bike",
      price : 80
    },
    {
      date: new Date(1996,3,21),
      name : "House",
      price : 50000
    }
  ]
  function AddItem(newItem) {
      console.log("component App",newItem);    
  }
  let onFilterChange = function(newYear){
    changeYear(newYear);
  }

  return (
    <div className="App"> 
      <ExpenseForm addExpense = {AddItem}/>
      <ExpenseReports onFilterChangeHandler={onFilterChange}/>
      <Expenses data = {data}
        year={yearFilter}/>
    </div>
  );
}

export default App;
