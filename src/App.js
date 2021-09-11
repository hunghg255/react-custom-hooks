import ArrayComponent from './components/ArrayComponent';
import DebounceComponent from './components/DebounceComponent';
import TimeoutComponent from './components/TimeoutComponent';
import ToggleComponent from './components/ToggleComponent';
import UpdateEffectComponent from './components/UpdateEffectComponent';

function App() {
  return (
    <div className='App'>
      <h1>React Custom Hooks</h1>

      <hr />
      <h3>Toggle Hook</h3>
      <ToggleComponent />
      <hr />

      <hr />
      <h3>Timeout Hook</h3>
      <TimeoutComponent />
      <hr />

      <hr />
      <h3>Debounce Hook</h3>
      <DebounceComponent />
      <hr />

      <hr />
      <h3>Update Effect Hook</h3>
      <UpdateEffectComponent />
      <hr />

      <hr />
      <h3>Array Hook</h3>
      <ArrayComponent />
      <hr />
    </div>
  );
}

export default App;
