import {NavLink} from "react-router-dom"
import "../css/HeaderCSS.css"
import rightArrow from "../static/right-arrow.png"
import leftArrow from "../static/left-arrow.png"

import {MonthName} from "../data";

const MyHeader = ({date, setDate}) => {
    const decreaseMonth=()=>{
        setDate((old)=>{
            if(old.month===0){
                return {...old, month:11, year:old.year-1};
            }
            return {...old, month:old.month-1};
        })
    }

    const increaseMonth=()=>{
        setDate((old)=>{
            if(old.month===11){
                return {...old, month:0, year:old.year+1};
            }
            return {...old, month:old.month+1};
        })
    }

    return (
        <nav id="navbar">
            
            <div className="year-month-indicator">
                <img src={leftArrow} alt="left arrow" onClick={decreaseMonth}/> 
                <div style={{width:"130px"}}>{MonthName[date.month]} {date.year}</div>
                <img src={rightArrow} alt="right arrow" onClick={increaseMonth}/>
            </div>
            <li><NavLink to="/Daily">Daily</NavLink></li>
            <li><NavLink to="/Calender">Calender</NavLink></li>
            <li><NavLink to="/Monthly">Monthly</NavLink></li>
            <li><NavLink to="/AddExpense">Add Expense</NavLink></li>
            
        </nav>
    );
}

export default MyHeader;