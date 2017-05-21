import './App.css';

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import About from './About';
import Home from './Home';
import Resources from './Resources';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

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
            <Router>
                <div className="App">
                    <Navbar inverse toggleable>
                      <NavbarToggler right onClick={this.toggle} />
                      <NavbarBrand href="/"><h2>Houston Book Link</h2></NavbarBrand>
                      <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                          <NavItem>
                            <NavLink href="/about">About</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="/resources">Resources</NavLink>
                          </NavItem>
                        </Nav>
                      </Collapse>
                    </Navbar>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/resources" component={Resources}/>
                </div>
            </Router>

        )
    }
}

export default App


