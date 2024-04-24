import './App.css';
import data from './data.js';
import { useState } from 'react';
import { Container, Navbar, Nav, Row,Col } from 'react-bootstrap';
import Home from './routes/Home.jsx';
import {Routes, Route, Link, useNavigate } from 'react-router-dom';
import Detail from './routes/Detail.jsx';


function App() {
  const navigate = useNavigate()
  const [foods, setFoods] = useState(data);

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-transparent">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>
            <img src="/img/meatlogo.png" alt="0" width='15%'/>
            <span className='black'>Meat</span>
            <span className='pink'>Club</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}}>HOME</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/detail/1')}}>MENU</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/cart')}}>CART</Nav.Link>
              <Nav.Link>Pricing</Nav.Link>
            </Nav>
            <Nav className='logintext'>
              <Nav.Link>LOGIN</Nav.Link>
              <Nav.Link>Cart</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
          <Route path="/" element={<Home foods={foods}></Home>} />
          <Route path="/detail/:id" element={<Detail foods={foods}></Detail>} />
      </Routes>



      

      <div className='footer'>
        <Container>
          <Row>
            <Col lg={4} className='part'>
              <h3><img src="/img/meatlogo_small.png" alt="1" />The Meat Club</h3>
              <p>Which morning fourth great won't is to fly bearing man. Called unto shall seed, deep, herb set seed land divide after over first creeping. First creature set upon stars deep male gathered said she'd an image spirit our</p>
            </Col>

            <Col lg={4} className='part'>
              <h3>Contact Us</h3>
              <div className='ContactUs'>
                <img src="/img/instagram.png" alt="1" />
                <p>themeatclub.instagram</p>
              </div>
              <div className='ContactUs'>
                <img src="/img/youtube.png" alt="2" />
                <p>https://TheMeatClub_youtube.com</p>
              </div>
              <div className='ContactUs'>
                <img src="/img/naverblog.png" alt="3" />
                <p>support@naver.blog.com</p>
              </div>
            </Col>

            <Col lg={4} className='part'>
            <div className='partcontents'>
              <h3>Opening Hours</h3>
              <h6>Monday ...................... Closed</h6>
              <h6>Tue-Fri .............. 10 am - 12 pm</h6>
              <h6>Sat-Sun ............... 8 am - 11 pm</h6>
              <h6>Holidays ............. 10 am - 12 pm</h6>
            </div>
            </Col>

          </Row>

        </Container>
      </div>


    </div>
  );
}



export default App;
