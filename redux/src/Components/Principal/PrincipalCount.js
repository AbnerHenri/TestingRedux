import React from 'react';
import './Principal.css'

import Arrow from '../../Assets/arrow.png'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../Redux/CounterSlice'

function Principal() {

  const Count = useSelector((state)=> { return state.count.value })
  const Dispatch = useDispatch()

  function changeState(type) {
    if(type === 'INCREMENT'){
      Dispatch(increment())
    }else{
      Dispatch(decrement())
    }
  }

  return(
    <div className='Principal'>
      <img src={Arrow} className='Image Up' alt='Increment' onClick={()=> changeState('INCREMENT')}/>
        <h2>{Count}</h2>
      <img src={Arrow} className='Image Down' alt='Decrement' onClick={()=> changeState('DECREMENT')}/>
    </div>
  );
}

export default Principal;