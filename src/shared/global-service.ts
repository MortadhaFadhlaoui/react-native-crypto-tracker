import { ICrypto, IDataCrypto } from '../types/crypto'
import {
	CHANGE_PRECISION,
	LETTERS_FOR_RANDOM_COLOR,
	PRICE_PRECISION,
} from '../utils/constants'

const toSixDigits = (num: number): number => {
	if (num % 1 == 0) return num
	const toString = num + ''
	const toArray = toString.split('')
	const index = toArray.findIndex(x => x == '.')
	const newNumber = +num.toPrecision(
		index > PRICE_PRECISION ? 0 : PRICE_PRECISION - index,
	)
	return newNumber
}

export const getRandomColor = (): string => {
	let color = '#'
	for (let i = 0; i < 6; i++) {
		color += LETTERS_FOR_RANDOM_COLOR[Math.floor(Math.random() * 16)]
	}
	return color
}

export const parseCrypto = (data: IDataCrypto[]) => {
	const cryptos: ICrypto[] = []
	data.forEach(iDataCrypto => {
		const crypto: ICrypto = {
			key: iDataCrypto.id,
			name: iDataCrypto.name,
			symbol: iDataCrypto.symbol,
			price: toSixDigits(iDataCrypto.metrics.market_data.price_usd),
			change:
				+iDataCrypto.metrics.market_data.percent_change_usd_last_24_hours.toPrecision(
					CHANGE_PRECISION,
				),
		}

		cryptos.push(crypto)
	})
	return cryptos
}
