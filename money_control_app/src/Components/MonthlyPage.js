import { useState } from "react"
import data from "../data.js"
import { MonthName } from "../data.js"
import { BarChart } from '@mui/x-charts/BarChart';

const MonthlyPage = ({year}) => {
    const [chartMode, setChartMode] = useState(false);
    const income=[]
    const expenses = []
    for(let month=0; month<12; month++){
        income[month]=0;
        expenses[month]=0;
        if(data[year]!==undefined && data[year][month]!==undefined){
            for(let dailyRecord of Object.values(data[year][month])){
                
                for(let record of Object.values(dailyRecord)){
                    
                    if(record.type==="expense"){
                        expenses[expenses.length-1]+=record.amount;
                    }
                    else{
                        income[income.length-1]+=record.amount;
                    }
                }
            }
        }
        
    }
    console.log(expenses, income)
    return (
        <>
            <button onClick={()=>{setChartMode(!chartMode)}} style={{position:"absolute", right:"10px"}}>{chartMode ? "List" : "Chart"}</button>
            {!chartMode &&
                <ul style={{flexGrow:1,}}>
                    {
                        income.map((value, index)=>{
                            return <li key={index} style={{display:"flex", justifyContent:"center"}}>
                                    <div style={{width:"200px"}}>{MonthName[index]}</div> 
                                    <div style={{width:"200px", textAlign:"center"}} >{value}</div> 
                                    <div style={{width:"200px", textAlign:"center"}}>{expenses[index]}</div>
                                </li>
                        })
                    }
                    
                </ul>
            }
            {chartMode && 
                <div style={{marginTop:"25px"}}>
                    <BarChart
                        width={800}
                        height={300}
                        xAxis={[{ scaleType: 'band', data: MonthName }]}
                        series={[
                        { data: income, label:"income" },
                        { data: expenses, label:"expense" }
                        ]} 
                    />
                </div>
                
            }
        </>
        
    );
}

export default MonthlyPage;