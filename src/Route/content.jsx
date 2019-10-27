import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import DetailsPage from '../Pages/DetailsPage';
import MapPage from '../Pages/MapPage';

class Content {
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
