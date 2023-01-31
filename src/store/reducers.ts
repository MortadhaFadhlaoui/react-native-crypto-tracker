import { combineReducers, Reducer } from 'redux'
import { noteReducer } from './note/reducers'
import { ApplicationState } from './types'

export const rootReducer: Reducer<ApplicationState> =
	combineReducers<ApplicationState>({
		note: noteReducer,
	})

export default rootReducer
