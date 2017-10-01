import React from 'react';
import { Switch, Route } from 'react-router-dom';

import preload from '../data/data.json';
import Container from './Container';
import Profile from './Profile';
import Details from './Details';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Container}/>
      <Route path='/profile' component={Profile}/>
      <Route path="/details/:id"
        component={props => {
          const selected = preload.photos.find(
            show => props.match.params.id === show.id);
          return <Details show={selected} {...props} />
        }}
      />
    </Switch>
  </main>
);

export default Main;