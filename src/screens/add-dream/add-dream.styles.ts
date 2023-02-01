import { StyleSheet } from 'react-native'
import { BLUE_SKY, WHITE } from '../../theme/colors'

export const styles = StyleSheet.create({
	confirm: {
		backgroundColor: BLUE_SKY,
		bottom: 50,
		marginHorizontal: 10,
		padding: 6,
		position: 'absolute',
		width: '95%',
	},
	labelStyle: { color: WHITE },
})
