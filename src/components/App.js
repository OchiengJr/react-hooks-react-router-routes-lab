import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <NavBar/>

      <Switch>

        {/* Movies */}
        <Route axact path="/movies">
          <Movies/>
        </Route>

        {/* Directors */}
        <Route exact path="/directors">
          <Directors/>
        </Route>

        {/* Actors */}
        <Route exact path="/actors">
          <Actors/>
        </Route>

        {/* Home */}
        <Route exact path="/"> 
          <Home/>
        </Route>
    
      </Switch>

    </div>
  );
}

export default App;
