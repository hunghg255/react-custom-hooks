import { useCallback, useEffect, useRef } from 'react';

const useTimeout = (callback, delay) => {
  const refCallback = useRef();
  const refTimeout = useRef();

  useEffect(() => {
    refCallback.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    refTimeout.current = setTimeout(() => refCallback.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    refTimeout.current && clearTimeout(refTimeout.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [set, clear]);

  return { clear, reset };
};

export { useTimeout };
