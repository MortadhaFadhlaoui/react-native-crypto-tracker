import { ViewToken } from 'react-native'
import Animated from 'react-native-reanimated'
import { ItemProps } from '../../types/types'

export interface ListItemProps extends ItemProps {
	viewableItems: Animated.SharedValue<ViewToken[]>
	onPress: (id: number) => void
}
