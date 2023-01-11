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
import CopyToClipboardComponent from './components/CopyToClipboardComponent';
import CookieComponent from './components/CookieComponent';
import TranslationComponent from './components/TranslationComponent';
import OnlineStatusComponent from './components/OnlineStatusComponent';
import RenderCountComponent from './components/RenderCountComponent';
import DebugInformationComponent from './components/DebugInformationComponent';
import HoverComponent from './components/HoverComponent';
import LongPressComponent from './components/LongPressComponent';
import DeepEffectComponent from './components/DeepEffectComponent';

import './app.css';

function App() {
  return (
    <div className='App'>
      <h1>React Custom Hooks</h1>
      <a
        href='https://github.com/hunghg255/react-custom-hooks'
        target='_blank'
        rel='noopener noreferrer'
      >
        Github
      </a>

      <hr />
      <h3>useToggle</h3>
      <ToggleComponent />

      <br />

      <h3>useTimeout</h3>
      <TimeoutComponent />

      <br />

      <h3>useDebounce</h3>
      <DebounceComponent />

      <br />

      <h3>useUpdateEffect</h3>
      <UpdateEffectComponent />

      <br />

      <h3>useArray</h3>
      <ArrayComponent />

      <br />

      <h3>usePrevious</h3>
      <PreviousComponent />

      <br />

      <h3>useStateWithHistory</h3>
      <StateWithHistoryComponent />

      <br />

      <h3>useSessionStorage / useLocalStorage</h3>
      <StorageComponent />

      <br />

      <h3>useAsync</h3>
      <AsyncComponent />

      <br />

      <h3>useFetch</h3>
      <FetchComponent />

      <br />

      <h3>useScript</h3>
      <ScriptComponent />

      <br />

      <h3>useDeepCompareEffect</h3>
      <DeepCompareEffectComponent />

      <br />

      <h3>useEventListener</h3>
      <EventListenerComponent />

      <br />

      <h3>useOnScreen</h3>
      <OnScreenComponent />

      <br />

      <h3>useWindowSize</h3>
      <WindowSizeComponent />

      <br />

      <h3>useMediaQuery</h3>
      <MediaQueryComponent />

      <br />

      <h3>useGeolocation</h3>
      <GeolocationComponent />

      <br />

      <h3>useStateWithValidation</h3>
      <StateWithValidationComponent />

      <br />

      <h3>useSize</h3>
      <SizeComponent />

      <br />

      <h3>useEffectOnce</h3>
      <EffectOnceComponent />

      <br />

      <h3>useClickOutside</h3>
      <ClickOutsideComponent />

      <br />

      <h3>useDarkMode</h3>
      <DarkModeComponent />

      <br />

      <h3>useCopyToClipboard</h3>
      <CopyToClipboardComponent />

      <br />

      <h3>useCookie</h3>
      <CookieComponent />

      <br />

      <h3>useTranslation</h3>
      <TranslationComponent />

      <br />

      <h3>useOnlineStatus</h3>
      <OnlineStatusComponent />

      <br />

      <h3>useRenderCount</h3>
      <RenderCountComponent />

      <br />

      <h3>useDebugInformation</h3>
      <DebugInformationComponent />

      <br />

      <h3>useHover</h3>
      <HoverComponent />

      <br />

      <h3>useLongPress</h3>
      <LongPressComponent />

      <br />

      <h3>useDeepEffect</h3>
      <DeepEffectComponent />
    </div>
  );
}

export default App;
