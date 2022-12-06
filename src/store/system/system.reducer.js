


const initialState = {
    temp: 'c',
    isDark: false
}

export function systemReducer(state = initialState, action = {}) {
    switch (action.type) {

        case 'TOGGLE_TEMP': {
            let temp = state.temp === 'c' ? 'f' : 'c'
            return { ...state, temp }
        }
        case 'TOGGLE_DARK': {
            return { ...state, isDark: !state.isDark }
        }

        default: return { ...state }}}