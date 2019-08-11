import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { getPosts } from './data';

const Container = lazy(() => import('./components/Container'));
const Profile = lazy(() => import('./components/Profile'));
const Details = lazy(() => import('./components/Details'));
const Upload = lazy(() => import('./containers/Upload'));

const App = () => {
  const [preload, setPreload] = useState([]);

  useEffect(() => {
    getPosts().then(res => setPreload(res));
  }, []);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Container preload={preload} {...props} />}
        />
        <Route path="/upload" component={Upload} />
        <Route
          path="/profile"
          render={props => <Profile preload={preload[0]} {...props} />}
        />
        <Route
          path="/details/:id"
          render={props => {
            const select = preload.find(show => show.id);

            return <Details select={select} {...props} />;
          }}
        />
      </Switch>
    </Suspense>
  );
};

export default App;
