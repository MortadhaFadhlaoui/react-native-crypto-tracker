import React, { memo } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { Text } from 'react-native-paper'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { ListItemProps } from './list-item.props'
import { styles } from './list-item.styles'

export const ListItem = memo(
	({ id, backgroundColor, body, viewableItems, onPress }: ListItemProps) => {
		const rStyle = useAnimatedStyle(() => {
			const isVisible = Boolean(
				viewableItems.value
					.filter(item => item.isViewable)
					.find(viewableItem => viewableItem.item.id === id),
			)

			return {
				opacity: withTiming(isVisible ? 1 : 0),
				transform: [
					{
						scale: withTiming(isVisible ? 1 : 0.6),
					},
				],
			}
		}, [])

		return (
			<TouchableWithoutFeedback onPress={() => onPress(id)}>
				<Animated.View style={[styles.container, { backgroundColor }, rStyle]}>
					<Text>{body}</Text>
				</Animated.View>
			</TouchableWithoutFeedback>
		)
	},
)
