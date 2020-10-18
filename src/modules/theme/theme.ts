import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

import {
  BG_COLOR,
  ERROR_COLOR,
  SECONDARY_COLOR,
  SUCCESS_COLOR,
} from './consts';

export const createTheme = (options: ThemeOptions = {}) => {
  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        primary: {
          main: 'rgba(28,28,30,0.93)',
          light: 'rgb(99,99,99)',
        },
        secondary: {
          main: SECONDARY_COLOR,
          light: 'rgb(99,99,99)',
        },
        background: {
          default: BG_COLOR,
        },
        success: { main: SUCCESS_COLOR },
        error: { main: ERROR_COLOR },
      },
      typography: {
        fontSize: 13,
        fontFamily: [
          'DroidNaskh-Regular',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ].join(','),
      },
      ...options,
    }),
  );
};
