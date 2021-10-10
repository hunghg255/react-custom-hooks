import { useGeolocation } from '../../utils/useGeolocation';

const GeolocationComponent = () => {
  const {
    loading,
    error,
    data: { latitude, longitude },
  } = useGeolocation();

  return (
    <>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error?.message}</div>
      <div>
        latitude: {latitude} - longitude: {longitude}
      </div>
    </>
  );
};

export default GeolocationComponent;
