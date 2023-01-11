import { useEffect, useRef } from 'react';

const useRenderCount = () => {
  const count = useRef(1);

  // count.current++;
  useEffect(() => count.current++);

  return count.current;
};

export { useRenderCount };
