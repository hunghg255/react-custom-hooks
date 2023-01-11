import { useState } from 'react';

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (value) => {
    setValue((currentValue) => {
      return typeof value === 'boolean' ? value : !currentValue;
    });
  };

  return [value, toggleValue];
};

export { useToggle };
