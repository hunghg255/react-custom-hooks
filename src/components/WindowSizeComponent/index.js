import { useWindowSize } from '../../utils/useWindowSize';

const WindowSizeComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      Width: {width} - Height: {height}
    </div>
  );
};

export default WindowSizeComponent;
