import Bars from "./Bars";
import "../css/Reports.css"

function Reports(props){
    let Max = 0;
    let Bar = [
        {label: "Jan",
          cost:0
        },
        {
          label: "Feb",
          cost:0
        },
        {
          label: "Mar",
          cost:0
        },
        {label: "Apr",
          cost:0
        },
        {label: "May",
          cost:0
        },
        {label: "Jun",
          cost:0
        },
        {label: "Jul",
          cost:0
        },
        {label: "Aug",
          cost:0
        },
        {label: "Sep",
          cost:0
        },
        {label: "Oct",
          cost:0
        },
        {label: "Nov",
          cost:0
        },
        {label: "Dec",
          cost:0
        }
    ]

    props.data.forEach(function(item){
      Bar[new Date(item.dates).getMonth()].cost += Number(item.costs);  
    })
    let costCount = props.data.map(function(item){
        return(item.costs);
    })
    Max= Math.max(...costCount);

        
    
    return(
      <div className="main-bar">
      <Bars data={Bar} Max={Max}/>
      </div>  
    )
}

export default Reports;