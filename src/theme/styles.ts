import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { BLACK, WHITE } from './colors'
import { SCALE_18, SCALE_30 } from './spacing'

const DefaultStyles = StyleSheet.create({
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
	indicatorLoading: {
		alignSelf: 'center',
		backgroundColor: WHITE,
		flex: 1,
		width: '100%',
	},
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
