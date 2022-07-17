import React from 'react';

import './Principal.css'

import Arrow from '../../Assets/arrow.png'

function Principal() {
  return(
    <div className='Principal'>
      <img src={Arrow} className='Image Up' />
        <h2>Principal</h2>
      <img src={Arrow} className='Image Down' />
    </div>
  );
}

export default Principal;