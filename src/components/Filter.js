import "../css/Filter.css"

function Filter(props) {

    let classes = ''
    classes = "year-filter "+props.className;
    let defVal = new Date().getFullYear();
    function onChangeHandler(event) {
        props.sendData(event.target.value);
         
    }

    return(
        <select className={classes} onChange={onChangeHandler} value={props.yearVal}>
        <option value={defVal-2}>{defVal-2}</option>
        <option value={defVal-1}>{defVal-1}</option>
        <option value={defVal}>{defVal}</option>
        <option value={defVal+1}>{defVal+1}</option>
        <option value={defVal+2}>{defVal+2}</option>
       </select>
    );
}

export default Filter;