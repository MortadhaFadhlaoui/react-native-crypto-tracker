export const formatAddress = (address: {
	street1: string
	street2: string
	city: string
	state: string
	zip: string
}): string => {
	const addressLines = []

	addressLines.push(address.street1)
	if (address.street2) {
		addressLines.push(address.street2)
	}
	addressLines.push(`${address.city}, ${address.state} ${address.zip}`)

	return addressLines.join('\n')
}
