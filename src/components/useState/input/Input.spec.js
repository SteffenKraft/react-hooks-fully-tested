import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('test Input state', () => {
  test('increment Input', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Hello');
    const p = screen.getByText('Hello');
    expect(p).toBeInTheDocument();
  });
});
