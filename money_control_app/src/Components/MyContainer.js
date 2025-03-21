import "../css/MyContainerCSS.css"
import MonthlyPage from './MonthlyPage';
import DailyPage from './DailyPage';
import { Route, Routes } from 'react-router-dom';
import { totalIncomeAndExpense } from "../data";
import data from "../data";
import ExpenseForm from "./ExpenseForm";


const MyContainer = ({date, mode}) => {
    let income=0;
    let expense=0;
    
    if(mode==="monthly"){
        if(data[date.year]!==undefined){
            income = totalIncomeAndExpense[date.year]["yearly"]["income"];
            expense = totalIncomeAndExpense[date.year]["yearly"]["expense"];
        }
    }
    if(mode==="daily"){
        if(data[date.year]!==undefined && data[date.year][date.month]!==undefined){
            income = totalIncomeAndExpense[date.year][date.month]["monthly"]["income"];
            expense = totalIncomeAndExpense[date.year][date.month]["monthly"]["expense"];
        }
    }
    let savings=income-expense;
    return (
        <div className="myContainer">
            <div className="content">
                <Routes>
                    <Route path="/Daily" 
                        element={<DailyPage month={date.month} year={date.year}/>} />
                    <Route path="/Monthly" element={<MonthlyPage year={date.year}/>} />
                    <Route path="/AddExpense" element={<ExpenseForm/>} />
                </Routes>
                
            </div>
            <div className="summary">
                <div>
                    <p>Income</p>
                    <p>{income}</p>
                </div>
                <div>
                    <p>Expense</p>
                    <p>{expense}</p>
                </div>
                <div>
                    <p>Savings</p>
                    <p>{savings}</p>
                </div>
            </div>
        </div>
    
    )
}

export default MyContainer;