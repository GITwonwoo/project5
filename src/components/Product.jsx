import React from 'react'
import { Col } from 'react-bootstrap';

const Product = (props) => {
  
    const {food}=props
  return (
      <Col lg={4} sm={6}>
          <img src={food.imgUrl} alt="" width="100%" />
          <h4>{food.title}<span>{food.price}$</span></h4>
          <p>{food.content}</p>
      </Col>
  )
}

export default Product