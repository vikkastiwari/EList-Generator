import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import GaneshPoojan from "./categories/GaneshPoojan";
import VivahSamagri from "./categories/VivahSamagri";
import GrahShanti from "./categories/GrahShanti";
import GrhPravesh from "./categories/GrhPravesh";
import SatyanarayanPoojan from "./categories/SatyanarayanPoojan";
import Next from "./page/next";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/ganeshpoojan">
            <GaneshPoojan />
          </Route>
          <Route path="/vivahsamagri">
            <VivahSamagri />
          </Route>
          <Route path="/grahshanti">
            <GrahShanti />
          </Route>
          <Route path="/grhpravesh">
            <GrhPravesh />
          </Route>
          <Route path="/satyanarayanpoojan">
            <SatyanarayanPoojan />
          </Route>
          <Route path="/next">
            <Next />
          </Route>
          <Route path="/">
            <GaneshPoojan />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
