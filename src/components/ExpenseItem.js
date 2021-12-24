import "../css/ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props){
    const data = props.item;
    let date = data.date;
    let title = data.name;
    let price = data.price;
    return (
        <div className="expense-item">
            <div className="expense-date"><ExpenseDate date = {date}/></div>
            <div className="expense-name">{title}</div>
            <div className="expense-cost">${price}</div>
        </div>
    );
}

export default ExpenseItem;