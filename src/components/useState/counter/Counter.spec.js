import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('test counter state', () => {
  test('increment counter', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: '+' });
    const span = screen.getByText('0');

    expect(button).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    userEvent.click(button);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('decrementCount counter', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: '-' });
    const span = screen.getByText('0');

    expect(button).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    userEvent.click(button);
    expect(screen.getByText('-1')).toBeInTheDocument();
  });
});
