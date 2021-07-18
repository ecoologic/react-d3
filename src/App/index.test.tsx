import React from 'react';
import { render } from '@testing-library/react';
import App from '.';
import { TITLE } from '../utils/support';

test('renders the layout', () => {
  const { container, findByText } = render(<App />);

  expect(container.querySelector('article header h2')?.textContent).toEqual(
    TITLE
  );
  expect(findByText('Designed by ecoologic')).toBeTruthy();
});
