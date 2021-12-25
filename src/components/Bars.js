import "../css/Bars.css"
function Bars(props){
    let Bar = props.data;
    let Max = props.Max; 
    return(
            <div className="BarChart">
            {   
                Bar.map(function(item){
                return(
                    <div key={Math.random()*100000} className="bar">
                        <div className="capsule">
                        <div className="fillVal" style={{height:((item.cost/Max)*100)+ "%"}}></div>
                        </div>
                        <div className="month">{item.label}</div>
                    </div>
                    
                )
            })}
            </div>
    )
       

}

export default Bars;