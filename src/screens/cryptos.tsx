import React, { ReactElement, useEffect, useState } from 'react'
import { View } from 'react-native'
import { getAllAssets } from '../api/crypto'
import { CryptoList } from '../components/crypto_list/crypto_list'
import { parseCrypto } from '../shared/global-service'
import DefaultStyles from '../theme/styles'
import { ICrypto } from '../types/crypto'

export const Cryptos = (): ReactElement => {
	const [cryptos, setCryptos] = useState<ICrypto[]>([])
	const GetAllAssets = (page: number) => {
		getAllAssets(page)
			.then(({ data }) => {
				setCryptos(parseCrypto(data.data))
			})
			.catch(error => {
				console.log(`GetAllAssets, ${error}`)
			})
	}

	useEffect(() => {
		GetAllAssets(1)
	}, [])

	return (
		<View style={DefaultStyles.container}>
			<CryptoList data={cryptos} />
		</View>
	)
}
