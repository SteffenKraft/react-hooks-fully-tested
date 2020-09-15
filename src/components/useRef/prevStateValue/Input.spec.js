import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';
import userEvent from '@testing-library/user-event';

describe('test useRef previous input', () => {
  test('previous state input', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Hello');
    const currentP = screen.getByText('current state: Hello');
    const prevP = screen.getByText('previous state: Hell');
    expect(currentP).toBeInTheDocument();
    expect(prevP).toBeInTheDocument();
  });
});
