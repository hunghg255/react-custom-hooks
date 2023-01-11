import { useEffect, useRef } from 'react';
import isEqual from 'lodash/isEqual';

const useDeepCompareEffect = (callback, dependencies) => {
  const refCurrentDependencies = useRef();

  if (!isEqual(refCurrentDependencies.current, dependencies)) {
    refCurrentDependencies.current = dependencies;
  }

  useEffect(callback, refCurrentDependencies.current);
};

export { useDeepCompareEffect };
