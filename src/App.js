import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./containers/Home/Home";
import Match from "./containers/Match/Match";
import Profile from "./containers/Profile/Profile";

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route path="/match"><Match /></Route>
          <Route path="/profile"><Profile /></Route>
        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
