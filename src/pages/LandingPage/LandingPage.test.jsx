import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import LandingPage from './index';

describe('LandingPage tests', () => {
  it('Render layout', () => {
    const tree = renderer.create(<LandingPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
