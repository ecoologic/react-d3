import { render } from '@testing-library/react';
import GraphForm from '.';

describe('GraphForm', () => {
  it(`updates the caller after submission`, async () => {
    const callback = jest.fn();

    const { findByRole } = render(<GraphForm onSubmit={callback} />);

    expect(await findByRole('textbox', { name: /name/i })).toBeInstanceOf(
      HTMLInputElement
    );
  });
});
