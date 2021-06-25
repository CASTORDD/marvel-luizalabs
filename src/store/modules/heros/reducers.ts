import initialState from './initialState'
import { GET_HEROS, GET_HERO } from './types'

const herosReducer = (state = initialState, action: any) => {
  const { type, payload } = action

  switch (type) {
    case GET_HEROS:
      return {
        ...state,
        herosList: payload.data
      }
    case GET_HERO:
      return {
        ...state,
        hero: payload
      }
    default:
      return state
  }
}

export default herosReducer
