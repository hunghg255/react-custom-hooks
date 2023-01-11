import { useEffect, useMemo, useRef, useState } from 'react';
import { useDeepCompareEffect } from '../../hooks/useDeepCompareEffect';

const DeepCompareEffectComponent = () => {
  const [age, setAge] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const refUseEffectCount = useRef();
  const refUseDeepCompareEffectCount = useRef();

  // const person = { age: age, name: 'Kyle' };
  const person = useMemo(() => ({ age: age, name: 'Kyle' }), [age]);

  useEffect(() => {
    refUseEffectCount.current.textContent =
      parseInt(refUseEffectCount.current.textContent) + 1;
  }, [person]);

  useDeepCompareEffect(() => {
    refUseDeepCompareEffectCount.current.textContent =
      parseInt(refUseDeepCompareEffectCount.current.textContent) + 1;
  }, [person]);

  return (
    <>
      <div>
        useEffect: <span ref={refUseEffectCount}>0</span>
      </div>
      <div>
        useDeepCompareEffect: <span ref={refUseDeepCompareEffectCount}>0</span>
      </div>

      <div>Other Count: {otherCount}</div>
      <div>{JSON.stringify(person)}</div>
      <button onClick={() => setAge((prev) => prev + 1)}>Increment Age</button>
      <button onClick={() => setOtherCount((prev) => prev + 1)}>
        Increment Other Count
      </button>
    </>
  );
};

export default DeepCompareEffectComponent;
