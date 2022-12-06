

const initialState = {
    location: null,
    isFavorite: null

}

export function locationReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_LOCATION': {
            return { ...state, location: { ...action.location } }
        }

        case 'IS_FAVORITE': {
            return { ...state, isFavorite: action.isFavorite }
        }
        default: return { ...state }

    }
}