import { StyleSheet } from 'react-native'
import { GREEN1, WHITE } from '../../theme/colors'

export const styles = StyleSheet.create({
	container: {
		backgroundColor: WHITE,
		flex: 1,
	},
	fab: {
		backgroundColor: GREEN1,
		bottom: 50,
		margin: 16,
		position: 'absolute',
		right: 0,
	},
})
