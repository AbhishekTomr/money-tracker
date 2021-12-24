import "../css/Expenses.css";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props){
    let data = props.data;
    console.log("expenses",props.year);
    return(
     <Card className = "card">
        <ExpenseItem item={data[0]}/>
        <ExpenseItem item={data[1]}/>
        <ExpenseItem item={data[2]}/>
     </Card>
    );
    
}

export default Expenses;