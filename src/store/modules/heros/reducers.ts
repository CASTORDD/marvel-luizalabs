import initialState from './initialState'
import {
  GET_HEROS,
  GET_HERO,
  SET_FAVORITE_IDS,
  SET_FAVORITE_HEROS
} from './types'

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
    case SET_FAVORITE_IDS:
      return {
        ...state,
        favoritesIds: payload
      }
    case SET_FAVORITE_HEROS:
      return {
        ...state,
        favoritesHeros: payload
      }
    default:
      return state
  }
}

export default herosReducer
