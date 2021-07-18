import React from 'react';
import { render } from '@testing-library/react';
import App from '.';
import { TITLE } from '../utils/support';

test('renders the layout', async () => {
  const { container, findByText } = render(<App />);

  expect(container.querySelector('article header h2')?.textContent).toEqual(
    TITLE
  );
  expect(await findByText(/Designed by ecoologic/i)).toBeTruthy();
});
