import { useCallback, useEffect, useRef, useState } from 'react';
import { useEventListener } from './useEventListener';
import debounce from 'lodash/debounce';

const useMediaQuery = (mediaQuery) => {
  const [isMatch, setIsMatch] = useState(false);
  const refDebounce = useRef();

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  refDebounce.current = useCallback(
    debounce((matches) => {
      if (matches !== isMatch) setIsMatch(matches);
    }, 500),
    [isMatch]
  );

  useEventListener('resize', () => {
    const list = window.matchMedia(mediaQuery);
    refDebounce.current(list.matches);
  });

  return isMatch;
};

export { useMediaQuery };
