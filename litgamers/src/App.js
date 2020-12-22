import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import FiftyCent from './components/FiftyCentGames';
import FiveCent from './components/FiveCentGames';
import FiveDollar from './components/FiveDollarGames';
import Footer from './components/Footer';
import FreeGames from './components/FreeGames';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import OneCent from './components/OneCentGames';
import OneDollar from './components/OneDollarGames';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import PrivateOneCent from './utils/PrivateOneCent';
import { getToken, removeUserSession, setUserSession } from './utils/Common';
import Register from './components/RegisterUser';
import HotSauce01 from './components/HotSauceComponents/HotSauce01';
import HotSauce1 from './components/HotSauceComponents/HotSauce1';
import HotSauce5 from './components/HotSauceComponents/HotSauce5';
import HotSauce50 from './components/HotSauceComponents/HotSauce50';
import HotSauce05 from './components/HotSauceComponents/HotSauce05';
import HotSauceFree from './components/HotSauceComponents/HotSauceFree';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`https://litgamers-server.herokuapp.com/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
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
        <Route exact path="/register" component={Register} />
        <Route exact path="/saucefree" component={HotSauceFree} />
        <PrivateOneCent exact path="/sauce01" component={HotSauce01} />
        <PrivateOneCent exact path="/sauce05" component={HotSauce05} />
        <PrivateOneCent exact path="/sauce50" component={HotSauce50} />
        <PrivateOneCent exact path="/saucefive" component={HotSauce5} />
        <PrivateOneCent exact path="/sauceone" component={HotSauce1} />
        <PublicRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
