import React, { ReactElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { getRandomColor } from '../../shared/global-service'
import { BLUE_SKY, RED, WHITE } from '../../theme/colors'
import DefaultStyles from '../../theme/styles'
import { SvgCircle } from '../svg-circle/svg-circle'
import { TWENTY_FOUR } from '../../utils/constants'
import { ICrypto } from '../../types/crypto'

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
					{`${TWENTY_FOUR}: `}
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
	container: {
		flex: 1,
		height: hp('12'),
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: WHITE,
	},
	change: { paddingTop: hp('2') },
	priceContainer: { flex: 1, alignItems: 'flex-end', marginRight: wp('2') },
})
