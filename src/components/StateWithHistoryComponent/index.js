import { useState } from 'react';
import { useStateWithHistory } from '../../hooks/useStateWithHistory';

const StateWithHistoryComponent = () => {
  const [count, setCount, { history, pointer, back, forward, go }] = useStateWithHistory(1);
  const [name, setName] = useState('Join');

  return (
    <>
      <div>{count}</div>
      <div>{history.join(', ')}</div>
      <div>Pointer - {pointer}</div>
      <div>{name}</div>
      <button onClick={() => setCount((prev) => prev * 2)}>Double</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={back}>Back</button>
      <button onClick={forward}>Forward</button>

      <button onClick={() => go(2)}>Go to index 2</button>
      <button onClick={() => setName('Hung')}>Change Name</button>
    </>
  );
};

export default StateWithHistoryComponent;
