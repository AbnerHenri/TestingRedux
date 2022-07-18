import './Secondary.css'

import { useSelector } from 'react-redux' 

function Secondary({ value }) {

  const Count = useSelector((state)=> { return state.count.value })

  return(
    <div className='Secondary'>
        <h2>{Count + value}</h2>
    </div>
  );
}

export default Secondary;