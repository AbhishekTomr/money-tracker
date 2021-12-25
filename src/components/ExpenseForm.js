import React from "react";
import {useState} from "react";
import '../css/ExpenseForm.css'

function ExpenseForm(props) {

    let [name,setName] = useState('');
    let [cost,setCost] = useState('');
    let [date,setDate] = useState('');

    let [formState,changeFormState] = useState(false);


function onNameChangeHandler(event) {
    setName(event.target.value);
}

function onCostChangeHandler(event) {
    setCost(event.target.value);
}

function onDateChangeHandler(event) {
    setDate(event.target.value);
}

function onSubmitHandler(event){
    event.preventDefault();
    let newEntry = {
        names : name,
        costs : cost,
        dates : new Date(date)
    } 

    props.addExpense(newEntry);
    setName('');
    setCost('');
    setDate('');
    changeStatus();
    
}

function changeStatus(){
    if(formState){
        changeFormState(false);
    }
    else{
        changeFormState(true);
    }
}


if(formState===false){
    return(
        <div className="add-expense">
        <button className="addExpenseButton" onClick={changeStatus}>Add Expense</button>
        </div>
    )
}


return (
    <form className="expense-form" onSubmit={onSubmitHandler}>
    <div className="expense-feild">
    <label>Expense Name :</label>
    <input type='text' onChange={onNameChangeHandler} value={name} />
    </div>
    <div className="expense-feild">
    <label>Expense Cost :</label>
    <input type='number' step='0.5' min='0' onChange={onCostChangeHandler} value={cost} />
    </div>
    <div className="expense-feild">
    <label>Expense Date :</label>
    <input type='date' onChange={onDateChangeHandler} value={date}/>
    </div>
    <div className="expense-feild btn">
    <button type='submit' >Add Expense</button>
    <button type="button" onClick={changeStatus} >Cancel</button>
    </div>
    </form>
);
    
}

export default ExpenseForm;