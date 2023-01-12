import { StyleProp, TextStyle } from 'react-native'

export interface EmptyListProps {
	/**
	 * text will display to explain that the list is empty
	 */
	emptyText: string

	/**
	 * override the text style
	 */
	textStyle?: StyleProp<TextStyle> | undefined

	/**
	 * style of the View container
	 */
	containerStyle?: StyleProp<TextStyle> | undefined
}
