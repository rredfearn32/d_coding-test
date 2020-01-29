import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <React.Fragment>
        <Header></Header>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/login' component={Login} /> */}
            {/* <Route exact path='/register' component={Register} /> */}
            {/* <Route exact path='/dashboard' component={Dashboard} /> */}
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
