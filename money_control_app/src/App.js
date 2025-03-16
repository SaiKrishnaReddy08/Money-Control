import './App.css';

import MyHeader from './Components/MyHeader';
import MyContainer from './Components/MyContainer';
import { useEffect, useState } from 'react';

function App() {
  const [date, setDate] = useState({day:0, month:1, year:0});

  useEffect(()=>{
    setDate(()=>{
      const today = new Date();
      return {day:today.getDate(), month:today.getMonth(), year:today.getFullYear()}
    })
  },[])
  

  return (
    <div className="App">
      <MyHeader date={date} setDate={setDate} />
      <MyContainer date={date} />
    </div>
  );
}

export default App;
