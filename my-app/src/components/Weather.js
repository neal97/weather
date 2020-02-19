import React, { useState,useEffect } from 'react';
import {getWeather} from '../actions/weatherAction';
import {mockWeather} from '../mocks/mockWeather';

function Weather(){

    // const [weather,setWeather] = useState(mockWeather);
    const[weather,setWeather] = useState(null);
    const[ville,setVille] = useState(null);

    useEffect(()=>{
        loadWeatherData();
    },[ville])
    

    function KelvinToCelsius(tempKelvin){
        return Math.round(tempKelvin - 273.15);
     }

    async function loadWeatherData(){
        const weatherAjax = await getWeather(ville);
        console.log(weatherAjax);
        setWeather(weatherAjax.data)
     }
     

function change_ville(ville){
    setVille(ville);
}

     function loadIconWeather(idIcon){
         return "http://openweathermap.org/img/wn/"+idIcon+"@2x.png";
     }

    return (
        <div> 
         <input placeholder="Recherchez une ville" onChange={(event)=>{change_ville(event.target.value)}}></input> 
        {weather ?
        <div>
           <h1>Météo : {weather.name}</h1>
           <img src= { loadIconWeather(weather.weather[0].icon)}></img>

           <p>{weather.weather[0].description}</p>
           <p>Température: {KelvinToCelsius (weather.main.temp)} C°</p>
           <p>Humidité: {weather.main.humidity}%</p>
           <p>Vitesse du vent: {weather.wind.speed} m/s</p>
           <p>Température ressenti: {KelvinToCelsius(weather.main.feels_like)} C°</p>
         
        </div>
       : <div>
       <h1>Météo en attente de chargement</h1>
        </div>
        }
        </div>
    )
}

export default Weather
