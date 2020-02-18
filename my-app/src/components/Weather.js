import React, { useState } from 'react';
import {mockWeather} from '../mocks/mockWeather';
function Weather() {

    const [weather,setWeather] = useState(mockWeather);

    function KelvinToCelsius(tempKelvin){
        return Math.round(tempKelvin - 273.15);
     }
     
     function loadIconWeather(idIcon){
         return "http://openweathermap.org/img/wn/"+idIcon+"@2x.png";
     }

    return (
        <div>
           <h1>Météo : {weather.name}</h1>
           <img src= { loadIconWeather(weather.weather[0].icon)}></img>

           <p>{weather.weather[0].description}</p>
           <p>{KelvinToCelsius (weather.main.temp)} C°</p>

        </div>
    )
}

export default Weather
