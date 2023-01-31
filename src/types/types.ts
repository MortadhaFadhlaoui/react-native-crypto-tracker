import { DreamType } from './enum'

export interface Note {
	id: number
	body: string
	type: DreamType
}

export type FirebaseResponse<T> = {
	[key: string]: T
}

export interface ItemProps {
	id: number
	body: string
	backgroundColor: string
}
