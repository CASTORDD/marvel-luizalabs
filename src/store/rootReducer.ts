import { combineReducers } from 'redux'

// MODULOS
import herosReducer from './modules/heros/reducers'

const rootReducer = combineReducers({
  heros: herosReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
