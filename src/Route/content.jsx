import React from "react";
import { Route, Switch } from "react-router-dom";
import DetailsPage from "../Pages/DetailsPage";
import MapPage from "../Pages/MapPage";
import InsertDataPage from "../Pages/insertData";
import { BrowserRouter } from "react-router-dom";

const Content = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MapPage} />
        <Route path="/details" component={DetailsPage} />
        <Route path="/insert" component={InsertDataPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Content;
