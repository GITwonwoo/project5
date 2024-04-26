import { configureStore,createSlice } from '@reduxjs/toolkit'	

let user = createSlice({
    name: 'user', 
    initialState : {name:'kim',age:20},
    reducers:{
        changeName(state){
            state.name='john kim'
        },
        increase(state,action){
            state.age+=action.payload
        }
    }
 })

export let{changeName,increase}=user.actions

let cart = createSlice({
    name:'cart',
    initialState:[],
    reducers : {
        addCount(state, action){
           let idx = state.findIndex((a)=>{ return a.id === action.payload }) 
           ++state[idx].amount;
        },

        removeCount(state,action){
         let num =state.findIndex(a =>a.id===action.payload)
         state[num].amount--
         if(state[num].amount<1){
            alert('최소 주문 수량은 1개 입니다.');
            state[num].amount=1;
         }
        },

        removeItem(state,action){
         let num = state.findIndex(a=> a.id===action.payload)
         state.splice(num,1)
        },
        addItem(state, action){
       
            let num = state.findIndex(a => a.id === action.payload.id)
            if (num>=0) {
               state[num].amount++;
            }else{
               state.push(action.payload);
            }
         
     },
     sortName(state){
      state.sort((a,b)=>a.name > b.name ? 1:-1)
     }
   }
  })
  
  export let { addCount, sortName, addItem, removeCount, removeItem } = cart.actions


export default configureStore({

   reducer: { 
    user: user.reducer,
    cart: cart.reducer
   }

}) 
