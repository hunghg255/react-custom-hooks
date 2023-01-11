import { useRef } from 'react';
import { useLongPress } from '../../hooks/useLongPress';

const LongPressComponent = () => {
  const elementRef = useRef();

  useLongPress(elementRef, () => alert('Long Press'), { delay: 1000 });

  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: 'red',
        width: '100px',
        height: '100px',
      }}
    />
  );
};

export default LongPressComponent;
