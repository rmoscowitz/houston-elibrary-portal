import './App.css';

import React from 'react';
import {HashRouter, Link, Route} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import About from './About';
import Home from './Home';
import Resources from './Resources';
import overdrive from '../images/overdrive.png';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <HashRouter history={this.props.history}>
        <div className="App">
          {/* Top Bar */}
          <Navbar inverse toggleable>
            <NavbarToggler right onClick={this.toggle}/>
            <NavbarBrand tag={Link} to="/">
              <h3>Houston Book Link</h3>
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/resources">Resources</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          {/* Body */}
          <div className="main-container">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/resources" component={Resources}/>
          </div>

          {/* Footer */}
          <footer className="footer">
            <div className="footer-contact-us">
              Questions? Comments?
              <a href="mailto:houstonbooklink@gmail.com?Subject=Website%20Feedback" target="_top">Email
                us</a>!
            </div>
            <div className="footer-overdrive">
              <img src={overdrive}
                   alt="Powered by Overdrive Logo"/>
            </div>
          </footer>
        </div>
      </HashRouter>

    )
  }
}

export default App
