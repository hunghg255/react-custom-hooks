import { useState } from 'react';
import { useEffectOnce } from '../../utils/useEffectOnce';

const EffectOnceComponent = () => {
  const [count, setCount] = useState(0);

  useEffectOnce(() => alert('Effect once'));

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
};

export default EffectOnceComponent;
