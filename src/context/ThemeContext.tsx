import { createContext, ReactNode, useEffect, useState } from 'react';

const THEMES = {
  Light: 'light',
  Dark: 'dark',
} as const;
type Theme = (typeof THEMES)[keyof typeof THEMES];

interface IThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeContextProvider = (props: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const bodyClasses = document.body.classList;

    if (theme === 'dark') {
      bodyClasses.remove('light-theme');
      bodyClasses.add('dark-theme');
    } else {
      bodyClasses.remove('dark-theme');
      bodyClasses.add('light-theme');
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
