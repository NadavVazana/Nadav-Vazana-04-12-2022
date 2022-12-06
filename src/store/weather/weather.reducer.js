


const initialState = {
    weather: null,
    forecast: null,
    temp: 'c'

}

export function weatherReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_CURRENT_WEATHER': {
            return { ...state, weather: { ...action.weather } }
        }
        case 'SET_FORECAST': {
            return { ...state, forecast: { ...action.forecast } }
        }
        case 'TOGGLE_TEMP': {
            let temp = state.temp === 'c' ? 'f' : 'c'
            return { ...state, temp }
        }

        default: return { ...state }

    }
}