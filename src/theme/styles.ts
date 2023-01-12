import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { BLACK, WHITE } from './colors'
import { SCALE_18, SCALE_30 } from './spacing'

const DefaultStyles = StyleSheet.create({
	text: {
		color: BLACK,
		fontSize: SCALE_18,
		fontWeight: '400',
		fontStyle: 'normal',
	},
	textBold: {
		color: BLACK,
		fontSize: SCALE_18,
		fontWeight: 'bold',
		fontStyle: 'normal',
	},
	screenTitle: {
		color: BLACK,
		fontSize: SCALE_30,
		fontWeight: 'bold',
		fontStyle: 'normal',
	},
	container: {
		flex: 1,
		backgroundColor: WHITE,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: hp('2'),
	},
	flexRow: {
		flexDirection: 'row',
	},
	indicatorLoading: {
		flex: 1,
		width: '100%',
		alignSelf: 'center',
		backgroundColor: WHITE,
	},
})
export default DefaultStyles
