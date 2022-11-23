import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from 'react-router-dom';

import About from "./pages/About";
import Link from './pages/Link';
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <Router>
    <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Link />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
