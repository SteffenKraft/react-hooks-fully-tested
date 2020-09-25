import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';
import userEvent from '@testing-library/user-event';

test('test useLocalStorage hook', () => {
  render(<Input />);
  const input = screen.getByRole('textbox');
  userEvent.type(input, 'Paul');
  expect(input.value).toBe('Paul');
  userEvent.type(input, 'Peter');
  expect(JSON.parse(localStorage.getItem('name'))).toBe('Peter');
});
