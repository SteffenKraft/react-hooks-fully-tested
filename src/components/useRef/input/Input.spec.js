import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('test useRef input', () => {
  test('focus input', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveFocus();
  });
});
