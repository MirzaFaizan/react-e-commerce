import { BrowserRouter as Router } from 'react-router-dom';
import React, { lazy, memo } from 'react';
import { RoutePage } from 'modules/router/RoutePage';

const HomePageContainer = lazy(
  () => import('src/homepage/containers/HomePageContainer')
);

export const AppRouter = memo(() => (
  <Router>
    <RoutePage path="/" Component={HomePageContainer} />
  </Router>
));
