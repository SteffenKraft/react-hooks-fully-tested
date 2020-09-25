import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const Input = () => {
  const [value, setValue] = useLocalStorage('name', '');
  const handleChange = (e) => setValue(e.target.value);
  return <input value={value} onChange={handleChange} />;
};

export default Input;
