import { fireEvent, render } from '@testing-library/react';
import GraphForm from '.';

describe('GraphForm', () => {
  it(`updates the caller after submission`, async () => {
    const callback = jest.fn();

    const { getByRole, container } = render(<GraphForm onSubmit={callback} />);

    const nameInput = getByRole('textbox', { name: /Name/i });
    const sizeInput = getByRole('spinbutton', { name: /Size/i });
    // const submit = getByRole('button', { name: /Submit/i }); // Doesn't work
    // const submit = getByText(/Submit/i); // Also Works
    const submit = container.querySelector('form button');

    fireEvent.change(nameInput, { target: { value: 'test' } });
    fireEvent.change(sizeInput, { target: { value: '1' } });
    if (submit) {
      fireEvent.click(submit);
    } else {
      throw 'no submit button';
    }

    expect(callback.mock.calls).toEqual([[{ name: 'test', size: 1 }]]);
  });
});
