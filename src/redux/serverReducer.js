import * as types from 'serverAction'

const initialState = {
    newsData: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        //subscribe
        case types.SET_NEWS_DATA:
            return {
                ...state,
                newsData: action.newsData
            }

        default:
            return state
    }
}