import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Comp.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from '../pages/Home';
import Impact from '../pages/Impact';
import Story from '../pages/Story';
import Plans from '../pages/Plans';
import Faq from '../pages/Faq';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';


export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar fixed="top" bg="light" expand="lg">
            <Container className='fw-bold fs-6'>
              <Navbar.Brand href="#home"><img
                src="https://frupro.com/wp-content/uploads/2021/02/frupro.png"
                width="auto"
                height="60"
                className="d-inline-block align-top"
                alt="Frupro Logo"
              /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link as={Link} to="/" className='me-3'>HOME</Nav.Link>
                  <Nav.Link as={Link} to="/impact" className='me-3'>IMPACT</Nav.Link>
                  <Nav.Link as={Link} to="/story" className='me-3'>STORY</Nav.Link>
                  <NavDropdown title="BENEFITS" id="basic-nav-dropdown" className='me-3'>
                    <NavDropdown.Item href="#action/3.1">FruPro for Fresh Produce Growers</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      FruPro for Fresh Produce Importers
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">FruPro for Fruit and Veg Wholesalers</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      FruPro For Fresh Produce Retailers
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/plans" className='me-3'>PLANS</Nav.Link>
                  <Nav.Link as={Link} to="/faq" className='me-3'>FAQ</Nav.Link>
                  <Nav.Link as={Link} to="/blog" className='me-3'>BLOG</Nav.Link>
                </Nav>
                <Navbar.Text className='ml-auto'>
                  <Link as={Link} to="/contact">
                  <Button variant="success" className='fw-bold bt-color me-lg-3 rounded-pill px-4 py-2'>CONTACT US</Button>
                  </Link>
                  <Button variant="success" className='fw-bold bt-color-2 rounded-pill px-4 py-2'>SIGN IN</Button>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/impact" element={<Impact />}/>
                <Route path="/story" element={<Story />}/>
                <Route path="/plans" element={<Plans />}/>
                <Route path="/faq" element={<Faq />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </div>
        </Router>
    )
  }
}




