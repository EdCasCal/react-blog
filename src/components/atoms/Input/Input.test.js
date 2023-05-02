import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/any-framework';
import Input from './Input';

test('renders input with placeholder', () => {
  render(<Input type="text" placeholder="Enter text" />);

  const input = screen.getByPlaceholderText('Enter text');
  
  expect(input).toBeInTheDocument();
});