import {NavLink} from "react-router-dom"
import "../css/HeaderCSS.css"
import rightArrow from "../static/right-arrow.png"
import leftArrow from "../static/left-arrow.png"

import {MonthName} from "../data";

const MyHeader = ({date, setDate, mode, setMode}) => {

    const decreaseMonth=()=>{
        setDate((old)=>{
            if(mode==="monthly"){
                return {...old, year:old.year-1};
            }
            else if(mode==="daily"){
                if(old.month===0){
                    return {...old, month:11, year:old.year-1};
                }
                return {...old, month:old.month-1};
            }
        })
    }

    const increaseMonth=()=>{
        setDate((old)=>{
            if(mode==="monthly"){
                return {...old, year:old.year+1};
            }
            else if(mode==="daily"){
                if(old.month===11){
                    return {...old, month:0, year:old.year+1};
                }
                return {...old, month:old.month+1};
            }
        })
    }

    return (
        <nav id="navbar">
            
            <div className="year-month-indicator">
                <img src={leftArrow} alt="left arrow" onClick={decreaseMonth}/> 
                <div style={{width:"130px"}}>{mode==="daily" && MonthName[date.month]} {date.year}</div>
                <img src={rightArrow} alt="right arrow" onClick={increaseMonth}/>
            </div>
            <li><NavLink to="/Daily" onClick={()=>setMode("daily")}>Daily</NavLink></li>
            <li><NavLink to="/Monthly" onClick={()=>setMode("monthly")}>Monthly</NavLink></li>
            <li><NavLink to="/AddExpense">Add Income/Expense</NavLink></li>
            
        </nav>
    );
}

export default MyHeader;