import React, { useRef, useState } from 'react'
import { Container, Row, Carousel, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// import Product from './Product.jsx';
// interval={null}
const Home = (props) => {

    const { foods } = props

    return (
        <>
            <div className="slider">
                <Container>
                    <div className='sliderText'>
                        <p>The</p>
                        <p>Meat</p>
                        <p>Club</p>
                        <h4>well made steak for you</h4>
                    </div>
                </Container>
                <Carousel >
                    <Carousel.Item>
                        <img src="/img/bg1.jpg" alt="" width='100%' />                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/img/bg2.jpg" alt="" width='100%' />                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/img/bg3.jpg" alt="" width='100%' />                        
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
                    <div className='section2title'><h4>our special menu</h4></div>
                    <Container>
                        <div className='swiper'>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    
                                    576: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                    },
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src="img/tborn_1.jpg" alt="" /><div className='swipertext'>sadasfasfdasgasdfsad</div></SwiperSlide>
                                <SwiperSlide><img src="img/tborn_1.jpg" alt="" /><div className='swipertext'></div></SwiperSlide>
                                <SwiperSlide><img src="img/tborn_1.jpg" alt="" /><div className='swipertext'></div></SwiperSlide>
                                <SwiperSlide>Slide 4</SwiperSlide>
                                <SwiperSlide>Slide 5</SwiperSlide>
                                <SwiperSlide>Slide </SwiperSlide>
                 
                 
                            </Swiper>
                        </div>
                    </Container>

                </div>
            </div>
        </>
    )
}

export default Home