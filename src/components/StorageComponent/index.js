import {
  useSessionStorage,
  useLocalStorage,
} from '../../utils/useSessionStorage';

const StorageComponent = () => {
  const [name, setName, removeName] = useSessionStorage('name', 'Kyle');
  const [age, setAge, removeAge] = useLocalStorage('age', 26);

  return (
    <>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName('John')}>Set Name</button>
      <button onClick={() => setAge(40)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </>
  );
};

export default StorageComponent;
