import { useRef } from 'react';
import { useSize } from '../../hooks/useSize';

const SizeComponent = () => {
  const ref = useRef();
  const size = useSize(ref);

  return (
    <>
      <div>{JSON.stringify(size)}</div>
      <textarea ref={ref}></textarea>
    </>
  );
};

export default SizeComponent;
