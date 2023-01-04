import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';
import { Header } from '../src';

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    // @ts-ignore
    expect(tree.children.length).toBe(1);
  });
});

describe('<Header />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Header />).toJSON();
    // @ts-ignore
    expect(tree.children.length).toBe(1);
  });
});
