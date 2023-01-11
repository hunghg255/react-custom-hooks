import { useCallback, useRef, useState } from 'react';

const useStateWithHistory = (defaultValue, { capacity = 10 } = {}) => {
  const [value, setValue] = useState(defaultValue);
  const refHistory = useRef([value]);
  const refPointer = useRef(0);

  const set = useCallback(
    (v) => {
      const resolvedValue = typeof v === 'function' ? v(value) : v;

      if (refHistory.current[refPointer.current] !== resolvedValue) {
        if (refPointer.current < refHistory.current.length - 1) {
          refHistory.current.splice(refPointer.current + 1);
        }

        refHistory.current.push(resolvedValue);

        while (refHistory.current.length > capacity) {
          refHistory.current.shift();
        }

        refPointer.current = refHistory.current.length - 1;
        setValue(resolvedValue);
      }
    },
    [capacity, value],
  );

  const back = useCallback(() => {
    if (refPointer.current <= 0) return;
    refPointer.current--;
    setValue(refHistory.current[refPointer.current]);
  }, []);

  const forward = useCallback(() => {
    if (refPointer.current >= refHistory.current.length - 1) return;
    refPointer.current++;
    setValue(refHistory.current[refPointer.current]);
  }, []);

  const go = useCallback((index) => {
    if (index < 0 || index >= refHistory.current.length - 1) return;
    refPointer.current = index;
    setValue(refHistory.current[refPointer.current]);
  }, []);

  return [
    value,
    set,
    {
      history: refHistory.current,
      pointer: refPointer.current,
      back,
      forward,
      go,
    },
  ];
};

export { useStateWithHistory };
