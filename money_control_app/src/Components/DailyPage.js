import data from "../data.js"
import "../css/daily-page.css"
import DailyExpense from "./DailyExpense.js";

const DailyPage = ({month, year}) => {
    const isValid = data[year]!==undefined;
    const filteredData = isValid ? data[year][month]: undefined;
    return (
        
        <div className="daily-page">
            {
            (filteredData!==undefined)?
                Object.entries(filteredData).map((entry)=>{
                    return <DailyExpense key={entry[0]+month+year}
                                date={entry[0]} 
                                month={month} 
                                year={year} 
                                expenses={entry[1]}
                            />
                })
                :<h3 style={{textAlign:"center"}}>No Income or Expense</h3>
            }
            
        </div>
    )
}

export default DailyPage;

