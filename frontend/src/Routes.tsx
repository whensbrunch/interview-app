import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Container,
} from '@material-ui/core';
import {
  Homepage,
  NotFound,
} from './views';


const Routes = () => {
  return (
    <Container maxWidth="lg">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};
export default Routes;
