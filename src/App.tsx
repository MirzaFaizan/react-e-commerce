import React from 'react';
import { AppRouter } from 'src/modules/router/Router';
import {CssBaseline} from '@material-ui/core';
import {withThemeProvider } from 'src/modules/theme/hoc/withTheme';

const App = withThemeProvider(() => <CssBaseline>
<AppRouter/>
</CssBaseline>);

export default App;
