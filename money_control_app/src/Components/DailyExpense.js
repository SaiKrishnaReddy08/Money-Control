import { MonthName } from "../data";


const DailyExpense= ({date, month, year, expenses}) => {
    return (
        <div className="daily-expense-box">
            <li>{date} {MonthName[month]} {year}</li>
            <ul>
                {
                    Object.entries(expenses).map((expense)=>{
                        return <li className="expense-item" key={expense[0]}>
                            <i>{expense[1].category} </i>
                            <b style={{color:expense[1].type==="expense"?"red":"green"}}>{expense[1].amount}</b>
                        </li>
                    })
                }
            </ul>
        </div>
        
    )
}

export default DailyExpense;