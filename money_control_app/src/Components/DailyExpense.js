import { MonthName } from "../data";


const DailyExpense= ({date, month, year, expenses}) => {
    return (
        <div className="daily-expense-box">
            <li>{date} {MonthName[month]} {year}</li>
            <ul>
                {
                    expenses.map((expense)=>{
                        return <li className="expense-item">
                            <i>{expense.category} </i>
                            <b style={{color:expense.type==="expense"?"red":"green"}}>{expense.amount}</b>
                        </li>
                    })
                }
            </ul>
        </div>
        
    )
}

export default DailyExpense;