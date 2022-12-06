import { weatherService } from "../../services/weather.service"

export function setCurrentWeather(locationKey) {
    return async (dispatch) => {
        try {
            let weather = await weatherService.getWeatherByLocationKey(locationKey)
            weather = {
                weatherDescription: weather.WeatherText,
                celsius: `${weather.Temperature.Metric.Value} ℃`,
                fahrenheit: `${weather.Temperature.Imperial.Value} ℉`,
                weatherIcon: weather.WeatherIcon
            }

            dispatch({ type: 'SET_CURRENT_WEATHER', weather })
            dispatch({ type: 'SET_ERROR', msg: '' })


        }
        catch {
            dispatch({ type: 'OPEN_SNACKBAR', msg: 'There\'s been a problem try again later..' })
        }
    }
}


export function setForecast(locationKey) {
    return async (dispatch) => {
        try {
            let forecast = await weatherService.getForecastByLocationKey(locationKey)
            dispatch({ type: 'SET_FORECAST', forecast })

        }
        catch (error) {
            dispatch({ type: 'OPEN_SNACKBAR', msg: 'There\'s been a problem try again later...' })

        }
    }
}



