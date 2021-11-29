import "../css/ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(){
    return (
        <div className="expense-item">
            <div className="expense-date"><ExpenseDate/></div>
            <div className="expense-name">New TV</div>
            <div className="expense-cost">$ 32</div>
        </div>
    );
}

export default ExpenseItem;