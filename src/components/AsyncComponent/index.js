import { useAsync } from '../../utils/useAsync';

const AsyncComponent = () => {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        success ? resolve('Hi') : reject('Error');
      }, 1000);
    });
  });

  return (
    <>
      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
    </>
  );
};

export default AsyncComponent;
