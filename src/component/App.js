import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import Gallry from "../pages/Gallary";
import DefaultPage from "../pages/DefaultPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/gallery" component={Gallry} />
        <Route component={DefaultPage} />
      </Switch>
    </div>
  );
};

export default App;
