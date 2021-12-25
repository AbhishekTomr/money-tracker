import { useState } from "react";
import Filter from "./Filter";
import "../css/ExpenseReports.css"


function ExpenseReports(props) {
    
    let [dispData,setData] = useState("2020");


    function displayFilter(data) {
        setData(data);
        props.onFilterChangeHandler(data);
    }

    return (
        <div className="reports-status">
        <div className="reports-filter">
         <Filter yearVal={dispData} sendData = {displayFilter}/>
        </div>
        <div className="reports">{dispData}</div>
        </div>
    );
}

export default ExpenseReports;