import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Routes from './Route';
function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Routes></Routes>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
