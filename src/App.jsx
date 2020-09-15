import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import UseStateCounter from './components/useState/counter/Counter';
import UseStateInput from './components/useState/input/Input';
import UseRefInput from './components/useRef/input/Input';
import UseRefPrevInput from './components/useRef/prevStateValue/Input';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/use-state/counter" component={UseStateCounter} />
          <Route exact path="/use-state/input" component={UseStateInput} />
          <Route exact path="/use-ref/input" component={UseRefInput} />
          <Route exact path="/use-ref/prev-input" component={UseRefPrevInput} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
