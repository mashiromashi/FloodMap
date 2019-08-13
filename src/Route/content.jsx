import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DetailsPage from "../Pages/DetailsPage";
import MapPage from "../Pages/MapPage";
import InsertDataPage from "../Pages/insertData";

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MapPage} />
        <Route path="/details" component={DetailsPage} />
        <Route path="/insert" component={InsertDataPage} />
      </Switch>
    );
  }
}

export default Content;
