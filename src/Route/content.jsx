import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import DetailsPage from '../Pages/DetailsPage';
import MapPage from '../Pages/MapPage';

// eslint-disable-next-line react/prefer-stateless-function
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
