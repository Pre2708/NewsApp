import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  // c = 'John'
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <News pageSize={5} country="in" category="general" />
          </Route>
          <Route path="/business">
            <News pageSize={5} country="in" category="business" />
          </Route>
          <Route path="/entertainment">
            <News pageSize={5} country="in" category="entertainment" />
          </Route>
          <Route path="/health">
            <News pageSize={5} country="in" category="health" />
          </Route>
          <Route path="/science">
            <News pageSize={5} country="in" category="science" />
          </Route>
          <Route path="/sports">
            <News pageSize={5} country="in" category="sports" />
          </Route>
          <Route path="/technology">
            <News pageSize={5} country="in" category="technology" />
          </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
