import { useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

const OnScreenComponent = () => {
  const refHeaderTwo = useRef();
  const visible = useOnScreen(refHeaderTwo, '-400px');

  return (
    <>
      <h2 ref={refHeaderTwo}>
        {visible ? 'Element Visible' : 'Element Hidden'}
      </h2>
    </>
  );
};

export default OnScreenComponent;
