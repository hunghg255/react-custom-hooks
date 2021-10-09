import { useState } from 'react';

import { useFetch } from '../../utils/useFetch';

const FetchComponent = () => {
  const [id, setId] = useState(1);

  const { loading, error, value } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  );

  return (
    <>
      <div>{id}</div>
      <button onClick={() => setId((prev) => prev + 1)}>Increment ID</button>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
    </>
  );
};

export default FetchComponent;
