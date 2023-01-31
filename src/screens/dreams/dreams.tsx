import React, { ReactElement, useEffect, useRef } from 'react'
import { FlatList, View, ViewToken } from 'react-native'
import { ActivityIndicator, FAB } from 'react-native-paper'
import { useSharedValue } from 'react-native-reanimated'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './dreams.styles'
import { EmptyList } from '../../components/empty-list/empty-list'
import { ListItem } from '../../components/list-item/list-item'
import Separator from '../../components/separator/separator'
import {
	addNoteAction,
	getNotesAction,
	//	removeNoteAction,
} from '../../store/note/actions'
import { ApplicationState } from '../../store/types'
import { BLACK, BLUE_SKY, GREEN1, WHITE } from '../../theme/colors'
import { DreamType } from '../../types/enum'

export const DreamsScreen = (): ReactElement => {
	const dispatch = useDispatch()
	const vItems = useSharedValue<ViewToken[]>([])

	const { notes, isLoading } = useSelector(
		(state: ApplicationState) => state.note,
	)

	useEffect(() => {
		/*dispatch(
			addNoteAction({
				id: Date.now(),
				type: DreamType.GOOD,
				body: 'First body',
			}),
		)
		dispatch(removeNoteAction(1675180873164))*/
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

	const addNewDream = () => {
		console.log('ok')
	}

	if (isLoading)
		return <ActivityIndicator style={styles.container} color={BLACK} />

	return (
		<View style={styles.container}>
			{notes && notes.length > 0 ? (
				<FlatList
					data={notes}
					viewabilityConfigCallbackPairs={
						viewabilityConfigCallbackPairs.current
					}
					renderItem={({ item }) => {
						const backgroundColor =
							item.type === DreamType.GOOD ? BLUE_SKY : GREEN1
						return (
							<ListItem
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
			<FAB style={styles.fab} color={WHITE} icon="plus" onPress={addNewDream} />
		</View>
	)
}
