import Content from '.';
import { render } from '@testing-library/react';

describe('Content', () => {
  it(`renders a form and a graph`, async () => {
    const { container, findByRole } = render(<Content />);

    expect(await findByRole('button')).toBeInstanceOf(HTMLButtonElement);

    expect(container.querySelector('#graphId')).toBeTruthy();
  });
});
