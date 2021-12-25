import "../css/Filter.css"

function Filter(props) {

    let classes = ''
    classes = "year-filter "+props.className;
    function onChangeHandler(event) {
        props.sendData(event.target.value);
         
    }

    return(
        <select className={classes} onChange={onChangeHandler} value={props.yearVal}>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        </select>
    );
}

export default Filter;