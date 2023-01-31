import { actionCreatorFactory } from 'typescript-fsa'
import { Note } from '../../types/note'

const actionCreator = actionCreatorFactory()

export interface NoteState {
	note: Note | null
}

export enum ActionsTypes {
	GET_ACTION = 'GET_ACTION',
}

export const NoteActions = {
	GET_ACTION: actionCreator(ActionsTypes.GET_ACTION),
}

export type CommentsActionsTypes = ReturnType<typeof NoteActions.GET_ACTION>
