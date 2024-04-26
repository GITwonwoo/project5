import React from 'react'
import { useNavigate } from 'react-router-dom';

const Beverage = (props) => {
  const navigate = useNavigate()
  const {beverage,i}= props
    
  return (      
    <div className='box' onClick={() => { navigate('/detail/beverage/' + i) }}>
        <div className='img-wrap'>
            <div className='thumb'>
                <img src={beverage.imgUrl} alt="food" width="100%" />
            </div>

        </div>
    </div>
    //   <SwiperSlide>
        
    //       <img src={beverage.imgUrl} alt="" width="100%" />
    //       <h4>{beverage.title}<span>{beverage.price}$</span></h4>
    //       <p>{beverage.content}</p>
    //   </SwiperSlide>
  )
}
     


export default Beverage