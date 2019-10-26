import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DetailsPage from "../Pages/DetailsPage";
import MapPage from "../Pages/MapPage";
import { BrowserRouter } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MapPage} />
          <Route path="/details" component={DetailsPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Content;
