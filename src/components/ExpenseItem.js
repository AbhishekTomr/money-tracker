import "../css/ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";


function ExpenseItem(props){
    const data = props.item;
    let date = data.dates;
    let title = data.names;
    let price = data.costs;

    let onClickHandler = function()
    {
        props.deleteMe(data.id);
    }

    return (
        <div className="expense-item">
            <div className="expense-date"><ExpenseDate date = {date}/></div>
            <div className="expense-name">{title}</div>
            <div className="expense-cost">${price}</div>
            <div className="delete-item" onClick={onClickHandler}>
                <p role='button'>&#10060;	
            </p></div>
        </div>
    );
}

export default ExpenseItem;