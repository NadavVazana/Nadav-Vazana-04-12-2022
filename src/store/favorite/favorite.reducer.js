import { favoriteService } from "../../services/favorite.service"


const initialState = {
    favorites: favoriteService.query(),
    snack: { isOpen: false, msg: '' }

}

export function favoriteReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'ADD_FAVORITE':
            let newFavorites = [action.favorite, ...state.favorites]
            return { ...state, favorites: newFavorites }
        case 'REMOVE_FAVORITE':
            let favorites = state.favorites.filter(favorite => favorite.location.locationName !== action.locationName)
            return { ...state, favorites }
        case 'OPEN_SNACKBAR':
            return { ...state, snack: { isOpen: true, msg: action.msg } }
        case 'CLOSE_SNACKBAR':
            return { ...state, snack: { isOpen: false, msg: '' } }
        default: return { ...state }

    }
}