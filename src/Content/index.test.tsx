import Content from '.';
import { render } from '@testing-library/react';

describe('Content', () => {
  it(`renders a form and a graph`, () => {
    const { container, findByRole } = render(<Content />);

    expect(findByRole('button', { name: /Submit/i })).toBeTruthy();

    expect(container.querySelector('#graphId')).toBeTruthy();
  });
});
