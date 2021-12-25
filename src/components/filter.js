import "../css/Filter.css"

function Filter(props) {

    function onChangeHandler(event) {
        props.dispFilter(event.target.value);
    }

    return(
        <select className="year-filter" onChange={onChangeHandler}>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        </select>
    );
}

export default Filter;