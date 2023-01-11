import { useRenderCount } from '../../hooks/useRenderCount';
import { useToggle } from '../../hooks/useToggle';

const RenderCountComponent = () => {
  const [boolean, toggle] = useToggle(false);

  const renderCount = useRenderCount();

  return (
    <div>
      <div>{boolean.toString()}</div>
      <div>{renderCount}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default RenderCountComponent;
