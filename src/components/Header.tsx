import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Header = () => {
	return (
		<View>
			<Text style={styles.title}>
				Please select the image of the crossword and clues:
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 10,
	},
})
