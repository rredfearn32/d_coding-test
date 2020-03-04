import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import PageNotFound from './pages/PageNotFound';

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
