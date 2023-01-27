// e2e/environment.js
import { DetoxCircusEnvironment } from 'detox/runners/jest'

class CustomDetoxEnvironment extends DetoxCircusEnvironment {
	constructor(config, context) {
		super(config, context)

		// Can be safely removed, if you are content with the default value (=300000ms)
		this.initTimeout = 300000
	}

	async handleTestEvent(event, state) {
		const { name } = event

		if (['test_start', 'test_fn_start'].includes(name)) {
			this.global.testFailed = false
		}

		if (name === 'test_fn_failure') {
			this.global.testFailed = true
		}

		await super.handleTestEvent(event, state)
	}
}

export default CustomDetoxEnvironment
