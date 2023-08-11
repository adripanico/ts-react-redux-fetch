import { createContext, ReactNode, useEffect, useState } from 'react';

const THEMES = {
  Light: 'light',
  Dark: 'dark',
} as const;
type Theme = (typeof THEMES)[keyof typeof THEMES];

const LOCAL_STORAGE_THEME_KEY = 'theme';
const DEFAULT_THEME = THEMES.Dark;

interface IThemeContext {
  theme: Theme | undefined;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: undefined,
  toggleTheme: () => {},
});

export const ThemeContextProvider = (props: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>();

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || DEFAULT_THEME;
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme);
    } else {
      setTheme(DEFAULT_THEME);
    }
  }, []);

  useEffect(() => {
    const bodyClasses = document.body.classList;

    switch (theme) {
      case 'dark':
        bodyClasses.remove('light-theme');
        bodyClasses.add('dark-theme');
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, 'dark');
        break;
      case 'light':
        bodyClasses.remove('dark-theme');
        bodyClasses.add('light-theme');
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, 'light');
        break;
      default:
      // do nothing
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
