import { useState } from "react";
import Filter from "./Filter";
import Reports from "./Report";
import "../css/ExpenseReports.css"



function ExpenseReports(props) {
    
    let [dispData,setData] = useState("2021");    
    let data = props.data;
    let filterData = data.filter(function(item){
        
        return(new Date(item.dates).getFullYear().toString() === dispData.toString());
    })
    
    function displayFilter(data) {
        setData(data);
        props.onFilterChangeHandler(data);
    }

    return (
        <div className="reports-status">
        <div className="reports-filter">
         <Filter yearVal={dispData} sendData = {displayFilter}/>
        </div>
        <div className="reports">
        <Reports data = {filterData}/>
        </div>
        </div>
    );
}

export default ExpenseReports;