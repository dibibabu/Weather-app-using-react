import React, { useState } from 'react';
import Input from './components/input';
import Result from './components/result';


import './App.css';
import axios from 'axios'

function App() {
  const [input, setInput] = useState("")
  const [temp, setTemp] = useState("")
  const [description, setDescription] = useState("")
  const [icon, setIcon] = useState("")
  const findWeather=async()=>{
    const unit="metric"
    const apikey="ff999e1152a5237fa036acaa7c3b3aac"
   

    const url ="http://api.openweathermap.org/data/2.5/weather?q="+
    input+
"&appid="+apikey+"&units="+unit
     const response =await axios.get(url);
     const temp =await response.data.main.temp;
     const weatherDescription=await response.data.weather[0].description
     const imageURL="http://openweathermap.org/img/wn/10d@2x.png"

     console.log(temp,weatherDescription,imageURL)
    
     setTemp(temp);
     setDescription(weatherDescription);
     setIcon(imageURL);



  }
  return (
    <div className="app">
      {temp===""?(
      <Input input={input} setInput={setInput} findWeather={findWeather} />)
      :(<Result temp={temp} desc={description} icon={icon} setTemp={setTemp}/>)}
 
   
    </div>
  );
}

export default App;
