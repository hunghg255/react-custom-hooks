import ArrayComponent from './components/ArrayComponent';
import AsyncComponent from './components/AsyncComponent';
import ClickOutsideComponent from './components/ClickOutsideComponent';
import DarkModeComponent from './components/DarkModeComponent';
import DebounceComponent from './components/DebounceComponent';
import DeepCompareEffectComponent from './components/DeepCompareEffectComponent';
import EffectOnceComponent from './components/EffectOnceComponent';
import EventListenerComponent from './components/EventListenerComponent';
import FetchComponent from './components/FetchComponent';
import GeolocationComponent from './components/GeolocationComponent';
import MediaQueryComponent from './components/MediaQueryComponent';
import OnScreenComponent from './components/OnScreenComponent';
import PreviousComponent from './components/PreviousComponent';
import ScriptComponent from './components/ScriptComponent';
import SizeComponent from './components/SizeComponent';
import StateWithHistoryComponent from './components/StateWithHistoryComponent';
import StateWithValidationComponent from './components/StateWithValidationComponent';
import StorageComponent from './components/StorageComponent';
import TimeoutComponent from './components/TimeoutComponent';
import ToggleComponent from './components/ToggleComponent';
import UpdateEffectComponent from './components/UpdateEffectComponent';
import WindowSizeComponent from './components/WindowSizeComponent';

import './app.css';
import CopyToClipboardComponent from './components/CopyToClipboardComponent';
import CookieComponent from './components/CookieComponent';
import TranslationComponent from './components/TranslationComponent';

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

      <hr />
      <h3>Previous Hook</h3>
      <PreviousComponent />
      <hr />

      <hr />
      <h3>State With History Hook</h3>
      <StateWithHistoryComponent />
      <hr />

      <hr />
      <h3>Storage Hook</h3>
      <StorageComponent />
      <hr />

      <hr />
      <h3>Async Hook</h3>
      <AsyncComponent />
      <hr />

      <hr />
      <h3>Fetch Hook</h3>
      <FetchComponent />
      <hr />

      <hr />
      <h3>Script Hook</h3>
      <ScriptComponent />
      <hr />

      <hr />
      <h3>Deep Compare Hook</h3>
      <DeepCompareEffectComponent />
      <hr />

      <hr />
      <h3>Event Listener Hook</h3>
      <EventListenerComponent />
      <hr />

      <hr />
      <h3>On Screen Hook</h3>
      <OnScreenComponent />
      <hr />

      <hr />
      <h3>Window Size Hook</h3>
      <WindowSizeComponent />
      <hr />

      <hr />
      <h3>Media Query Hook</h3>
      <MediaQueryComponent />
      <hr />

      <hr />
      <h3>Geolocation Hook</h3>
      <GeolocationComponent />
      <hr />

      <hr />
      <h3>State With Validation Hook</h3>
      <StateWithValidationComponent />
      <hr />

      <hr />
      <h3>Size Hook</h3>
      <SizeComponent />
      <hr />

      <hr />
      <h3>Effect Once Hook</h3>
      <EffectOnceComponent />
      <hr />

      <hr />
      <h3>Click Outside Hook</h3>
      <ClickOutsideComponent />
      <hr />

      <hr />
      <h3>Dark Mode Hook</h3>
      <DarkModeComponent />
      <hr />

      <hr />
      <h3>Copy Clipboard Hook</h3>
      <CopyToClipboardComponent />
      <hr />

      <hr />
      <h3>Cookie Hook</h3>
      <CookieComponent />
      <hr />

      <hr />
      <h3>Translate Hook</h3>
      <TranslationComponent />
      <hr />
    </div>
  );
}

export default App;
