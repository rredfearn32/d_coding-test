import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import PageNotFound from './Pages/PageNotFound';

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-between vh-100">
      <Router>
        {/* Wrapping these in a div so that flex can be used to push footer to the bottom of the page */}
        <div>
          <Header></Header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='*' component={PageNotFound} />
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
