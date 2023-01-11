import { useDarkMode } from '../../hooks/useDarkMode';

const DarkModeComponent = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      style={{
        border: `1px solid ${darkMode ? 'white' : 'black'}`,
        backgroundColor: 'none',
        color: darkMode ? 'white' : 'black',
      }}
    >
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeComponent;
