import { useRef } from 'react';
import { useHover } from '../../utils/useHover';

const HoverComponent = () => {
  const elementRef = useRef();
  const hovered = useHover(elementRef);

  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: hovered ? 'red' : 'blue',
        width: '100px',
        height: '100px',
      }}
    />
  );
};

export default HoverComponent;
