import '../Detail.css'
import { Container, Row, Col, Nav, Button, TabContent } from 'react-bootstrap';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Beverage from '../components/Beverage';
import { useDispatch } from 'react-redux';
import { addItem } from '../store';
// import { useDispatch } from 'react-redux';



const Detail = (props) => {

  let { id } = useParams();
  let { main, foods,beverage } = props
  
  let [tab, setTab] = useState(0)
  let navigate = useNavigate();
  const dispatch = useDispatch();

  let [click, setClick] = useState(0);


  return (

    <Container className='detailwrap'>

      <div className='Detailsection1'>

        <Row>
          <Col md={6} className='steakIMG'>
            <h2>--our menu--</h2>
            <h1>{main[id].title}</h1>

            <div>
              {
                main[id].logo !== undefined &&
                <img className='signature' src={main[id].logo} alt="signature" width="25%" />
              }
              {
                (() => {
                  if (click === 0) {
                    return <img src={main[id].imgUrl} alt="topblade" width="100%" />
                  } else if (click === 1) {
                    return <img src={main[id].imgUrl1} alt="topblade" width="100%" />
                  } else if (click === 2) {
                    return <img src={main[id].imgUrl2} alt="topblade" width="100%" />
                  }
                })()
              }

            </div>

            {
              window.location.href.indexOf('/food')>0  &&
              <div className='imgUrlBox'>
                <img src={main[id].imgUrl} alt="imgUrl1" width="100px" onClick={() => (setClick(0))} />
                <img src={main[id].imgUrl1} alt="imgUrl2" width="100px" onClick={() => (setClick(1))} />
                <img src={main[id].imgUrl2} alt="imgUrl3" width="100px" onClick={() => (setClick(2))} />
              </div>
            }
          </Col>
          
          <Col md={6}className='ProductInfor'>

            <div className='ProductText'>
              <div className='buttonbox'>

                 <button className='buy' onClick={()=>{
                  dispatch(addItem({id:main[id].id, imgUrl:main[id].imgUrl,title:main[id].title,price:main[id].price,amount:1}))
                  navigate("/cart")
                 }}>
                  buy</button>
                 
                 <button className='mycart' onClick={()=>{
                  navigate("/cart")
                 }}>
                  my cart</button>
                 
              </div>
            <img className='textbg' src="/img/textbg.png" alt="textbg" width="100%" />
              <h4>delicious information</h4>
              <h6>{main[id].content}</h6>

              <table>
                <tbody>
                  <tr className='bold'>
                    <th>price</th>
                    <td><span className='Gold'>{main[id].price}$</span></td>
                  </tr>
                </tbody>
              </table>

              <br />
              <br />
              <h5>nutrient</h5>

              <table className='nutrient'>
                <tbody>
                  <tr>
                    <th>weight:</th>
                    <td>{main[id].weight}</td>
                    <th>fat:</th>
                    <td>{main[id].fat}</td>
                  </tr>

                  <tr>
                    <th>carbohydrate:</th>
                    <td>{main[id].carbohydrate}</td>
                    <th>protein:</th>
                    <td>{main[id].protein}</td>
                  </tr>

                  <tr>
                    <th>sodium:</th>
                    <td>{main[id].sodium}</td>
                    <th>calorie:</th>
                    <td>{main[id].calorie}</td>
                  </tr>
                </tbody>
              </table>
            </div>

        
          </Col>
        </Row>
      </div>

      <div className='Detailsection2'>
        <div><h4>View other menus</h4></div>
        <Nav className='bgcolor' variant="tabs" defaultActiveKey="link0">

          <Nav.Item>
            <Nav.Link onClick={() => { setTab(0) }} eventKey="link0"><span>steak</span></Nav.Link>
          </Nav.Item>

          {/* <Nav.Item>
            <Nav.Link onClick={() => { setTab(1) }} eventKey="link1"><h5>side</h5></Nav.Link>
          </Nav.Item> */}

          <Nav.Item>
            <Nav.Link onClick={() => { setTab(1) }} eventKey="link1"><span>beverage</span></Nav.Link>
          </Nav.Item>

        </Nav>

        {<div tab={tab}>
          {(() => {
            if (tab === 0) {
              return <div className='tabimgs'>

                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {
                    foods.map((food, i) =>
                      <SwiperSlide key={food.id}>
                        <div className='box' onClick={() => { navigate('/detail/food/' + i) }}>
                          <div className='img-wrap'>
                            <div className='thumb'>
                              <img src={food.imgUrl} alt="food" width="100%" />
                            </div>

                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  }

                </Swiper>




              </div>
            // } else if (tab === 1) {
            //   return <div>
            //     <Swiper
            //       slidesPerView={3}
            //       spaceBetween={30}
            //       pagination={{
            //         clickable: true,
            //       }}
            //       modules={[Pagination]}
            //       className="mySwiper"
            //     >
            //       {
            //         foods.map((food, i) =>
            //           <SwiperSlide>
            //             <div className='box' onClick={() => { navigate('/detail/' + i) }}>
            //               <div className='img-wrap'>
            //                 <div className='thumb'>
            //                   <img src={food.imgUrl} alt="food" width="100%" />
            //                 </div>

            //               </div>
            //             </div>
            //           </SwiperSlide>
            //         )
            //       }

            //     </Swiper>

            //   </div>
            } else if (tab === 1) {
              return <div>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {
                    beverage.map((bev, i) =>
                    <SwiperSlide key={bev.id}>
                      <Beverage beverage={bev} i={i} />
                    </SwiperSlide>
                      
                    )
                  }

                </Swiper>

              </div>
            }
          })()
          }
        </div>}

   
        <TabContent tab={tab} />

      </div>


      <div className='Detailsection3' >
        
      </div>

    </Container>

  );
}

export default Detail;