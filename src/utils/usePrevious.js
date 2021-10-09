import { useRef } from 'react';

const usePrevious = (value) => {
  const refCurrent = useRef(value);
  const refPrevious = useRef();

  if (refCurrent.current !== value) {
    refPrevious.current = refCurrent.current;
    refCurrent.current = value;
  }

  return refPrevious.current;
};

export { usePrevious };
