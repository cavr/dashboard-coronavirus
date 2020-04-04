import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('', () => {
  const { getByText } = render(<App />);
  const noData = getByText(/noData/i);
  expect(noData).toBeInTheDocument();
});
