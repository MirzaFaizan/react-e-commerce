
    import { Theme, ThemeProvider as Provider } from '@material-ui/core/styles';
    import React from 'react';
    
    import { createTheme } from './theme';
    
    interface Props {
      children: React.ReactChild;
      theme?: Theme;
    }
    
    export const ThemeProvider = ({ children }: Props) => (
      <Provider theme={createTheme()}>{children}</Provider>
    );
    