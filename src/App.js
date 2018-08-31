import React from 'react';
import { Switch, Route } from 'react-router-dom';

import preload from './data/data.json';
import asyncComponent from './containers/Async';

const Container = asyncComponent(() => import('./components/Container'));
const Profile = asyncComponent(() => import('./components/Profile'));
const Details = asyncComponent(() => import('./components/Details'));
const Upload = asyncComponent(() => import('./containers/Upload'));

const App = () => (
  <Switch>
    <Route exact path='/'
      render={props => <Container preload={preload} {...props} />}
    />
    <Route path='/upload' component={Upload} />
    <Route path='/profile'
      render={props => <Profile preload={preload[0]} {...props} />}
    />
    <Route path="/details/:id"
      render={props => {
        const select = preload.find(show => props.match.params.id === show.id);
        
        return <Details select={select} {...props} />
      }}
    />
  </Switch>
);

export default App;
