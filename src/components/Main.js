import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './Container';
import Profile from './Profile';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Container}/>
      <Route path='/profile' component={Profile}/>
    </Switch>
  </main>
);

export default Main;