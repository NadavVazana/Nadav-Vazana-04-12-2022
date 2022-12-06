import axios from "axios"

export const locationService = {
    getLocation,
    getLocationByCoord
}

async function getLocation(cityName) {
    return await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Em754KAbMWGXadsWl2QaZzXG9tfhYC9W&q=${cityName}&language=en-us`)
        .then(res => res.data[0])
        .catch(error => console.error('Location not found'))}

        
async function getLocationByCoord(pos) {
    return axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=en`)
        .then(res => res.data.city)}