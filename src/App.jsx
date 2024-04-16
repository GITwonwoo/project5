import './App.css';
import data from './data.js';
import {useState} from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home.jsx';


function App() {
  const [foods, setFoods] = useState(data);

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-transparent">
        <Container>
          <Navbar.Brand><img src="/img/meatlogo.png" alt="" width='20%' />MeatClub</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>HOME</Nav.Link>
              <Nav.Link>MENU</Nav.Link>
              <Nav.Link>Features</Nav.Link>
              <Nav.Link>Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>LOGIN</Nav.Link>
              <Nav.Link>Cart</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Home foods={foods}></Home>
 
    
      <p className='footer'>COPYRIGHT(C) 2024 Nike, Inc. All Rights Reserved</p>
   
    </div>
  );
}



export default App;
