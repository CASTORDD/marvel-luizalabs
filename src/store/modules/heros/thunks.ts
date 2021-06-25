import { AnyAction } from 'redux'
import { RootState } from 'store/rootReducer'
import * as rest from './endpoints'
import * as actions from './actions'
import { ThunkAction } from 'redux-thunk'

export const getHerosL =
  (
    filterValue: I.FilterCharactersProps
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch) => {
    rest
      .getHeros(filterValue)
      .then(({ data }) => {
        dispatch(actions.getHerosList(data))
      })
      .catch((err) => {
        throw new Error(err)
      })
  }

export const getHero =
  (id: number): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch) => {
    rest
      .getHero(id)
      .then(({ data }) => {
        dispatch(actions.getHero(data.data.results[0]))
      })
      .catch((err) => {
        throw new Error(err)
      })
  }
