import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import ThemeContext from "./src/themes/ThemeContext";
import {dark, light} from './src/themes/themes';
import Home from './src/Home';

const App = () => {
  const [theme, setTheme] = useState(dark);

  const handleSwitchTheme = () => {
    setTheme((oldTheme) => {
      if (oldTheme.background === "#FFFFFF") {
        return dark;
      }
      return light;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        switchTheme: handleSwitchTheme,
      }}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
