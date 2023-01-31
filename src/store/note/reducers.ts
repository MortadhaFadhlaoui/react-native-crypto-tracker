import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { NoteActions, NoteState } from './types'

const initialState: NoteState = {
	isLoading: false,
	error: null,
	notes: [],
}

export const noteReducer = reducerWithInitialState(initialState)
	.case(NoteActions.GET_ACTION, state => ({
		...state,
		isLoading: true,
	}))
	.case(NoteActions.GET_ACTION_SUCCESS, (state, notes) => ({
		...state,
		notes,
		isLoading: false,
	}))
	.case(NoteActions.GET_ACTION_FAILED, state => ({
		...state,
		isLoading: false,
	}))
	.case(NoteActions.ADD_ACTION, state => ({
		...state,
		isLoading: true,
	}))
	.case(NoteActions.ADD_ACTION_SUCCESS, state => ({
		...state,
		isLoading: false,
	}))
	.case(NoteActions.ADD_ACTION_FAILED, state => ({
		...state,
		isLoading: false,
	}))
	.case(NoteActions.UPDATE_ACTION, state => ({
		...state,
		isLoading: true,
	}))
	.case(NoteActions.UPDATE_ACTION_SUCCESS, state => ({
		...state,
		isLoading: false,
	}))
	.case(NoteActions.UPDATE_ACTION_FAILED, state => ({
		...state,
		isLoading: false,
	}))
	.case(NoteActions.REMOVE_ACTION, state => ({
		...state,
		isLoading: true,
	}))
	.case(NoteActions.REMOVE_ACTION_SUCCESS, state => ({
		...state,
		isLoading: false,
	}))
	.case(NoteActions.REMOVE_ACTION_FAILED, state => ({
		...state,
		isLoading: false,
	}))
	.default(state => state)
