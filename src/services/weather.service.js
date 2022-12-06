import axios from "axios"

export const weatherService = {
    getWeatherByLocationKey,
    getForecastByLocationKey
}

async function getWeatherByLocationKey(locationKey) {
    return await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=Em754KAbMWGXadsWl2QaZzXG9tfhYC9W&language=en-us&details=false`)
        .then(res => res.data[0])
        .catch(error => console.error('Error: try again later'))}


async function getForecastByLocationKey(locationKey) {
    return await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=Em754KAbMWGXadsWl2QaZzXG9tfhYC9W&language=en-us&details=false&metric=false`)
        .then(res => res.data.DailyForecasts)
        .catch(error => console.error('Error: try again later'))}