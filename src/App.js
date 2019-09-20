import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AppNavbar from './components/layout/AppNavbar';
import Landing from './components/pages/landing/Landing';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Article from './components/articles/Article'
function App() {
  return (
    <Router>

    <div className="App">
      <AppNavbar />
      <Switch>
        <Route exact path = '/' component = {Landing} />
        <Route exact path = '/about' component = {About} />
        <Route exact path = '/article' component = {Article} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
