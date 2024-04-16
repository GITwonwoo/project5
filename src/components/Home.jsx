import React from 'react'
import { Container, Row, Carousel, Col } from 'react-bootstrap';
// import Product from './Product.jsx';
// interval={null}
const Home = (props) => {

    const { foods } = props

    return (
        <>
            <div className="slider">
                <div className='sliderText'>
                    <p>The</p>
                    <p>Meat</p>
                    <p>Club</p>
                    <h4>well made steak for you</h4>
                </div>
                <Carousel >
                    <Carousel.Item>
                        <img src="/img/bg1.jpg" alt="" width='100%' />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/img/bg2.jpg" alt="" width='100%' />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/img/bg3.jpg" alt="" width='100%' />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


            <div className='main'>
                <div className='section1'>
                    <Container>
                        <div className="title">
                            <h4>we serve</h4>
                            <h2>delicious food</h2>
                            <p>They're fill divide i their yielding our after have him fish on there for greater man moveth, moved Won't together isn't for fly divide mids fish firmament on net.</p>
                        </div>

                        <Row>

                     {
                        foods.map((food, i) =>
                         <Col lg={4} sm={6}>
                             <div className='box'>
                                 <div className='img-wrap'>
                                     <div className='thumb'>
                                         <img src={food.imgUrl} alt="" width="100%" />
                                     </div>
                                     <div className='textbox'>
                                         <h4>{food.title} <span>{food.price}$</span></h4>
                                         <p>{food.content}</p>
                                     </div>
                                 </div>
                             </div>
                        </Col>
                         )
                     }

                        </Row>

                    </Container>
                </div>

                <div className='section2'>
                    <div className='middlebanner'>
                        <div className='bannertext'>
                            <p>Natural ingredients and testy food</p>
                            <p>Some Trendy And Popular Courses Offerd
                            </p>
                        </div>
                        <button>RESERVATION</button>
                    </div>
                    <Container>

                    </Container>

                </div>
            </div>
        </>
    )
}

export default Home