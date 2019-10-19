import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Routing from './routes'
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="my-app">
        <nav
          className="navbar is-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Button color="danger">Danger!</Button>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink
                  exact
                  to="/"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  My CV
                </NavLink>
                <NavLink
                  to="/posts"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  Find XYZ
                </NavLink>
                <NavLink
                  to="/findxyz"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  Restaurants
                </NavLink>
                <NavLink
                  to="/messaging"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  About Messaging API
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <Routing />
      </div>
    );
  }
}

export default App
