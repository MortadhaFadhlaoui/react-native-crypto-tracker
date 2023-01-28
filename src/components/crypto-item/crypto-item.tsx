import React, { ReactElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { getRandomColor } from '../../shared/global-service'
import { BLUE_SKY, RED, WHITE } from '../../theme/colors'
import DefaultStyles from '../../theme/styles'
import { ICrypto } from '../../types/crypto'
import { TWENTY_FOUR } from '../../utils/constants'
import { SvgCircle } from '../svg-circle/svg-circle'

export const CryptoItem = ({
	name,
	symbol,
	price,
	change,
}: ICrypto): ReactElement => {
	return (
		<View testID={'containerId'} style={styles.container}>
			<SvgCircle title={name.charAt(0)} backgroundColor={getRandomColor()} />
			<View>
				<View style={DefaultStyles.flexRow}>
					<Text style={DefaultStyles.textBold}>
						{name}
						<Text style={DefaultStyles.text}> | {symbol}</Text>
					</Text>
				</View>
				<Text style={{ ...DefaultStyles.text, ...styles.change }}>
					{TWENTY_FOUR}
					<Text
						style={{
							...DefaultStyles.textBold,
							color: change < 0 ? RED : BLUE_SKY,
						}}>
						{change}
					</Text>
				</Text>
			</View>
			<View style={styles.priceContainer}>
				<Text style={{ ...DefaultStyles.textBold, paddingBottom: hp('2') }}>
					{price} $
				</Text>
				<Text></Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	change: { paddingTop: hp('2') },
	container: {
		alignItems: 'center',
		backgroundColor: WHITE,
		flex: 1,
		flexDirection: 'row',
		height: hp('12'),
	},
	priceContainer: { alignItems: 'flex-end', flex: 1, marginRight: wp('2') },
})
