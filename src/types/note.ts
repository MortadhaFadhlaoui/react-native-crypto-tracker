export interface Note {
	id: number
	title: string
	body: string
}

export type FirebaseResponse<T> = {
	[key: string]: T
}
