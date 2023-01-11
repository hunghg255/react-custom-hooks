import { useEffect, useRef } from 'react';

const useEventListener = (eventType, callback, element = window) => {
  const refCallback = useRef(callback);

  useEffect(() => {
    refCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e) => refCallback.current(e);
    element.addEventListener(eventType, handler);
    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
};

export { useEventListener };
