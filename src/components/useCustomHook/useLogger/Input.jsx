import React, { useState } from 'react';
import { useLogger } from './useLogger';

const Input = () => {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);
  useLogger(value);
  return <input value={value} onChange={handleChange} />;
};

export default Input;
