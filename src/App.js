import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import preload from './data/data.json';
import Container from './components/Container';
import Profile from './components/Profile';
import Details from './components/Details';
import Upload from './components/editor/Upload';

class App extends Component {
  render() {
    return(
      <main>
        <Switch>
        <Route exact path='/' component={Container}/>
        <Route path='/upload' component={Upload} />
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
  }
}

export default App;
