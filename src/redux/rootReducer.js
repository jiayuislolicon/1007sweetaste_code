import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import ui from 'uiReducer'
import server from 'serverReducer'

export default combineReducers({
    form,
    ui,
    server
})

