import { useState } from 'react';

const useArray = (defaultValue) => {
  const [array, setArray] = useState(defaultValue);

  const push = (element) => {
    setArray((a) => [...a, element]);
  };

  const filter = (callback) => {
    setArray((a) => a.filter(callback));
  };

  const update = (idx, newElement) => {
    setArray((a) => [
      ...a.slice(0, idx),
      newElement,
      ...a.slice(idx + 1, a.length - 1),
    ]);
  };

  const remove = (idx) => {
    setArray((a) => [...a.slice(0, idx), ...a.slice(idx + 1, a.length - 1)]);
  };

  const clear = () => {
    setArray([]);
  };

  return { array, push, filter, update, remove, clear, set: setArray };
};

export { useArray };
