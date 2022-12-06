import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { favoriteReducer } from './favorite/favorite.reducer'
import { locationReducer } from './location/location.reducer'
import { systemReducer } from './system/system.reducer'
import { weatherReducer } from './weather/weather.reducer'


const rootReducer = combineReducers({
    locationModule: locationReducer,
    weatherModule: weatherReducer,
    favoriteModule: favoriteReducer,
    systemModule: systemReducer
})

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk)))


// For debug!
// store.subscribe(() => {
//     ('Store state is:', store.getState())
// })
