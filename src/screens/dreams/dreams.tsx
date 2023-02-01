import React, { ReactElement, useEffect, useRef } from 'react'
import { FlatList, View, ViewToken } from 'react-native'
import { ActivityIndicator, FAB } from 'react-native-paper'
import { useSharedValue } from 'react-native-reanimated'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './dreams.styles'
import { EmptyList } from '../../components/empty-list/empty-list'
import { ListItem } from '../../components/list-item/list-item'
import { Separator } from '../../components/separator/separator'
import { DreamsScreenProps } from '../../navigation/types'
import { getNotesAction } from '../../store/note/actions'
import { ApplicationState } from '../../store/types'
import { BLACK, BLUE_SKY, GREEN1 } from '../../theme/colors'
import { DefaultStyles } from '../../theme/styles'
import { DreamType } from '../../types/enum'

export const DreamsScreen = ({
	navigation,
}: DreamsScreenProps): ReactElement => {
	const dispatch = useDispatch()
	const vItems = useSharedValue<ViewToken[]>([])

	const { notes, isLoading } = useSelector(
		(state: ApplicationState) => state.note,
	)

	useEffect(() => {
		dispatch(getNotesAction())
	}, [])

	//both viewabilityConfig to a ref and onViewableItemsChanged to a useCallback to ensure the identities
	const viewabilityConfig = useRef({
		viewAreaCoveragePercentThreshold: 50,
	})

	const onViewableItemsChanged = (info: {
		viewableItems: ViewToken[]
		changed: ViewToken[]
	}) => {
		vItems.value = info.viewableItems
	}

	const viewabilityConfigCallbackPairs = useRef([
		{ viewabilityConfig: viewabilityConfig.current, onViewableItemsChanged },
	])

	const handleNavigateToDream = (id?: number) => {
		let note
		if (id) note = notes.find(n => n.id === id)
		navigation.navigate('Dream', { note })
	}

	if (isLoading)
		return <ActivityIndicator style={DefaultStyles.container} color={BLACK} />

	return (
		<View style={DefaultStyles.container}>
			{notes && notes.length > 0 ? (
				<FlatList
					data={notes}
					viewabilityConfigCallbackPairs={
						viewabilityConfigCallbackPairs.current
					}
					contentContainerStyle={styles.container}
					renderItem={({ item }) => {
						const backgroundColor =
							item.type === DreamType.GOOD ? BLUE_SKY : GREEN1
						return (
							<ListItem
								onPress={handleNavigateToDream}
								backgroundColor={backgroundColor}
								{...item}
								viewableItems={vItems}
							/>
						)
					}}
					viewabilityConfig={viewabilityConfig.current}
					ItemSeparatorComponent={() => <Separator />}
				/>
			) : (
				<EmptyList emptyText={'No data'} />
			)}
			<FAB
				style={styles.fab}
				color={BLUE_SKY}
				icon="plus"
				onPress={() => handleNavigateToDream()}
			/>
		</View>
	)
}
