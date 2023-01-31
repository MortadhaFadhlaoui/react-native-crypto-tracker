import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { NoteActions, NoteState } from './types'

const initialState: NoteState = {
	note: null,
}

export const noteReducer = reducerWithInitialState(initialState)
	.case(NoteActions.GET_ACTION, state => ({
		...state,
	}))
	.default(state => state)
