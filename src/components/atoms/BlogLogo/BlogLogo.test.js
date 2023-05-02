import React from 'react';
import { render } from '@testing-library/react';
import {screen} from '@testing-library/any-framework';
import BlogLogo from './BlogLogo';

test('renders blog logo', () => {
  render(<BlogLogo />);
  const logo = screen.getByAltText('Blog Logo');

  expect(logo).toBeInTheDocument();
});