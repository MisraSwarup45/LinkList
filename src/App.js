import React from "react";
import {
  BrowserRouter as Router,
  // Route,
  Redirect,
  // Routes,
} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';

import About from "./pages/About";
import Link from './pages/Link';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" exact>
            <Link />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
