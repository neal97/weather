import axios from 'axios'

export function getWeather(){
    return axios.get("http://api.openweathermap.org/data/2.5/weather?q=london&appid=1c16ee5f8545582c3004d1006025abd4");
}