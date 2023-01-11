import { useMediaQuery } from '../../hooks/useMediaQuery';

const MediaQueryComponent = () => {
  const isLarge = useMediaQuery('(min-width: 1200px)');

  return <div>Large: {isLarge.toString()}</div>;
};

export default MediaQueryComponent;
