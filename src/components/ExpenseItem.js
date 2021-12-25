import "../css/ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props){
    const data = props.item;
    console.log(props);
    let date = data.dates;
    let title = data.names;
    let price = data.costs;
    return (
        <div className="expense-item">
            <div className="expense-date"><ExpenseDate date = {date}/></div>
            <div className="expense-name">{title}</div>
            <div className="expense-cost">${price}</div>
        </div>
    );
}

export default ExpenseItem;