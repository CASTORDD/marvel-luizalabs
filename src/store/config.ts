import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import * as ReactRedux from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const middleware = applyMiddleware(thunk)

export default function configureStore() {
  return createStore(rootReducer, composeWithDevTools(middleware))
}

export type AppState = {
  [P in keyof typeof rootReducer]: ReturnType<typeof rootReducer[P]>
}

export type StateMapper<T, S = AppState> = (state: S) => T

export const useDispatch = () => {
  const store = ReactRedux.useStore()
  return useMemo(() => store.dispatch, [store])
}

export function useSelector<T>(selector: (state: AppState) => T) {
  return ReactRedux.useSelector(selector)
}
