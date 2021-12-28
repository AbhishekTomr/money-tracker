import { useState } from "react/cjs/react.development";
import "../css/Expenses.css";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import Filter from "./Filter";

function Expenses(props){
    let data = props.data;
    let [year,changeYear] = useState("2021");

    let data2 = data.filter(function(item){
      return(new Date(item.dates).getFullYear().toString() === year);
    })
    

    let setFilter = function(yearValue){
      changeYear(yearValue);
    }


    return(
     <Card className = "card">
     <div className="filter-section">
       <h3>Filter By Year :</h3>
       <Filter sendData={setFilter} yearVal = {year} className='year-filter-card'/>
     </div>
          {data2.length?
            data2.map(function(expItem) {
             return <ExpenseItem key={Math.random()*100000} item= {expItem} deleteMe={props.deleteMe}/>  
          }):
          <h2 className="nodata">No Expense Data</h2> 
    }
     </Card>
    );
    
}

export default Expenses;