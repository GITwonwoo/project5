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
 
      <div className='footer'>
            <div className='footerone'>
              <p>food fun</p>
              <p>Which morning four</p>
            </div>

            <div className='footertwo'>
              <p>Contact Us</p>
              <div className='ContactUs'>
                  <img src="1" alt="1" />
                  <p>1</p>
              </div>
              <div className='ContactUs'>
                  <img src="2" alt="2" />
                  <p>2</p>
              </div>
              <div className='ContactUs'>
                  <img src="3" alt="3" />
                  <p>3</p> 
              </div>
            </div>

            <div className='footerthree'>
            <p>Contact Us</p>
              <h6>1</h6>
              <h6>2</h6>
              <h6>3</h6>
            </div>
      </div>
  
   
    </div>
  );
}



export default App;
