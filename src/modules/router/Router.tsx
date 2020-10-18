import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { lazy, memo } from 'react';
import { RoutePage } from 'src/modules/router/RoutePage';

const HomePageContainer = lazy(
  () => import('src/home/containers/HomePageContainer')
);

const LandingPageContainer = lazy(
  () => import('src/landing/containers/LandingPageContainer')
);

export const AppRouter = memo(() => (
  <Router>
    <Switch>
    <RoutePage path="/" Component={HomePageContainer} />
    <RoutePage path="/landing" Component={LandingPageContainer} />
    </Switch>
  </Router>
));
