export interface ICrypto {
	key: string
	name: string
	symbol: string
	price: number
	change: number
}

export interface IDataCrypto {
	id: string
	name: string
	symbol: string
	metrics: {
		market_data: {
			price_usd: number
			percent_change_usd_last_24_hours: number
		}
	}
}

export interface IMarketDataCrypto {
	id: string
	name: string
	symbol: string
	market_data: {
		price_usd: number
		percent_change_usd_last_24_hours: number
	}
}
