import { favoriteService } from "../../services/favorite.service"

export function addFavorite(favorite) {
    return (dispatch) => {
        favoriteService.addFavorite(favorite)
        dispatch({ type: 'IS_FAVORITE', isFavorite: true })
        dispatch({ type: 'ADD_FAVORITE', favorite })
        dispatch({ type: 'OPEN_SNACKBAR', msg: 'Added to favorites!' })

    }
}



export function removeFavorite(locationName) {
    return (dispatch) => {
        favoriteService.removeFavorite(locationName)
        dispatch({ type: 'IS_FAVORITE', isFavorite: false })
        dispatch({ type: 'REMOVE_FAVORITE', locationName })
        dispatch({ type: 'OPEN_SNACKBAR', msg: 'Removed from favorites!' })
    }
}



export function closeSnackbar() {
    return (dispatch) => {
        dispatch({ type: 'CLOSE_SNACKBAR' })
    }
}
