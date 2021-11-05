import { useRenderCount } from '../../utils/useRenderCount';
import { useToggle } from '../../utils/useToggle';

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
