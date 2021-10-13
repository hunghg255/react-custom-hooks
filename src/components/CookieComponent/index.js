import { useCookie } from '../../utils/useCookie';

const CookieComponent = () => {
  const [value, update, remove] = useCookie('name', 'John');

  return (
    <>
      <div>{value}</div>
      <button onClick={() => update('Sally')}>Change name to Sally</button>
      <button onClick={remove}>Delete name</button>
    </>
  );
};

export default CookieComponent;
