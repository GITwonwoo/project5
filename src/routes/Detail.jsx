import '../Detail.css'
import {Container,Row,Col,Nav} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';



  const Detail = (props)=>{
    let {id} = useParams();
    let {foods}= props;
    // console.log(foods[id].logo)
  return (
  <Container className='detailwrap'>
    <div className='Detailsection1'>
         
        <Row>
          <Col md={6} className='steakIMG'>
            <h2>--our menu--</h2>
            <h1>{foods[id].title}</h1>
           
            <div>
            {
              foods[id].logo !== undefined &&
              <img className='signature' src={foods[id].logo} alt="signature" width="25%" />
            }
            <img src={foods[id].imgUrl} alt="topblade" width="100%" />
            </div>
            
              {
              foods[id].imgUrl1 !== undefined &&
               <div className='imgUrlBox'>
                <img src={foods[id].imgUrl1} alt="imgUrl1" width="100px" />
                <img src={foods[id].imgUrl2} alt="imgUrl2" width="100px" />
                <img src={foods[id].imgUrl3} alt="imgUrl3" width="100px" />
              </div>
              }
           
            
          </Col>
          <Col md={6} className='ProductInfor'>

            <img src="../img/textbg.png" alt="textbg" width="100%" />

            <div className='ProductText'>
              <h4>delicious information</h4>
              <h6>{foods[id].content}</h6>

              <table>
                <tbody>
                  <tr className='bold'>
                    <th>price</th>
                    <td><span className='Gold'>{foods[id].price}$</span></td>
                  </tr>
                </tbody>
              </table>

              <br/>
              <br/>
              <h5>nutrient</h5>

              <table className='nutrient'>
                <tbody>
                  <tr>
                    <th>weight:</th>
                    <td>{foods[id].weight}</td>
                    <th>fat:</th>
                    <td>{foods[id].fat}</td>
                  </tr>

                  <tr>  
                    <th>carbohydrate:</th>
                    <td>{foods[id].carbohydrate}</td>
                    <th>protein:</th>
                    <td>{foods[id].protein}</td>
                  </tr>

                  <tr>
                    <th>sodium:</th>
                    <td>{foods[id].sodium}</td>
                    <th>calorie:</th>
                    <td>{foods[id].calorie}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </div>

    <div className='Detailsection2'>

    </div>
  </Container>
  );
}

export default Detail;