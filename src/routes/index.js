import React from 'react'
import { Switch, Route } from 'react-router-dom'

import FindXYZ from "../pages/FindXYZ";
import CV from '../pages/CV'
import MessagingAPI from "../pages/MessagingAPI";
import Restaurants from "../pages/Restaurants";

export default () => (
  <Switch>
    <Route exact path="/" component={CV} />
    <Route exact path="/restaurants" component={Restaurants} />
    <Route exact path="/findxyz" component={FindXYZ} />
    <Route exact path="/messaging" component={MessagingAPI} />
  </Switch>
);