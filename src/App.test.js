import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('home', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
