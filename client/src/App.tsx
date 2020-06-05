import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Components/PageComponents/Header';
import Footer from './Components/PageComponents/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import History from './Pages/History';
import PageNotFound from './Pages/PageNotFound';

const App: FC = () => {
  return (
    <div className="d-flex flex-column justify-content-between vh-100" data-test="component-app">
      <Router>
        {/* Wrapping these in a div so that flex can be used to push footer to the bottom of the page */}
        <div>
          <Header></Header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/history' component={History} />
            <Route exact path='*' component={PageNotFound} />
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
