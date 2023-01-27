import { device } from 'detox'
// eslint-disable-next-line no-undef

afterEach(async () => {
	await device.takeScreenshot('screenshot')
})
