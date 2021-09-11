import { useToggle } from '../../utils/useToggle';

export default function ToggleComponent() {
  const [value, setToggle] = useToggle(false);

  return (
    <div>
      <div>Value: {`${value}`}</div>
      <button onClick={setToggle}>Toggle</button>
      <button onClick={() => setToggle(true)}>Set True</button>
      <button onClick={() => setToggle(false)}>Set False</button>
    </div>
  );
}
