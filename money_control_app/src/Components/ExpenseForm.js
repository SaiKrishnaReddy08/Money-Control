import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from "react";


const ExpenseForm = ()=>{
    const [formData, setFormData] = useState({date:dayjs(new Date()), amount:"", category:"", description:""});
    
    const handleFormSubmit=(e)=>{
        e.preventDefault()
        console.log("Form Submitted Successfully");
        console.log(formData)
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

            <input type='submit' value={"Add Expense"} className="addExpenseBtn" />
                
        </form>
    )
}

export default ExpenseForm;