import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";
import Ingredients from './containers/Ingredients/Ingredients';
import NewIngredient from './containers/NewIngredient/NewIngredient';

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ingredients" component={Ingredients} />
        <Route exact path="/ingredients/new" component={NewIngredient} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
