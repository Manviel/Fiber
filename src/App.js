import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import preload from './data/data.json';
import asyncComponent from './components/Async';

const Container = asyncComponent(() => import('./components/Container'));
const Profile = asyncComponent(() => import('./components/Profile'));
const Details = asyncComponent(() => import('./components/Details'));
const Upload = asyncComponent(() => import('./editor/Upload'));

const App = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/'
          component={props => <Container preload={preload} {...props} />}
        />
        <Route path='/upload' component={Upload} />
        <Route path='/profile'
          component={props => <Profile preload={preload} {...props} />}
        />
        <Route path="/details/:id"
          component={props => {
            const selected = preload.photos.find(
              show => props.match.params.id === show.id);
            return <Details show={selected} {...props} />
          }}
        />
      </Switch>
    </Fragment>
  );
}

export default App;
