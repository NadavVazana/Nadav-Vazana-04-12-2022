import { favoriteService } from "../../services/favorite.service"
import { locationService } from "../../services/location.service"

export function setLocation(cityName) {
    return async (dispatch) => {
        try {
            let location = await locationService.getLocation(cityName)
            const isFavorite = favoriteService.isFavorite(location)
            dispatch({ type: 'IS_FAVORITE', isFavorite })
            location = {
                locationName: location.LocalizedName,
                countryName: location.Country.LocalizedName,
                locationKey: location.Key
            }

            dispatch({ type: 'SET_LOCATION', location })
            return location
        }
        catch (error) {
            dispatch({ type: 'OPEN_SNACKBAR',msg:'Invalid Location...'})

        }
    }
}
