import '../Detail.css'
import {Container,Row,Col,Nav,Button, TabContent} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';



  const Detail = (props)=>{
    let {id} = useParams();
    let {foods}= props
    let [tab,setTab] = useState(0)
    let navigate = useNavigate();

    let [click, setClick] = useState(0); 
    
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
            {
              (()=>{
                if(click===0){
                  return <img src={foods[id].imgUrl} alt="topblade" width="100%" />
                }else if(click===1){
                  return <img src={foods[id].imgUrl1} alt="topblade" width="100%" />
                }else if(click===2){
                  return <img src={foods[id].imgUrl2} alt="topblade" width="100%" />
                }
              })()
            }
            
            </div>
            
              {
              foods[id].imgUrl2 !== undefined &&
               <div className='imgUrlBox'>
                <img src={foods[id].imgUrl} alt="imgUrl1" width="100px" onClick={()=>(setClick(0))}/>
                <img src={foods[id].imgUrl1} alt="imgUrl2" width="100px"  onClick={()=>(setClick(1))}/>
                <img src={foods[id].imgUrl2} alt="imgUrl3" width="100px"  onClick={()=>(setClick(2))}/>
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
        <Nav variant="tabs" defaultActiveKey="link0">

          <Nav.Item>
            <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">steak</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>

        </Nav>

        {<div tab={tab}>
          {(() => {
            if (tab === 0) {
              return <div>
                <img src={foods[id].imgUrl} alt="imgUrl1" width="100px" />
              </div>
            } else if (tab === 1) {
              return <div>내용1</div>
            } else if (tab === 2) {
              return <div>내용2</div>
            }
          })()
          }
        </div>}


        <TabContent tab={tab} />

      </div>

    </Container>
  );
}

export default Detail;