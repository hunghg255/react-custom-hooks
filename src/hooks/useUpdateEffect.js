import { useEffect, useRef } from 'react';

const useUpdateEffect = (callback, dependencies) => {
  const refFirstRender = useRef(true);

  useEffect(() => {
    if (refFirstRender.current) {
      refFirstRender.current = false;
      return;
    }

    return callback();
  }, dependencies);
};

export { useUpdateEffect };
