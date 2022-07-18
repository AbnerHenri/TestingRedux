import React from 'react';
import './Principal.css'

import Arrow from '../../Assets/arrow.png'

import { useSelector } from 'react-redux'

function Principal() {

  const Count = useSelector((state)=> { return state.count.value })

  return(
    <div className='Principal'>
      <img src={Arrow} className='Image Up' />
        <h2>{Count}</h2>
      <img src={Arrow} className='Image Down' />
    </div>
  );
}

export default Principal;