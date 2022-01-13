import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import About from './About'
import Home from './Home'
import Wallet from './Wallet';




export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                <style type="text/css">
                {`
                .navi {
                   
                }
                `}
            </style>
                    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navi" >
                        <Navbar.Brand as={Link} to="/home">BAR</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/Wallet">Wallet</Nav.Link>
                                <Nav.Link as={Link} to="/App">App</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>

                        <Route path="/home">
                            <Home />
                        </Route>

                        <Route path="/wallet">
                            <Wallet />
                        </Route>

                       
                        
                        
                    </Switch>
                </div>
            </Router>
        )
    }
}