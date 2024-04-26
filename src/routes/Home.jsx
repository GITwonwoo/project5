import React, { useRef, useState } from 'react'
import { Container, Row, Carousel, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

// import Product from './Product.jsx';
// interval={null}
    const Home = (props) => {
    const navigate = useNavigate()
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
                            <p>We have been grilling steaks for over 10 years, have a lot of business know-how, and have differentiated taste and service from other steakhouses. Please visit and try it.</p>
                        </div>

                        <Row>

                            {
                                foods.map((food, i) =>
                                    <Col lg={4} sm={6} key={food.id} >
                                        <div className='box' onClick={()=>{navigate('/detail/food/'+i)}}>
                                            <div className='img-wrap'>
                                                <div className='thumb'>
                                                    <img src={food.imgUrl} alt="food" width="100%"/>
                                                </div>
                                                <div className='textbox'>
                                                    <h4>{food.title} <span>{food.price} $</span></h4>
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
                    <div className='section2title'>
                        <h4>our special menu</h4>
                        <h2>Comming Soon</h2>
                    </div>
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
                                <SwiperSlide>
                                    <img src="img/food1.webp" alt="" />
                                    <div className='swipertext'>
                                        <i style={{ fontSize: '20px', color: 'gray' }} class="fa-regular fa-user"></i >admin

                                        <i class="fa-solid fa-calendar-days"></i>2024/05/15
                                        <p>
                                            <h5>steak burger</h5>
                                            <h6>
                                                We made handmade steak burgers using our own processed meat patties. Try a meat patty that is on a different level from existing franchise burgers.
                                            </h6>
                                        </p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="img/food2.jpg" alt="" />
                                    <div className='swipertext'>
                                        <i style={{ fontSize: '20px', color: 'gray' }} class="fa-regular fa-user"></i >admin

                                        <i class="fa-solid fa-calendar-days"></i>2024/
                                        05/15
                                        <div>
                                            <h5>sirloin sushi</h5>
                                            <h6>Koreans are always craving rice. I made sushi by adding homemade steak to the rice.</h6>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="img/food3.webp" alt="" />
                                    <div className='swipertext'>
                                        <i style={{ fontSize: '20px', color: 'gray' }} class="fa-regular fa-user"></i >admin
                                        <i class="fa-solid fa-calendar-days"></i>2024/
                                        05/15
                                        <p>
                                            <h5>ddeokgalbi</h5>
                                            <h6>
                                                Tteokgalbi is a traditional Korean food. It is made by mincing meat in the Korean way and is similar to a patty, but has a Korean taste.</h6>
                                        </p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="img/food4.webp" alt="" />
                                    <div className='swipertext'>
                                        <i style={{ fontSize: '20px', color: 'gray' }} class="fa-regular fa-user"></i >admin
                                        <i class="fa-solid fa-calendar-days"></i>2024/
                                        05/15
                                        <p>
                                            <h5>steak hotdog</h5>
                                            <h6>We made it easy for anyone to take out by putting steak on a hot dog-style bun. Of course, you can also eat in the store.</h6>
                                        </p>
                                    </div>
                                </SwiperSlide>




                            </Swiper>
                        </div>
                    </Container>

                </div>
            </div>
        </>
    )
}

export default Home