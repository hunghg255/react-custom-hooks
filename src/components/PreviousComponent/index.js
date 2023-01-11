import { useState } from 'react';
import { usePrevious } from '../../hooks/usePrevious';

const PreviousComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Kyle');
  const previousCount = usePrevious(count);

  return (
    <>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>

      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName('Join')}>Change name</button>
    </>
  );
};

export default PreviousComponent;
