import React from 'react'
import { render } from '@testing-library/react-native'
import { ListItem } from '../../src/components/list-item/list-item'
import { ListItemProps } from '../../src/components/list-item/list-item.props'

// mock
const note = {
	id: 1,
	body: 'Hey!',
	backgroundColor: 'red',
}

const item: ListItemProps = {
	...note,
	viewableItems: {
		value: [{ key: '1', index: 0, isViewable: true, item: note }],
	},
	onPress: (id: number) => item.onPress(id),
}

describe('ListItem', () => {
	it('renders the correct body Text', () => {
		const { getByText } = render(<ListItem {...item} />)
		expect(getByText('Hey!')).toBeDefined()
	})
})
