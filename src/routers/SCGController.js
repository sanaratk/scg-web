import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom';


import FindXYZ from "../pages/FindXYZ";
import CV from '../pages/CV'
import MessagingAPI from "../pages/MessagingAPI";
import Restaurants from "../pages/FindRestaurants";

const SCGController = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CV} />
      <Route exact path="/restaurants" component={Restaurants} />
      <Route exact path="/findxyz" component={FindXYZ} />
      <Route exact path="/messaging" component={MessagingAPI} />
    </Switch>
  </BrowserRouter>

);

export default SCGController;
