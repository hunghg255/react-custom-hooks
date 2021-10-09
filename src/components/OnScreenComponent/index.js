import { useRef } from 'react';
import { useOnScreen } from '../../utils/useOnScreen';

const OnScreenComponent = () => {
  const refHeaderTwo = useRef();
  const visible = useOnScreen(refHeaderTwo, '-400px');

  return (
    <>
      <h1>Header</h1>
      <h2 ref={refHeaderTwo}>Header 2 {visible && '(Visible)'}</h2>
      <div>Lorem ipsum dolor sit amet, consectetur adip</div>
    </>
  );
};

export default OnScreenComponent;
