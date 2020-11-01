import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';

import PrimaryButton from '.';

describe('Button test', () => {
  it('Renders basic button and tests click', () => {
    const mockFn = jest.fn();
    const button = <PrimaryButton onClick={mockFn}>Button</PrimaryButton>;
    const tree = renderer.create(<PrimaryButton onClick={mockFn}>Button</PrimaryButton>).toJSON();
    expect(tree).toMatchSnapshot();
    render(button);
    fireEvent.click(screen.getByText('Button'));
    expect(mockFn).toHaveBeenCalled();
  });
});
