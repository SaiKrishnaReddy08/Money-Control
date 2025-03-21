import './App.css';

import MyHeader from './Components/MyHeader';
import MyContainer from './Components/MyContainer';
import { useEffect, useState } from 'react';

function App() {
  const [mode, setMode] = useState("mothly");
  const [date, setDate] = useState({day:0, month:1, year:0});
  useEffect(()=>{
    setDate(()=>{
      const today = new Date();
      return {day:today.getDate(), month:today.getMonth(), year:today.getFullYear()}
    })
  },[])
  

  return (
    <div className="App">
      <MyHeader date={date} setDate={setDate} mode={mode} setMode={setMode}/>
      <MyContainer date={date} mode={mode}/>
    </div>
  );
}

export default App;
