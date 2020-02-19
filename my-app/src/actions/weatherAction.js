import axios from 'axios'

const baseUrl="http://api.openweathermap.org/data/2.5";
const appId= "&appid=1c16ee5f8545582c3004d1006025abd4";
export function getWeather(ville){
    return axios.get(baseUrl+"/weather?q="+ville+appId);
}





