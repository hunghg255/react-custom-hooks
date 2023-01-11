import React, { useState, useEffect } from 'react';
import { useDeepEffect } from '../../hooks/useDeepEffect';

export default function DeepEffectComponent() {
  const [obj, setObj] = useState({ a: 1 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect');
  }, [obj]);

  useDeepEffect(() => {
    console.log('useDeepEffect');
  }, [obj]);

  return (
    <div>
      <div>{JSON.stringify(obj)}</div>
      <div>Count: {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          setObj({ a: 1 });
        }}
      >
        Click
      </button>
    </div>
  );
}
