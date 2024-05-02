import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { addCount, sortName, removeCount, removeItem } from "./../store.js";



function Cart() {
   
    
    // let user = useSelector(state => state.user);
    let cart = useSelector(state => state.cart);
    // let { name, age } = user;

    // console.log(state.cart[0].name);

    // dispatch는 store.js 로 요청보내주는 함수

    let dispatch = useDispatch() //4. useDispatch() import하고 사용
    let [shipping, setShipping] = useState(3000);

    function total(){
        let sum = 0;
        for (let v in cart){
            sum += cart[v].price * cart[v].amount
        }
        return sum
    }
    
    useEffect(()=>{
        function shipping(){
            if(total() >=50000){
                setShipping(0);
            }else{
                setShipping(3000);
            }
        }
        shipping();
    });


    return (

        <Container style={{ paddingTop: "250px", paddingBottom:"250px" }}>
            {/* <button onClick={()=>{
           dispatch(increase(1))}
        }>나이+</button> //5. dispatch(state변경함수()) 사용
        <button onClick={()=>{
           dispatch(increase(100))}}>나이+</button> */}

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품이미지</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cart.map((v, i) =>
                            <tr key={i}>
                                <td>{v.id}</td>
                                <td><img src={process.env.PUBLIC_URL +v.imgUrl} alt="" width="100px" /></td>
                                <td>{v.title}</td>
                                <td>{v.amount}</td>
                                <td>
                                    <button className='plus' onClick={() =>
                                        dispatch(addCount(v.id))
                                    }>+</button>
                                    <button className='minus' onClick={() =>
                                        dispatch(removeCount(v.id))
                                    }>-</button>
                                    <button className='cancel' onClick={() =>
                                        dispatch(removeItem(v.id))
                                    }>cancel</button>
                                </td>
                            </tr>
                        )
                    }

                    

                </tbody>

            </Table>
            <h3>total:{total()}$</h3>

            <Button variant="outline-warning" onClick={() => {

                dispatch(sortName())

            }}>Sort by name</Button>{' '}

        </Container>

    )

}



export default Cart
