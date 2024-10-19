import React, { useState } from 'react';

const ThemeSwitcher = ({ initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme || 'light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <p>Current theme: {theme}</p>
    </div>
  );
};

export default ThemeSwitcher;
