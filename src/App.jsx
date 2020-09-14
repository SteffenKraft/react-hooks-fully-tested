import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import UseState from './components/useState/UseState';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/use-state" component={UseState} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
