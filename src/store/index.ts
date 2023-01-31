import { configureStore } from '@reduxjs/toolkit'
import { Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'
import { ApplicationState } from './types'

const sagaMiddleware = createSagaMiddleware()

export const store: Store<ApplicationState> = configureStore({
	reducer: rootReducer,
	middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export default store
