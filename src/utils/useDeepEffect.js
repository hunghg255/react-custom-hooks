import { useEffect, useRef } from 'react';
import isEqual from 'lodash/isEqual';

function deepCompareEquals(a, b) {
  // return JSON.stringify(a) === JSON.stringify(b);
  return isEqual(a, b);
}

function useDeepCompareMemoize(value) {
  const ref = useRef();

  if (!deepCompareEquals(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

const useDeepEffect = (callback, dependencies) => {
  useEffect(callback, dependencies.map(useDeepCompareMemoize));
};

export { useDeepEffect };
