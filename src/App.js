import './style.scss'; 
import './media.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Info from './components/Info';
import Current from './components/Current';

function App() {
  const [query, setQuery] = useState('Kyiv');
  const staticUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=700ecef4adc3ba9f5762dcc2361f4dcd&units=metric`;
  const [staticData, setStaticData] = useState({});
  const staticForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=700ecef4adc3ba9f5762dcc2361f4dcd&units=metric`;
  const [staticForecastData, setStaticForecastData] = useState({});

  useEffect(() => {
    axios.get(staticUrlCurrent)
    .then((response) => setStaticData(response.data))    
    axios.get(staticForecastUrl)
    .then((response) => setStaticForecastData(response.data)) 
    getInputData();   
  }, []);
  const getInputData = (data) =>{
    if(data){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=700ecef4adc3ba9f5762dcc2361f4dcd&units=metric`)
      .then((response) => setStaticData(response.data))    
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=700ecef4adc3ba9f5762dcc2361f4dcd&units=metric`)
      .then((response) => setStaticForecastData(response.data)) 
    }
  } 

  return (
    <div className="app">
      <Header getInputData={getInputData}/>
      <div className='wrapper'> 
        <Info data={staticForecastData}/>
        <Current data={staticData}/>
      </div>
    </div>
  );
}

export default App;
