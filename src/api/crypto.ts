import axios from 'axios'

export const getAllAssets = (page: number) => {
	return axios.get(
		`https://data.messari.io/api/v2/assets?fields=id,symbol,name,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_24_hours`,
		{
			params: {
				page: page,
			},
		},
	)
}
