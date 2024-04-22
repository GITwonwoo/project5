import '../Detail.css'
import {Container,Row,Col,Nav} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



  const Detail = (props)=>{
    let {foods} = props;
  
  return (
    <Container className='detailwrap'>
    <div className='Detailsection1'>
      <Row>
        <Col md={6} className='topblade'>
          <img src="../img/topblade_2.jpg" alt="topblade" width="100%" />
          </Col>
        <Col md={6}>
          
            <div className='ProductInfor'>
          
              <div className='ProductText'> 
              <img className='signature' src="../img/signature.png" alt="signature" /> 
                 <h4>{foods[1].title}</h4>
                 
                 </div>
              <div><h6>This menu is the meat's signature menu, and the self-developed sauce and aged meat go well together. I recommend it.</h6></div>
              <table>
                <tr>
                  <th>price</th>
                  <td><span className='gold'>{foods[1].price}</span></td>
                </tr>
                <tr>
                  <th>weight</th>
                  <td>300g</td>
                </tr>
                <tr>
                  <th></th>
                  <td></td>
                </tr>
              </table>
              
              <table>
                <tr>
                  <th>weight</th>
                  <td>700g</td>
                  <th>fat</th>
                  <td>15g</td>
                  <th>carbohydrate</th>
                  <td>550g</td>
                </tr>

                <tr>
                  <th>protein</th>
                  <td>80g</td>
                  <th>sodium</th>
                  <td>995.3mg</td>
                  <th>calorie</th>
                  <td>870kcal</td>
                </tr>
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