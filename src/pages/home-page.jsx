import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setLocation } from "../store/location/location.action"
import { setCurrentWeather, setForecast } from "../store/weather/weather.action"
import { toggleTemp } from "../store/system/ststem.action"
import { utilService } from "../services/util.service"
import { useEffect } from "react"
import { addFavorite, removeFavorite } from "../store/favorite/favorite.action"
import { locationService } from "../services/location.service"
import SnackbarMsg from "../cmps/snack-bar"
import { Places } from "../cmps/places-auto"


export const HomePage = () => {
    const dispatch = useDispatch()

    const { location, isFavorite } = useSelector(state => state.locationModule)
    const { weather, forecast, temp } = useSelector(state => state.weatherModule)
    const { isDark } = useSelector(state => state.systemModule)



    useEffect(() => {

        (async function () {
            if (!weather || !forecast) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const city = await locationService.getLocationByCoord(position)
                    const location = await dispatch(setLocation(city))
                    await dispatch(setCurrentWeather(location.locationKey))
                    await dispatch(setForecast(location.locationKey))
                })
            }
        })()
    }, [])


    const onSearch = async (locationName) => {
        const location = await dispatch(setLocation(locationName))
        await dispatch(setCurrentWeather(location.locationKey))
        await dispatch(setForecast(location.locationKey))
    }


    const onAddToFavorites = () => {
        const favorite = { location, weather, forecast, id: utilService.makeId() }
        dispatch(addFavorite(favorite))
    }


    return (
        <section className={isDark ? 'home-page dark' : 'home-page'}>
            <form>
                <Places onSearch={onSearch}/>
            </form>

            {location && weather && forecast ? <div className="weather-details">

                <h1 className="search-timestamp"> {utilService.getDayName(new Date())}, {utilService.getTime(new Date())} </h1>
                <h1 className="location-name">{location.locationName}, {location.countryName}</h1>
                <h2 className="temp">{temp === 'c' ? weather.celsius : weather.fahrenheit} <img onClick={() => dispatch(toggleTemp())} src={require('../assets/imgs/thermo.svg').default} alt="thermo" /></h2>
                <div className="weather-description">
                    <img src={require(`../assets/imgs/weather icons/${weather.weatherIcon}.png`)} alt="weather-icon" />
                    <h2>{weather.weatherDescription}</h2>


                </div>
                {!isFavorite ? <Button onClick={onAddToFavorites}>Add to Favorites!</Button>
                    : <Button onClick={() => dispatch(removeFavorite(location.locationName))}>Remove from Favorites</Button>}


                <ul className="forecast">
                    {Object.values(forecast).map(day =>
                        <li key={day.EpochDate}> <img src={require(`../assets/imgs/weather icons/${day.Day.Icon}.png`)} alt="day-logo" />
                            {temp === 'c' ? utilService.convertToCelsius((day.Temperature.Maximum.Value + day.Temperature.Minimum.Value) / 2) + ' ℃' : (day.Temperature.Maximum.Value + day.Temperature.Minimum.Value) / 2 + ' ℉'}   <br />
                            {utilService.getDayName(day.Date)} </li>)}
                </ul>

            </div> : <img className="loader" src={require('../assets/imgs/sun-loader.gif')} alt="" />}

            <SnackbarMsg />

        </section>
    )
}