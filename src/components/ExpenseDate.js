import '../css/ExpenseDate.css'

function ExpenseDate(props){
    const date = new Date(props.date);
    let month = date.toLocaleString('en-US',{month:'long'})
    let day = date.toLocaleString('en-US',{day:'2-digit'})
    let year = date.getFullYear();
    return (
        <div className="expense-datec">
        <div className="d-month">{month}</div>
        <div className="d-year">{year}</div>
        <div className="d-date">{day}</div>
        </div>
    );
}

export default ExpenseDate; 
