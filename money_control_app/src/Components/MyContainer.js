import "../css/MyContainerCSS.css"
import MonthlyPage from './MonthlyPage';
import DailyPage from './DailyPage';
import CalenderPage from './CalenderPage';
import { Route, Routes } from 'react-router-dom';


import ExpenseForm from "./ExpenseForm";


const MyContainer = ({date}) => {
    return (
        <div className="myContainer">

            <div className="content">
                <Routes>
                    <Route path="/Daily" 
                        element={<DailyPage month={date.month} year={date.year}/>} />
                    <Route path="/Calender" element={<CalenderPage/>} />
                    <Route path="/Monthly" element={<MonthlyPage/>} />
                    <Route path="/AddExpense" element={<ExpenseForm/>} />
                </Routes>
                
                </div>
            <div className="summary">
                <div>Income</div>
                <div>Expense</div>
                <div>Savings</div>
            </div>
        </div>
    
    )
}

export default MyContainer;