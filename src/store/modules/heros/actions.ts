import { GET_HEROS, GET_HERO } from './types'

export const getHerosList = (payload: any) => ({
  type: GET_HEROS,
  payload: payload
})

export const getHero = (payload: any) => ({
  type: GET_HERO,
  payload: payload
})
