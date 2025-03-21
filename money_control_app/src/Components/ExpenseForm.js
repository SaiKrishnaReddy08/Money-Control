import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from "react";
import data from "../data.js";
import { totalIncomeAndExpense } from '../data.js';

const ExpenseForm = ()=>{
    const [formData, setFormData] = useState({date:dayjs(new Date()), amount:"", category:"", description:"", type:""});
    
    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const year = formData.date.$d.getFullYear();
        const month = formData.date.$d.getMonth();
        const day = formData.date.$d.getDate();
    
        if(data[year]===undefined){
            data[year] ={}
            totalIncomeAndExpense[year]={yearly:{income:0, expense:0}};
        }
        if(data[year][month]===undefined){
            data[year][month]={}
            totalIncomeAndExpense[year][month]={monthly:{income:0, expense:0}};
        }
        if(data[year][month][day]===undefined){
            data[year][month][day]={}
            totalIncomeAndExpense[year][month][day]={daily:{income:0, expense:0}};
        }
        const date = data[year][month][day];
        let id = Math.max.apply(null, Object.keys(date))+1;
        if(id<0){id=1};
        data[year][month][day][id]={type:formData.type, "amount":formData.amount, "category": formData.category, description:formData.description}
        
        totalIncomeAndExpense[year]["yearly"][formData.type]+=formData.amount;
        totalIncomeAndExpense[year][month]["monthly"][formData.type]+=formData.amount;
        totalIncomeAndExpense[year][month][day]["daily"][formData.type]+=formData.amount;
        
        setFormData({date:dayjs(new Date()), amount:"", category:"", description:"", type:""});
        console.log(data);
        
    }

    const handleRadioButton = (e)=>{
        setFormData((old)=>{
            return {...old, type:e.target.value};
        })
    }

    return (
        <form className="addExpenseBox" onSubmit={handleFormSubmit}>
            <label>Date</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    value={formData.date}
                    onChange={(newValue) => setFormData((prevData)=>{ 
                        return {...prevData, date:newValue}} )}
                />
            </LocalizationProvider> 
          
                <div className='radio-button'><input type="radio" name="type" value="income" checked={formData.type==="income"} onChange={handleRadioButton}/>Income</div>
                <div className='radio-button'><input type="radio" name="type" value="expense" checked={formData.type==="expense"} onChange={handleRadioButton}/>Expense</div>
           
            
            
            <label>Amount</label> 
            <input type="number" 
                value={formData.amount}
                onChange={(e) => setFormData((prevData)=>{ 
                        return {...prevData, amount:Number(e.target.value)}} )}
            />
            
            <label>Category</label>
            <input type="text" 
                value={formData.category}
                onChange={(e) => setFormData((prevData)=>{ 
                    return {...prevData, category:e.target.value}} )}
            />

            <label>Note</label> 
            <textarea 
                value={formData.description}
                onChange={(e) => setFormData((prevData)=>{ 
                    return {...prevData, description:e.target.value}} )}
            />

            <input type='submit' value={"Add"} className="addExpenseBtn" />
                
        </form>
    )
}

export default ExpenseForm;