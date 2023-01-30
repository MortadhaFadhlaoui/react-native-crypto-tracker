import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { BLACK, WHITE } from './colors'
import { SCALE_18, SCALE_30 } from './spacing'

const DefaultStyles = StyleSheet.create({
	confirmLabel: { color: WHITE, textTransform: 'capitalize' },
	container: {
		alignItems: 'center',
		backgroundColor: WHITE,
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: hp('2'),
	},
	flexRow: {
		flexDirection: 'row',
	},
	flexStart: { alignSelf: 'flex-start' },
	screenTitle: {
		color: BLACK,
		fontSize: SCALE_30,
		fontStyle: 'normal',
		fontWeight: 'bold',
	},
	text: {
		color: BLACK,
		fontSize: SCALE_18,
		fontStyle: 'normal',
		fontWeight: '400',
	},
	textBold: {
		color: BLACK,
		fontSize: SCALE_18,
		fontStyle: 'normal',
		fontWeight: 'bold',
	},
})
export default DefaultStyles
