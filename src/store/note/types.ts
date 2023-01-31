import { actionCreatorFactory } from 'typescript-fsa'
import { Note } from '../../types/types'
import { ErrorPayload } from '../types'

const actionCreator = actionCreatorFactory()

export interface NoteState extends ErrorPayload {
	notes: Note[]
}

export enum ActionsTypes {
	GET_ACTION = 'GET_ACTION',
	GET_ACTION_SUCCESS = 'GET_ACTION_SUCCESS',
	GET_ACTION_FAILED = 'GET_ACTION_FAILED',
	ADD_ACTION = 'ADD_ACTION',
	ADD_ACTION_SUCCESS = 'ADD_ACTION_SUCCESS',
	ADD_ACTION_FAILED = 'ADD_ACTION_FAILED',
	REMOVE_ACTION = 'REMOVE_ACTION',
	REMOVE_ACTION_SUCCESS = 'REMOVE_ACTION_SUCCESS',
	REMOVE_ACTION_FAILED = 'REMOVE_ACTION_FAILED',
	UPDATE_ACTION = 'UPDATE_ACTION',
	UPDATE_ACTION_SUCCESS = 'UPDATE_ACTION_SUCCESS',
	UPDATE_ACTION_FAILED = 'UPDATE_ACTION_FAILED',
}

export const NoteActions = {
	GET_ACTION: actionCreator(ActionsTypes.GET_ACTION),
	GET_ACTION_SUCCESS: actionCreator<Note[]>(ActionsTypes.GET_ACTION_SUCCESS),
	GET_ACTION_FAILED: actionCreator<ErrorPayload>(
		ActionsTypes.GET_ACTION_FAILED,
	),
	ADD_ACTION: actionCreator<Note>(ActionsTypes.ADD_ACTION),
	ADD_ACTION_SUCCESS: actionCreator(ActionsTypes.ADD_ACTION_SUCCESS),
	ADD_ACTION_FAILED: actionCreator<ErrorPayload>(
		ActionsTypes.ADD_ACTION_FAILED,
	),
	REMOVE_ACTION: actionCreator<number>(ActionsTypes.REMOVE_ACTION),
	REMOVE_ACTION_SUCCESS: actionCreator(ActionsTypes.REMOVE_ACTION_SUCCESS),
	REMOVE_ACTION_FAILED: actionCreator<ErrorPayload>(
		ActionsTypes.REMOVE_ACTION_FAILED,
	),
	UPDATE_ACTION: actionCreator<Note>(ActionsTypes.UPDATE_ACTION),
	UPDATE_ACTION_SUCCESS: actionCreator(ActionsTypes.UPDATE_ACTION_SUCCESS),
	UPDATE_ACTION_FAILED: actionCreator<ErrorPayload>(
		ActionsTypes.UPDATE_ACTION_FAILED,
	),
}
