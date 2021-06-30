import {
  GET_HEROS,
  GET_HERO,
  SET_FAVORITE_IDS,
  SET_FAVORITE_HEROS
} from './types'

export const getHerosList = (payload: any) => ({
  type: GET_HEROS,
  payload: payload
})

export const getHero = (payload: any) => ({
  type: GET_HERO,
  payload: payload
})

export const setFavoriteIds = (payload: any) => ({
  type: SET_FAVORITE_IDS,
  payload: payload
})

export const setFavoriteHeros = (payload: any) => ({
  type: SET_FAVORITE_HEROS,
  payload: payload
})
