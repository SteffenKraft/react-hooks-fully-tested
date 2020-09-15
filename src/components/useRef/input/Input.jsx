import React, { useEffect, useRef, useState } from 'react';

function Input() {
  const [inputValue, setInputValue] = useState(() => '');
  const inputRef = useRef();

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <h3>Input</h3>
      <input ref={inputRef} onChange={handleOnChange} value={inputValue} />
      <p>{inputValue}</p>
    </>
  );
}

export default Input;
