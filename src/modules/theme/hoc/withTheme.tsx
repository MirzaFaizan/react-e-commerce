import { ThemeProvider } from '@material-ui/core';
import React, { useContext, createContext } from 'react';
import {useLocalStorage} from 'src/modules/common/hooks/useLocalStorage';
import { createTheme } from 'src/modules/theme/theme';

interface ContextProps {
  darkMode: boolean;
  setDarkMode(darkMode: boolean): void;
}

const Context = createContext<ContextProps>({
  darkMode: false,
  setDarkMode: () => {},
});

interface Props {
  children?: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStore = () => useContext(Context);

export function withProvider(Component: any) {
  return function WrapperComponent(props: any) {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    );
  };
}

export { Context, Provider };


export function withThemeProvider(Component: any) {
  const WrapperComponent = ({ props }: any) => {
      const {darkMode} = useStore();
    const theme = createTheme({palette:{type:darkMode?'dark':'light'}});
    return (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    );
  };
  return withProvider(WrapperComponent);
}
