import { device, element, by } from 'detox'

describe('Example', () => {
	beforeAll(async () => {
		await device.launchApp()
	})

	it('should show list of cryptos screen after launch', async () => {
		await expect(element(by.text('Cryptos'))).toBeVisible()
	})

	it('should fail', async () => {
		await expect(element(by.text('ok'))).toBeVisible()
	})
})
