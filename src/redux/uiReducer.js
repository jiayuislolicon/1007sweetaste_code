import * as types from 'uiAction'

const initialState = {
    preloadDone: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PRELOAD_DONE:
            return {
                ...state,
                preloadDone: action.preloadDone
            }

        default:
            return state
    }
}