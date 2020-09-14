import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Counter from './components/useState/counter/Counter';
import Input from './components/useState/input/Input';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/use-state/counter" component={Counter} />
          <Route exact path="/use-state/input" component={Input} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
