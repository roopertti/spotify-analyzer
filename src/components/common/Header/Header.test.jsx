import React from 'react';
import renderer from 'react-test-renderer';

import Header from './index';

describe('Header tests', () => {
  it('renders Header', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
