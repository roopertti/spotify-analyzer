import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { screen, fireEvent, render, act } from '@testing-library/react';

import Header from './index';

describe('Header tests', () => {
  it('renders Header', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render Header, close by backdrop click', async () => {
    const { getByTestId } = render(<Header />);
    const menuButton = getByTestId('menu-button');
    fireEvent.click(menuButton);
    expect(screen.getByTestId('mobile-menu')).toBeTruthy();
    fireEvent.click(screen.getByText('Authorize'));
    expect(screen.getByTestId('mobile-menu')).toBeTruthy();
    await act(async () => {
      fireEvent.click(screen.getByTestId('backdrop'));
      await new Promise((r) => setTimeout(r, 1000));
    });
    expect(screen.queryByTestId('mobile-menu')).toBeFalsy();
  });

  it('render Header, close by menu button click', async () => {
    const { getByTestId } = render(<Header />);
    const menuButton = getByTestId('menu-button');
    fireEvent.click(menuButton);
    expect(screen.getByTestId('mobile-menu')).toBeTruthy();
    fireEvent.click(menuButton);
    await new Promise((r) => setTimeout(r, 1000));
    expect(screen.queryByTestId('mobile-menu')).toBeFalsy();
  });
});
