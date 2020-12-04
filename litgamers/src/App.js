import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import FiftyCent from './components/FiftyCentGames';
import FiveCent from './components/FiveCentGames';
import FiveDollar from './components/FiveDollarGames';
import Footer from './components/Footer';
import FreeGames from './components/FreeGames';
import Header from './components/Header';
import Home from './components/Home';
import OneCent from './components/OneCentGames';
import OneDollar from './components/OneDollarGames';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/fiftycent" component={FiftyCent} />
        <Route exact path="/fivedollar" component={FiveDollar} />
        <Route exact path="/fivecent" component={FiveCent} />
        <Route exact path="/free" component={FreeGames} />
        <Route exact path="/onedollar" component={OneDollar} />
        <Route exact path="/onecent" component={OneCent} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
