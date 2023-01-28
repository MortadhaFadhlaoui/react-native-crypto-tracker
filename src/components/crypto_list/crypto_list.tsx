import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { CryptoListProps } from './crypto_list.props'
import { BLUE_SKY } from '../../theme/colors'
import { CryptoItem } from '../crypto-item/crypto-item'
import Footer from '../footer/footer'
import Separator from '../separator/separator'

export const CryptoList = ({ data }: CryptoListProps) => {
	if (data.length === 0) return <ActivityIndicator color={BLUE_SKY} />
	return (
		<FlatList
			data={data}
			renderItem={({ item }) => <CryptoItem {...item} />}
			ItemSeparatorComponent={() => <Separator />}
			ListFooterComponent={<Footer loading={data.length !== 0} />}
			showsVerticalScrollIndicator={false}
		/>
	)
}
