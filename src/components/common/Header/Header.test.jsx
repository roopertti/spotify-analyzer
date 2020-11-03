import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Header from './index';

describe('Header tests', () => {
  it('renders Header', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
