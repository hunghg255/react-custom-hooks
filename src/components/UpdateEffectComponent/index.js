import { useState } from 'react';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';

export default function UpdateEffectComponent() {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);
  // useEffect(() => alert(count), [count]);

  return (
    <div>
      <div>Value: {`${count}`}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
