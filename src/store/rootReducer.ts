import { combineReducers } from '@reduxjs/toolkit'

import uiReducer from './reducers/ui'

const rootReducer = combineReducers({
  ui: uiReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
