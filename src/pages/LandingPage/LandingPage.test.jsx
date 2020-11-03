import React from 'react';
import renderer from 'react-test-renderer';

import LandingPage from './index';

describe('LandingPage tests', () => {
  it('Render layout', () => {
    const tree = renderer.create(<LandingPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
