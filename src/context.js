import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({});

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('light');

  function handleChangeTheme() {
    if (theme === 'dark') {
      return setTheme('light');
    }

    return setTheme('dark');
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        handleChangeTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error(
      'ThemeContext functions must be used under ThemeContext context!'
    );

  return context;
}
