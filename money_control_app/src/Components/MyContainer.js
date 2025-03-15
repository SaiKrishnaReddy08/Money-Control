import "../css/MyContainerCSS.css"
import MonthlyPage from './MonthlyPage';
import DailyPage from './DailyPage';
import CalenderPage from './CalenderPage';
import { Route, Routes } from 'react-router-dom';

const MyContainer = () => {
    return (
        <div className="myContainer">
            <div className="content">
                <Routes>
                    <Route path="/Daily" element={<DailyPage/>} />
                    <Route path="/Calender" element={<CalenderPage/>}/>
                    <Route path="/Monthly" element={<MonthlyPage/>}/>
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